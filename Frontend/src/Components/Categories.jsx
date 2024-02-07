import React from "react";
import image_11 from "../assets/image_11.png";
import image_12 from "../assets/image_12.png";
import image_13 from "../assets/image_13.png";
import image_14 from "../assets/image_14.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="lg:ml-[146px] ml-[15px] categories-con w-[330px] lg:w-[1228px] lg:h-[750px] h-[975px]">
      <div className="categories-heading lg:ml-[276px] ml-[40px] w-[246px] h-[72px] lg:w-[687px] lg:h-[58px]">
        <p className="lg:text-[48px] text-[32px] leading-[36px] lg:leading-[58px]">
          BROWSE BY DRESS STYLE
        </p>
      </div>
      <div className="categories-sub-con">
        <Link to="/Categories/Casual">
          <div className=" categories-box-1 lg:ml-[64px] ml-[15px] categories-box lg:w-[407px] lg:h-[289px] w-[300px] h-[190px]">
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
          <div className=" categories-box-2 categories-box  lg:w-[613px] lg:h-[292px] w-[295px] h-[190px]">
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
          <div className=" lg:ml-[64px] ml-[15px] categories-box-3 categories-box  lg:w-[684px] lg:h-[289px] w-[300px] h-[190px]">
            <div className="categories-title">
              <p>Party</p>
            </div>
            <img
              src={image_12}
              alt="categories-images"
              className="categories-images-2 categories-images "
            />
          </div>
        </Link>
        <Link to="/Categories/Gym">
          <div className=" categories-box-4 categories-box  lg:ml-0 ml-[15px] lg:w-[407px] lg:h-[289px] w-[300px] h-[180px]">
            <div className="categories-title">
              <p>Gym</p>
            </div>
            <img
              src={image_14}
              alt="categories-images"
              className="categories-images   lg:w-[350px] lg:h-[289px] w-[310px] h-[180px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
