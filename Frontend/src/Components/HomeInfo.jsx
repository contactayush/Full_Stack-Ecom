import React, { version } from "react";
import back_img from "../assets/back-img.png";
import Vector from "../assets/Vector.png";
import small_star from "../assets/small_star.png";
import Versace from "../assets/Versace.png";
import Gucci from "../assets/Gucci.png";
import prada from "../assets/prada.png";
import zara from "../assets/zara.png";
import calvin from "../assets/calvin.png";
const HomeInfo = () => {
  return (
    <>
      <div className="con">
        <img src={back_img} alt="back" className="back_img" />
        <div className="con-content">
          <div className="para">
            <p className="p1">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
          </div>
          <div className="para2">
            <p className="p2">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div className="shop_now_btn">
            <button className="shop_btn">SHOP NOW</button>
          </div>
          <div className="content">
            <div className="item">
              <p className="count">200+</p>
              <p className="item_text">International Brands</p>
            </div>
            <div className="line"></div>
            <div className="item">
              <p className="count">2000+</p>
              <p className="item_text">High-Quality Products</p>
            </div>
            <div className="line"></div>
            <div className="item">
              <p className="count">30000+</p>
              <p className="item_text">Happy Customers</p>
            </div>
          </div>
        </div>

        <img src={Vector} alt="vector" className="vector" />
        <img src={small_star} alt="small_star" className="small_star" />
      </div>
      <div className="partners">
        <img src={Versace} alt="versace" className="patners_logo" />
        <img src={Gucci} alt="versace" className="patners_logo" />
        <img src={prada} alt="versace" className="patners_logo" />
        <img src={zara} alt="versace" className="patners_logo" />
        <img src={calvin} alt="versace" className="patners_logo" />
      </div>
    </>
  );
};

export default HomeInfo;
