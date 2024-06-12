import React from 'react';
import './Offers.css';

function Offers() {
  return (
    <section className="offers" id="offers">
      <h2>Special Offers</h2>
      <div className="offer-list">
        <div className="offer-card">
          <h3>Summer Special</h3>
          <p>Great price for Yoga exercises.</p>
          <p>€5.00 Monthly</p>
          <button className="register">Register</button>
        </div>
        <div className="offer-card">
          <h3>Summer Special</h3>
          <p>Great price for Fitness exercises.</p>
          <p>€6.00 Monthly</p>
          <button className="register">Register</button>
        </div>
        <div className="offer-card">
          <h3>Summer Special</h3>
          <p>Great price for Pilates exercises.</p>
          <p>€4.00 Monthly</p>
          <button className="register">Register</button>
        </div>
      </div>
    </section>
  );
}

export default Offers;
