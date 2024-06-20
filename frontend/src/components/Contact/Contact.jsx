import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="about">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email, call, or complete the form to learn how Powerhour can solve your messaging problem</p>
          <p>Email: info@powerhour.com</p>
          <p>Phone: 123-456-7890</p>
          <h4>Customer Support</h4>
          <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
          <h4>Feedback and suggestions</h4>
          <p>We value your feedback and are continuously working to improve Powerhour. Your input is crucial in shaping the future of Powerhour.</p>
        </div>
        <div className="contact-form-container">
          <h3>Get in Touch</h3>
          <p>You can reach us anytime</p>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="FirstName" />
              <input type="text" placeholder="LastName" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="How can we help?" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
