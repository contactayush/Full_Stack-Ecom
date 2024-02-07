import React, { version } from "react";
import back_img from "../assets/back-img.png";
import back_img_2 from "../assets/back_img_2.png";
import Vector from "../assets/Vector.png";
import small_star from "../assets/small_star.png";
import Versace from "../assets/Versace.png";
import Gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import zara from "../assets/zara.png";
import calvin from "../assets/calvin.png";
const HomeInfo = () => {
  return (
    <>
      <div className="con  lg:flex flex-wrap flex">
        <img
          src={back_img}
          alt="back"
          className="back_img lg:absolute relative lg:w-[1519px] w-[486px] lg:block hidden"
        />
        <div className="con-content lg:w-[780px] w-full bg-[#F2F0F1]">
          <div className="lg:mt-[53px] lg:ml-[100px] mt-[53px] ml-[30px] w-[315px] h-[93px] lg:w-[620px] lg:h-[173px]">
            <p className="p1 text-[36px] lg:text-[64px] leading-[34px] lg:leading-[64px] text-[#000000]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
          </div>
          <div className="lg:mt-[45px] lg:ml-[100px] mt-[40px] ml-[30px] w-[345px] h-[70px] lg:w-[486px] lg:h-[60px] text-[#00000099] mb-[2rem] lg:mb-0">
            <p className="p2 leading-[20px] text-[14px] lg:text-[16px] lg:leading-[21px] w-[80%] lg:w-[100%]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div className="shop_now_btn">
            <button className="shop_btn lg:w-[210px] w-[300px] mt-[5px] lg:ml-[92px] ml-[26px]">
              SHOP NOW
            </button>
          </div>
          <div className="content flex-wrap lg:w-[596px] w-[390px] lg:h-[250px] h-[220px] lg:mt-[60px] mt-[60px] ml-[35px] lg:ml-[100px]">
            <div className=" lg:w-[141px] lg:h-[74px] w-[108px] h-[48px] lg:ml-0 ml-[15px]">
              <p className="count lg:w-[107px] lg:h-[54px] w-[64px] h-[32px] lg:text-[40px] text-[24px] lg:leading-[54px] leading-[32.4px]">
                200+
              </p>
              <p className="item_text lg:leading-[22px] leading-[20px] lg:w-[150px]  w-[108px] h-[22px] lg:text-[16px] text-[12px]">
                International Brands
              </p>
            </div>
            <div className="line lg:h-[100px] h-[70px]"></div>
            <div className="lg:w-[141px] lg:h-[74px] w-[108px] h-[48px] ">
              <p className="count  lg:w-[107px] lg:h-[54px] w-[64px] h-[32px] lg:text-[40px] text-[24px] lg:leading-[54px] leading-[32.4px]">
                2000+
              </p>
              <p className="item_text  lg:leading-[22px] leading-[20px] lg:w-[150px]  w-[120px] h-[22px] lg:text-[16px] text-[12px]">
                High-Quality Products
              </p>
            </div>
            <div className="line lg:h-[100px] lg:block hidden"></div>
            <div className="lg:w-[141px] lg:h-[74px] w-[106px] h-[150px] lg:ml-0 ml-[96px]">
              <p className="count  lg:w-[107px] lg:h-[54px] w-[64px] h-[32px] lg:text-[40px] text-[24px] lg:leading-[54px] leading-[32.4px]">
                30000+
              </p>
              <p className="item_text  lg:leading-[22px] leading-[20px] lg:w-[150px]  w-[106px] h-[22px] lg:text-[16px] text-[12px]">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <img src={Vector} alt="vector" className="vector hidden lg:block" />
        <img
          src={small_star}
          alt="small_star"
          className="small_star hidden lg:block"
        />
        <img
          src={back_img_2}
          alt="back"
          className="back_img  w-full block lg:hidden"
        />
      </div>
      <img
        src={Vector}
        alt="vector"
        className=" lg:hidden block z-[1] lg:left-[74%] left-[66%] lg:top-[96%] top-[96%] absolute"
      />
      <img
        src={small_star}
        alt="small_star"
        className="w-[56px] h-[56px] top-[125%] left-[4%] absolute lg:hidden block z-[1]"
      />
      <div className="flex-wrap flex lg:flex bg-[#000000] lg:h-[122px] h-[146px]">
        <img
          src={Versace}
          alt="versace"
          className=" mt-[30px] ml-[20px] lg:w-[159.48px] lg:h-[35.16px] w-[116.74px] h-[23.25px] lg:mt-[45px] lg:ml-[120px]"
        />
        <img
          src={Gucci}
          alt="versace"
          className="  mt-[30px] ml-[20px] lg:mt-[45px] lg:ml-[120px] lg:w-[159.48px] lg:h-[35.16px] w-[63.81px] h-[26.65px]"
        />
        <img
          src={prada}
          alt="versace"
          className="  mt-[30px] ml-[20px] lg:mt-[45px] lg:ml-[120px] lg:w-[159.48px] lg:h-[35.16px] w-[109.39px] h-[25.24px]"
        />
        <img
          src={zara}
          alt="versace"
          className="ml-[20px]    lg:mt-[45px] lg:ml-[120px] lg:w-[159.48px] lg:h-[35.16px] w-[127px] h-[21px]"
        />
        <img
          src={calvin}
          alt="versace"
          className=" ml-[30px] lg:mt-[45px] lg:ml-[120px] lg:w-[159.48px] lg:h-[35.16px] w-[134.84px] h-[21.75px]"
        />
      </div>
    </>
  );
};

export default HomeInfo;
