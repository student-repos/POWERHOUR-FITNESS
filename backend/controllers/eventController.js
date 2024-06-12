import Event from "../models/event.js";

const postNewEvent = async (req, res) => {
  try {
    const { title, description, award, capacity, date } = req.body;

    const newEvent = new Event({
      title,
      description,
      award,
      capacity,
      date,
    });

    await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error saving event', details: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events', details: error.message });
  }
};

const updateEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error updating event', details: error.message });
  }
};

const deleteEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(deletedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting event', details: error.message });
  }
};

export {
  postNewEvent,
  getAllEvents,
  updateEventById,
  deleteEventById,
};
