import { Router } from "express";
import {
  postBooking,
  getAllBookings,
  cancelBookingById,
} from "../controllers/bookingController.js";

const router = Router();

router.post("/", postBooking);
router.get("/", getAllBookings);
router.delete("/:id", cancelBookingById);

export default router;
