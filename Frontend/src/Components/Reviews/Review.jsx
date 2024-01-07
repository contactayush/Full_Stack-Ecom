import React from "react";
import { MoreHorizontal } from "lucide-react";
import review from "../../assets/review.png";
const Review = ({ name, comment, rating, date }) => {
  return (
    <div className="review-con max-w-[610px] h-[241.58px] py-[28px] px-[32px]  rounded-[20px]   flex flex-col gap-[11px]">
      <div className="flex justify-between">
        <p> {rating} </p>
        <MoreHorizontal className="w-[24px] h-[24px] text-[#0000008f]" />
      </div>
      <div className="review-name w-[160px] h-[15px] flex gap-[10px]">
        <p>{name}</p>
        <img src={review} alt="review" className="h-[22px] w-[24px]" />
      </div>
      <div className="review-comment w-[522px] h-[66px]">{comment}</div>
      <div>{date}</div>
    </div>
  );
};

export default Review;
