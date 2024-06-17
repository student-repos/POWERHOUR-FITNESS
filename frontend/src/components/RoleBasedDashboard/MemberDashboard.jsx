import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import '../Dashboard/Dashboard.css';

function MemberDashboard() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>; // or redirect to login page
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {user.firstName}!</h2>
        <p>Role: {user.role}</p>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <div className="programs">
        <h3>Programs</h3>
        <p>List of enrolled programs...</p>
      </div>
      <div className="progress-summary">
        <h3>Progress Summary</h3>
        <p>Overview of fitness progress...</p>
      </div>
      <div className="menu-options">
        <h3>Menu Options</h3>
        <ul>
          <li>Book Programs: Browse and enroll in classes</li>
          <li>Profile: Update personal info, goals</li>
        </ul>
      </div>
    </div>
  );
}

export default MemberDashboard;
