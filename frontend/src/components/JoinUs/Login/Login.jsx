import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from 'notistack';
import Logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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
      const response = await axios.post('http://localhost:7500/user/login', {
        email: formData.email,
        password: formData.password,
      });
      const { accessToken, user, dashboardUrl } = response.data;

      // Store token and user details in context
      login(accessToken, user);

      // Redirect to the dashboard
      navigate(dashboardUrl);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      } else {
        console.error('Login failed', error);
        enqueueSnackbar('Login failed, please try again.', { variant: 'error' });
      }
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
