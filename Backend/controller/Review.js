import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const { name, rating, comment } = req.body;
  if (!name || !rating || !comment) {
    res.status(400).json({ message: "Please fill all fields" });
  }
  let review;
  try {
    review = new Review({
      name,
      rating,
      comment,
    });
    await review.save();
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  if (!review) {
    res.status(400).json({ message: "Invalid user data" });
  }
  res.status(201).json({ message: "Review added", review });
};

export const getReviews = async (req, res) => {
  let reviews;
  try {
    reviews = await Review.find({});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  if (!reviews) {
    res.status(400).json({ message: "No reviews found" });
  }
  res.status(200).json({ message: "Reviews found", reviews });
};
