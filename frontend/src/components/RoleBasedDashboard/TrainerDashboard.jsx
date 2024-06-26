import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../components/RoleBasedDashboard/TrainerDashboard.css";
import defaultProfileImage from "../../assets/profile.jpg";

const TrainerDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:7500/user/trainer/programs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs", error);
        setError("Error fetching programs");
      }
    };

    if (user) {
      fetchPrograms();
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleMenuClick = (route) => {
    navigate(route);
  };

  const handleDeleteAccount = async () => {
    try {
      const url = `http://localhost:7500/user/${user._id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      logout();
      navigate("/");
    } catch (error) {
      console.error(
        "Error deleting account",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response ? error.response.data.error : "Error deleting account"
      );
    }
  };

  const profilePictureUrl = user.picture
    ? `http://localhost:7500/uploads/${user.picture}`
    : defaultProfileImage;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>
          Welcome, <span className="user-firstname">{user.firstName}</span>!
        </h2>
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {user.email} ({user.role})
            <img src={profilePictureUrl} alt="Profile" className="profile-icon" />
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleMenuClick("/trainer/programs")}>
                Manage Programs
              </button>
              <button onClick={() => handleMenuClick("/update-profile-pic")}>
                Update Profile Pic
              </button>
              <button onClick={() => handleMenuClick("/update-profile")}>
                Update Profile
              </button>
              <button onClick={handleDeleteAccount}>Delete Account</button>
              <hr />
              <button onClick={logout}>Log out</button>
            </div>
          )}
        </div>
      </div>
      <div className="programs">
        <h3>Programs</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <li key={index}>{program.title}</li>
            ))
          ) : (
            <p>No programs found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TrainerDashboard;
