import Booking from "../models/booking.js";

// Post a new booking
const postBooking = async (req, res) => {
  try {
    const { courseId, userId, status } = req.body;

    if (!courseId || !userId || !status) {
      return res.status(400).json({ error: "courseId, userId, and status are required fields." });
    }

    // Ensure status is capitalized correctly
    const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

    // Create a new booking instance
    const newBooking = new Booking({
      courseId,
      userId,
      status: formattedStatus,
    });

    // Save the booking to the database
    const savedBooking = await newBooking.save();

    // Respond with the saved booking
    res.status(201).json(savedBooking);
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({
      error: "An error occurred while saving the booking.",
      details: error.message,
    });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching the bookings.",
      details: error.message,
    });
  }
};

// Update a booking by ID
const cancelBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the booking by ID
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Set the status to "Cancelled"
    booking.status = "Cancelled";

    // Save the updated booking
    const cancelledBooking = await booking.save();

    res.json(cancelledBooking);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while cancelling the booking.",
      details: error.message,
    });
  }
};

export { postBooking, getAllBookings, cancelBookingById };
