import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7500/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear the form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          message: "",
        });
        // Show a success message
        alert("Your message was sent successfully.");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="contact" id="about">
      <div className="contact-details">
        <div className="contact-info">
        <h2>Contact Us</h2>
          <p>
            Email, call, or complete the form to learn how. <br />
            Powerhour can solve your messaging problem <br />
            <br />
            Email: info@powerhour.io
            <br />
            <br />
            Telephon: 321-221-321
          </p>
          <p>Email: info@powerhour.io</p>
          <p>Phone: 321-221-321</p>
          <div className="CF-Container">
            <div className="Customer-Support">
              <strong>Customer Support</strong>  <br /><br />
              Our support team is available around the clock to
              address any concerns or queries you may have.
            </div>
            <div className="Feedback-Suggestions">
              <strong>Feedback and Suggestions</strong> <br /><br /> 
              We value your feedback and are
              continously working to improve Powerhour. your input is crucial in
              shaping the future of Powerhour.
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="FirstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telephone"
            placeholder="Phone"
            value={formData.telephone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
