import express from "express";
import { createReview } from "../controller/Review.js";

const reviewrouter = express.Router();

reviewrouter.post("/createreview", createReview);

export default reviewrouter;
