import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./Signup.css";

function SignUp() {
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
        <form>
          <div className="form-row">
            <label>
              Firstname:
              <input type="text" name="firstName" />
            </label>
            <label>
              Lastname:
              <input type="text" name="lastName" />
            </label>
          </div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <label>
            Repeat Password:
            <input type="password" name="repeatPassword" />
          </label>
          <label className="terms">
            <input type="checkbox" name="terms" />
            By using it, you agree to our Privacy Policy as well as our Terms
            and Conditions
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
