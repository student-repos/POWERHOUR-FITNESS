import contactForm from "../models/contactForm.js";
import {Resend} from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

const postNewContact = async (req, res) => {
  try {
    const { firstName, lastName, email, telephone, message } = req.body;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev", // Use the correct sender email for testing
      to: "powerhour2024@outlook.com", // Your email address
      subject: "New Contact Form Submission",
      html: `<h1>Customer Contact From PowerHour Fitness Website</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
        <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Email sent:', emailResponse);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactForm.find();
    res.json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching contacts", details: error.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactForm.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching contact", details: error.message });
  }
};

export { postNewContact, getAllContacts, getContactById };

