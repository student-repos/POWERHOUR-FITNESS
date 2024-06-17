import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import '../Dashboard/Dashboard.css';
import axios from 'axios';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'member', // Default role for new members
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard/admin', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/addmember', newMember, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setShowAddMemberForm(false);
      // Optionally refresh dashboard data or notify success
    } catch (error) {
      console.error('Error adding new member', error);
    }
  };

  if (!user || !dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {user.firstName}!</h2>
        <p>Role: {user.role}</p>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <div className="quick-stats">
        <h3>Quick Stats</h3>
        <p>Number of active members: {dashboardData.membersCount}</p>
        <p>Number of trainers: {dashboardData.trainersCount}</p>
        <p>Number of classes: {dashboardData.classesCount}</p>
      </div>
      <div className="actions">
        <h3>Quick Actions</h3>
        <button onClick={() => setShowAddMemberForm(true)}>Add Member</button>
        <button>Create Program</button>
      </div>
      {showAddMemberForm && (
        <div className="add-member-form">
          <h3>Add New Member</h3>
          <form onSubmit={handleAddMember}>
            <label>
              First Name:
              <input type="text" name="firstName" value={newMember.firstName} onChange={handleChange} required />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" value={newMember.lastName} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={newMember.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={newMember.password} onChange={handleChange} required />
            </label>
            <button type="submit">Add Member</button>
            <button type="button" onClick={() => setShowAddMemberForm(false)}>Cancel</button>
          </form>
        </div>
      )}
      <div className="menu-options">
        <h3>Menu Options</h3>
        <ul>
          <li>Members: View, add, edit, delete</li>
          <li>Trainers: View, add, edit, delete</li>
          <li>Programs: View, add, edit, delete</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
