import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(formData.email, formData.password);
    } catch (error) {
      console.error(error);
      alert("Login failed, please try again.");
    }
  };

return (
  <div className="login-page">
    <div className="header">
      <Link to="/" className="logo-link">
        <div className="logo-box">
          <img className="logo" src={Logo} alt="weight lifting logo" />
          <span className="logo-text">PowerHour</span>
        </div>
      </Link>
    </div>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  </div>
);
};
export default Login;
