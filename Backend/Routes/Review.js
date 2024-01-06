import express from "express";
import { createReview, getReviews } from "../controller/Review.js";

const reviewrouter = express.Router();

reviewrouter.post("/createreview", createReview);
reviewrouter.get("/getreviews", getReviews);
export default reviewrouter;
