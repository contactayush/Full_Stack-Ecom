import React from "react";
import HomeInfo from "./HomeInfo";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import Categories from "./Categories";
import ReviewGallery from "./ReviewGallery/ReviewGallery";

const HomePage = () => {
  return (
    <div>
      <HomeInfo />
      <NewArrivals />
      <TopSelling />
      <Categories />
    </div>
  );
};

export default HomePage;
