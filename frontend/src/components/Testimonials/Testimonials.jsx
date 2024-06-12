import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Personal Service Clients Have to Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-card">
          <p>"FitTrack Pro is a user-friendly gym app with an extensive workout library, personalized plans, and a helpful nutrition tracker."</p>
          <p><strong>Stefanie Gonderman</strong><br />Happy Customer</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
