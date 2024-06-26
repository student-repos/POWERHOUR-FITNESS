import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// import './BookProgram.css';

const BookProgram = () => {
  const [programData, setProgramData] = useState({
    date: '',
    time: '',
    courseId: ''
  });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgramData({
      ...programData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7500/booking', programData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      enqueueSnackbar('Program booked successfully', { variant: 'success' });
      navigate('/manage-bookings');
    } catch (error) {
      console.error('Error booking program:', error);
      enqueueSnackbar('Error booking program', { variant: 'error' });
    }
  };

  return (
    <div className="book-program-container">
      <h2>Book a Program</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course ID:
          <input
            type="text"
            name="courseId"
            value={programData.courseId}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={programData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={programData.time}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookProgram;
