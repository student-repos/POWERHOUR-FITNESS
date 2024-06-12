import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telephone: { type: String },
    verified: { type: Boolean, default: false },
    role: { type: String, enum: ["member", "trainer", "admin"] },
    picture: { type: String },
    address: { type: String },
    trainerType: { type: String, enum: ["yoga", "pilates", "fitness"] },
    trainerDescription: { type: String }
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
