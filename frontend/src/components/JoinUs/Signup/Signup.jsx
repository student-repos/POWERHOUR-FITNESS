import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./Signup.css";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:7500/user/signup", formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Signup failed, please try again.");
    }
  };

  return (
    <div className="signup-page">
      <div className="header">
        <Link to="/" className="logo-link">
          <div className="logo-box">
            <img className="logo" src={Logo} alt="weight lifting logo" />
            <span className="logo-text">PowerHour</span>
          </div>
        </Link>
      </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Firstname:
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <label>
              Lastname:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
          </div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <label>
            Repeat Password:
            <input type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} />
          </label>
          <label className="terms">
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
            By using it, you agree to our Privacy Policy as well as our Terms and Conditions
          </label>
          <button type="submit" className="signup-button">
            Create account
          </button>
        </form>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
