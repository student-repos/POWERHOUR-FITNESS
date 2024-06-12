import { Schema, model } from "mongoose";

const offerSchema = new Schema({
  deadline: { type: String, required: true },
  activity: { type: String, required: true },
  season: { type: String, required: true },
  monthlyPrice: { type: String, required: true },
  cMonthlyPrice: { type: String, required: true },
  pMonthlyPrice: { type: String, required: true } 
}, { timestamps: true });

const Offer = model('Offer', offerSchema);

export default Offer;
