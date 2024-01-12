import React, { useEffect, useState } from "react";

import { getreview } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Review from "../Reviews/Review";
const ReviewGallery = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getreview()
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(reviews);
  return (
    <>
      <Swiper
        style={{
          marginTop: "50px",
          width: "70%",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Review
              key={index}
              name={review.name}
              comment={review.comment}
              rating={review.rating}
              date={review.posted_on}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default ReviewGallery;
