import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import '../Dashboard/Dashboard.css';

function TrainerDashboard() {
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
      <div className="my-schedule">
        <h3>My Schedule</h3>
        <p>Upcoming classes and training sessions...</p>
      </div>
      <div className="quick-stats">
        <h3>Quick Stats</h3>
        <p>Member progress overview...</p>
      </div>
      <div className="menu-options">
        <h3>Menu Options</h3>
        <ul>
          <li>Programs: View and manage assigned programs</li>
          <li>Members: Track progress of assigned members</li>
          <li>Profile: Update personal info, availability</li>
        </ul>
      </div>
    </div>
  );
}

export default TrainerDashboard;
