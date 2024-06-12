import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  activity: { type: String, enum: ["yoga", "pilates", "fitness"], required: true },
}, { timestamps: true });

const Review = model('Review', reviewSchema);

export default Review;
