import { Router } from "express";
import {
  postNewReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
} from "../controllers/reviewController.js";

const router = Router();

router.post("/", postNewReview);
router.get("/", getAllReviews);
router.put("/:id", updateReviewById);
router.delete("/:id", deleteReviewById);

export default router;
