import { Router } from "express";
import {
  postNewReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
} from "../controllers/reviewController.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = Router();

router.post("/", isAuth, postNewReview);
router.get("/", getAllReviews);
router.put("/:id", updateReviewById);
router.delete("/:id", deleteReviewById);

export default router;
