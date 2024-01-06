import React from "react";

const Review = ({ name, comment, rating, date }) => {
  return (
    <div className="review-con">
      <div>{rating}</div>
      <div>{name}</div>
      <div>{comment}</div>
      <div>{date}</div>
    </div>
  );
};

export default Review;
