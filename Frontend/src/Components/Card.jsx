import { React, useEffect } from "react";
import { useState } from "react";
import { getData } from "./Data/Data.js";
import Full_Star from "../assets/Full_Star.png";
import Half_Star from "../assets/Half_Star.png";
import { useNavigate } from "react-router-dom";
const Card = ({ image, title, rating, price, discount, id }) => {
  const [items, setItem] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getData()
      .then((data) => setItem(data.items))
      .catch((err) => console.log(err));
  }, []);

  const navigationhandler = (id) => {
    navigate(id);
  };
  return (
    <div
      className="card-body hover:cursor-pointer w-[144px] lg:w-[295px]"
      onClick={() => navigationhandler(`/itemdetails/${id}`)}
    >
      <div className="card-image ">
        <img
          src={image}
          className="card-img lg:w-[295px] lg:h-[298px] w-[198px] h-[200.01px] lg:rounded-[20px] rounded-[13.42px]"
        />
      </div>
      <div className="main-cloth-clothname text-center lg:text-left font-bold text-[16px] lg:text-[20px] mt-[20px] mb-[20px]">
        {title}
      </div>
      <div className="main-cloth-rating">
        <img src={Full_Star} alt="Full" className="star" />
        <img src={Full_Star} alt="Full" className="star" />
        <img src={Full_Star} alt="Full" className="star" />
        <img src={Full_Star} alt="Full" className="star" />
        <img src={Half_Star} alt="Half" className="star" />
        <div className="rating-digits">{rating}/5</div>
      </div>
      <div className="main-price">
        {!!discount && <div className="discount-price">${discount}</div>}
        {!discount && <div className="discount-price">${price}</div>}
        {!!price && !!discount && (
          <div className="original-price">${price}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
