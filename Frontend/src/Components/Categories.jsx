import React from "react";
import image_11 from "../assets/image_11.png";
import image_12 from "../assets/image_12.png";
import image_13 from "../assets/image_13.png";
import image_14 from "../assets/image_14.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-con">
      <div className="categories-heading">
        <p>BROWSE BY DRESS STYLE</p>
      </div>
      <div className="categories-sub-con">
        <Link to="/Categories/Casual">
          <div className="categories-box-1 categories-box">
            <div className="categories-title">
              <p>Casual</p>
            </div>
            <div className="con-image">
              <img
                src={image_11}
                alt="categories-images"
                className="categories-images"
              />
            </div>
          </div>
        </Link>
        <Link to="/Categories/Formal">
          <div className="categories-box-2 categories-box">
            <div className="categories-title">
              <p>Formal</p>
            </div>
            <img
              src={image_13}
              alt="categories-images"
              className="categories-images-1 categories-images"
            />
          </div>
        </Link>
        <Link to="/Categories/Party">
          <div className="categories-box-3 categories-box">
            <div className="categories-title">
              <p>Party</p>
            </div>
            <img
              src={image_12}
              alt="categories-images"
              className="categories-images-2 categories-images"
            />
          </div>
        </Link>
        <Link to="/Categories/Gym">
          <div className="categories-box-4 categories-box">
            <div className="categories-title">
              <p>Gym</p>
            </div>
            <img
              src={image_14}
              alt="categories-images"
              className="categories-images"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
