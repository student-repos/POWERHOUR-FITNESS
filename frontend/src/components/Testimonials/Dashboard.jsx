import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [fullName, setFullName] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/reviews', { fullName, rating, message });
    // Handle post submission logic
  };

  return (
    <div className="review-dashboard">
      <h1>Review Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => setRating(index + 1)}>
              {index < rating ? '⭐' : '☆'}
            </span>
          ))}
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Dashboard;
