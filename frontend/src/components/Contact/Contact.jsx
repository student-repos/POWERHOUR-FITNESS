import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="about">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div>
          <p>Email: info@powerhour.io</p>
          <p>Phone: 321-221-321</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="How can we help?" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
