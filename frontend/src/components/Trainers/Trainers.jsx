import React from 'react';
import './Trainers.css';

function Trainers() {
  return (
    <section className="trainers" id="trainers">
      <h2>Your Trainers</h2>
      <div className="trainer-list">
        <div className="trainer-card">
          <h3>Marya Muller</h3>
          <p>Experienced yoga master dedicated to enhancing flexibility, balance, and inner peace for everyone.</p>
        </div>
        <div className="trainer-card">
          <h3>Jamse Hax</h3>
          <p>Expert fitness trainer committed to boosting strength, endurance, and overall health for all.</p>
        </div>
        <div className="trainer-card">
          <h3>Shagy Olustad</h3>
          <p>Certified Pilates trainer focused on improving strength, flexibility, and overall wellness for everyone.</p>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
