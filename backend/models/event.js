import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  award: { type: String },
  capacity: { type: Number, required: true },
  date: { type: String, required: true }
}, { timestamps: true });

const Event = model('Event', eventSchema);

export default Event;