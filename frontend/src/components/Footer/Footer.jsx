import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>PowerHour</h3>
          <p>PowerHour is a premier fitness program designed to maximize your potential every hour.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@powerhour.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
