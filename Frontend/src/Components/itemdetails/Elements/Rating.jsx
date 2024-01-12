import React, { useEffect, useState } from "react";
import { Sliders, ChevronDown } from "lucide-react";
import Review from "../../Reviews/Review";
import { getreview } from "../../Data/Data";
const Rating = () => {
  const [reviews, SetReviews] = useState([]);
  useEffect(() => {
    getreview()
      .then((data) => SetReviews(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col ">
      <div className="review-heading flex max-w-[1251px] gap-[60%] ml-[9.5%] mt-[20px]">
        <div className="flex gap-[12px]">
          <p className="w-[125px] h-[32px] font-Satoshi font-bold text-[23px] leading-[33.4px] text-[#000000]">
            All Reviews
          </p>
          <p className="count-reviews mt-[5px] text-[#00000099] font-normal">
            ({reviews.length})
          </p>
        </div>

        <div className="flex gap-[10px] max-w-[345px] max-h-[48px]">
          <div className=" slider-con w-[48px] h-[48px] rounded-[62px] flex justify-between bg-[#F0F0F0]">
            <Sliders className="h-[24px] w-[24px]" />
          </div>
          <div className="lat-d w-[120px] h-[48px] rounded-[62px] flex justify-between bg-[#F0F0F0]">
            <p className="lat-text w-[43px] h-[22px] text-[#000000]">Latest</p>
            <ChevronDown className="w-[16px] h-[13px]" />
          </div>
          <button className="Review-btn bg-[#000000] text-[#FFFFFF]">
            Write a Review
          </button>
        </div>
      </div>
      <div className="review-post  flex flex-wrap justify-center items-center mt-[50px] gap-[24px]">
        {reviews.length > 0 ? (
          reviews?.map((review, id) => {
            return (
              <Review
                key={id}
                name={review.name}
                comment={review.comment}
                rating={review.rating}
                date={review.posted_on}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center text-[20px] text-[#000000] font-normal">
            No Reviews
          </div>
        )}
      </div>
      <div className="more-reviews flex justify-center items-center">
        <button className="w-[230px] h-[52px] py-[16px] px-[40px] rounded-[62px] border flex gap-[12px] mt-[30px]">
          <p className="w-[140px] h-[22px] font-[Satoshi] font-medium text-[16px] leading-[21.6px] text-[#000000] ">
            Load More Reviews
          </p>
        </button>
      </div>
    </div>
  );
};

export default Rating;
