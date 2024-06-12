import contactForm from "../models/contactForm.js";

const postNewContact = async (req, res) => {
  try {
    const { firstName, lastName, email, telephone, message } = req.body;

    const newContact = new contactForm({
      firstName,
      lastName,
      email,
      telephone,
      message,
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error saving contact", details: error.message });
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
