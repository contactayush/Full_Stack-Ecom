import React, { useState } from "react";
import { postData, reviewdata } from "../Data/Data";

const ReviewForm = () => {
  const [review, setreview] = useState({
    name: "",
    rating: "",
    comment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setreview({ ...review, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    reviewdata(review)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="flex justify-center items-center text-2xl font-semibold mb-4">
        Write Your Review Here...
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            name
          </label>
          <input
            type="name"
            id="email"
            name="name"
            value={review.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your name here..."
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Rating
          </label>
          <input
            type="number"
            id="name"
            name="rating"
            value={review.rating}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Rating of the product"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            comment
          </label>
          <textarea
            id="message"
            name="comment"
            rows="4"
            value={review.comment}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center m-auto w-[369px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ReviewForm;
