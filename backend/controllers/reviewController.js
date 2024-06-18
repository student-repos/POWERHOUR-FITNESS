import Review from "../models/review.js";
import User from "../models/user.js";

const postNewReview = async (req, res) => {
  try {
    const { rating, message } = req.body;
    const { userId } = req.params;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newReview = new Review({
      rating,
      message,
      userId,
    });

    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while saving the review.",
      details: error.message,
    });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching the reviews.",
      details: error.message,
    });
  }
};

const updateReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseId, userId, comment, rating, activity } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { courseId, userId, comment, rating, activity },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while updating the review.",
      details: error.message,
    });
  }
};

const deleteReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json(deletedReview);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while deleting the review.",
      details: error.message,
    });
  }
};

export { postNewReview, getAllReviews, updateReviewById, deleteReviewById };
