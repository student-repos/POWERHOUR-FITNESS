import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../components/RoleBasedDashboard/AdminDashboard.css";
import defaultProfileImage from "../../assets/profile.jpg";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [programs, setPrograms] = useState([]);
  const [members, setMembers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const programsResponse = await axios.get("http://localhost:7500/user/admin/programs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPrograms(programsResponse.data);

        const membersResponse = await axios.get("http://localhost:7500/user/admin/members", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMembers(membersResponse.data);

        const trainersResponse = await axios.get("http://localhost:7500/user/admin/trainers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTrainers(trainersResponse.data);
      } catch (error) {
        console.error("Error fetching admin data", error);
        setError("Error fetching admin data");
      }
    };

    if (user) {
      fetchAdminData();
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
              <button onClick={() => handleMenuClick("/admin/programs")}>
                Manage Programs
              </button>
              <button onClick={() => handleMenuClick("/admin/members")}>
                Manage Members
              </button>
              <button onClick={() => handleMenuClick("/admin/trainers")}>
                Manage Trainers
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
      <div className="members">
        <h3>Members</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {members.length > 0 ? (
            members.map((member, index) => (
              <li key={index}>{member.firstName} {member.lastName}</li>
            ))
          ) : (
            <p>No members found</p>
          )}
        </ul>
      </div>
      <div className="trainers">
        <h3>Trainers</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {trainers.length > 0 ? (
            trainers.map((trainer, index) => (
              <li key={index}>{trainer.firstName} {trainer.lastName}</li>
            ))
          ) : (
            <p>No trainers found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
