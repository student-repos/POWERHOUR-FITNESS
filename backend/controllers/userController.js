import User from "../models/user.js";
import asyncHandler from "../config/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import VerificationToken from "../models/verificationToken.js";

const { JWT_SECRET } = process.env;
const { PORT } = process.env;

const signup = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Create a verification token
    const token = crypto.randomUUID();
    const verificationToken = await VerificationToken.create({
      userId: newUser._id,
      token,
    });

    // Send a verification email
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["abdulhassan.mohsini@dci-student.org"],
      subject: "Please verify your account",
      html: `<h1>Hello ${firstName}</h1>
      <p>Click on the following link to verify your account: 
      <a href="http://localhost:${PORT}/user/verify/${token}">http://localhost:${PORT}/user/verify/${token}</a>
      </p>`,
    });

    // Send the response
    res.status(200).json({
      message: "Signup successful. Please check your email for verification.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const verifyToken = asyncHandler(async (req, res) => {
  try {
    const { token } = req.params;

    // Find the verification token in the database
    const verificationToken = await VerificationToken.findOne({ token });
    if (!verificationToken) {
      return res.status(400).json({ message: "Invalid verification token" });
    }

    // Mark the user as verified
    await User.findByIdAndUpdate(verificationToken.userId, {
      $set: { verified: true },
    });

    // Delete the verification token from the database
    await VerificationToken.findByIdAndDelete(verificationToken._id);

    // Send the response
    res.status(200).json({ message: "Email verification successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const login = asyncHandler(async (req, res) => {
  // handle the req.body username and password
  const { email, password } = req.body;
  console.log(req.body);

  // check if the user document exists
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    res.status(401).json({ message: "User not found" });
    return;
  }
  // Check if the user has verified their email address**********
  if (!user.verified) {
    res.status(401).json({
      message:
        "You are not allowed to login before verifying your email address",
    });
    return;
  }
  // check/verify that the password provided is correct, by comparing it with the hashed one
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    // create jwt signature
    const accessToken = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1d" } // Optional: Set token expiry as needed
    );

    // Set token as a cookie
    res.cookie("token", accessToken, {
      httpOnly: true, // The cookie cannot be accessed by client-side JS
      secure: process.env.NODE_ENV === "production", // On production, set cookies over HTTPS
      maxAge: 24 * 60 * 60 * 1000, // cookie will be removed after 24 hours
    });

    // send a response with jwt and message "login successful"
    res.status(200).json({ message: "Login successful.", accessToken });
  } else {
    // If login fails
    res.status(401);
    throw new Error("Login failed due to invalid credentials");
  }
});

const getProtected = asyncHandler(async (req, res) => {
  const  {userId}  = req.user;
  // search for a user with the userId
  const user = await User.findById(userId);
  // send response (200) with the user info
  res.status(200).json({ data: user });
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

const postNewUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      email,
      password,
      telephone,
      role,
      picture,
      address,
      trainerType,
      trainerDescription,
    } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      age,
      email,
      password,
      telephone,
      role,
      picture,
      address,
      trainerType,
      trainerDescription,
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error saving user", details: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching users", details: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching user", details: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      age,
      email,
      password,
      telephone,
      role,
      picture,
      address,
      trainerType,
      trainerDescription,
    } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        age,
        email,
        password,
        telephone,
        role,
        picture,
        address,
        trainerType,
        trainerDescription,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send a response when the user is successfully updated
    res.json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating user", details: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(deletedUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting user", details: error.message });
  }
};

export {
  signup,
  verifyToken,
  login,
  getProtected,
  postNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
