import { Schema, model } from "mongoose";

const contactFormSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const ContactForm = model('ContactForm', contactFormSchema);

export default ContactForm;
