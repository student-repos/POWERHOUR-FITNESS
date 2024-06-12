import  {Schema, model } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String },
  description: { type: String, required: true },
  trainerName: { type: String, required: true },
  capacity: { type: Number, required: true },
  activities: { type: String, enum: ["yoga", "pilates", "fitness"], required: true },
  date: { type: String, required: true },
  duration: { type: String, required: true } 
}, { timestamps: true });

const Course = model('Course', courseSchema);

export default Course;
