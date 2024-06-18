import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  // picture: { type: String },
  // fullName: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rating: {type: Number, required: true, min: 1, max: 5},
  message: { type: String, required: true },
}, { timestamps: true });

const Review = model('Review', reviewSchema);

export default Review;
