import User from "../models/user.js";
import asyncHandler from "../config/asyncHandler.js";


const getAllTrainers    = asyncHandler(async (req, res) => {
  const trainers = await User.find({ role: "trainer" });
  res.json(trainers);
});

export { getAllTrainers };