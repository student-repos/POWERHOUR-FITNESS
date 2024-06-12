import e from "express";
import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    default: "Pending", 
    enum: ['Pending', 'Confirmed', 'Cancelled'] 
  }
}, { timestamps: true });

const Booking = model('Booking', bookingSchema);

export default Booking;
