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
      <div className="con lg:flex flex-col flex">
        <img
          src={back_img}
          alt="back"
          className="back_img lg:w-[1519px] w-[390px] hidden lg:block"
        />
        <div className="con-content sm:w-[390px] bg-[#F2F0F1]">
          <div className="lg:mt-[53px] lg:ml-[100px] mt-[53px] ml-[30px] w-[315px] h-[93px] lg:w-[620px] lg:h-[173px]">
            <p className="p1 text-[36px] lg:text-[64px] leading-[34px] lg:leading-[64px] text-[#000000]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
          </div>
          <div className="lg:mt-[45px] lg:ml-[100px] mt-[40px] ml-[30px] w-[358px] h-[70px] lg:w-[486px] lg:h-[60px] text-[#00000099]">
            <p className="p2 leading-[20px] text-[14px] lg:text-[16px] lg:leading-[21px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div className="shop_now_btn">
            <button className="shop_btn lg:w-[210px] w-[358px] mt-[5px] lg:ml-[92px] ml-[26px]">
              SHOP NOW
            </button>
          </div>
          <div className="content flex-wrap lg:w-[596px] w-[472px] lg:h-[74px] h-[120px]">
            <div className="item">
              <p className="count">200+</p>
              <p className="item_text">International Brands</p>
            </div>
            <div className="line"></div>
            <div className="item">
              <p className="count">2000+</p>
              <p className="item_text">High-Quality Products</p>
            </div>
            <div className="line lg:block hidden"></div>
            <div className="item lg:ml-0 ml-[96px]">
              <p className="count">30000+</p>
              <p className="item_text">Happy Customers</p>
            </div>
          </div>
        </div>

        <img src={Vector} alt="vector" className="vector hidden lg:block" />
        <img
          src={small_star}
          alt="small_star"
          className="small_star hidden lg:block"
        />
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
