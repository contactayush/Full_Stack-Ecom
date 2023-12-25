import { React, useEffect } from "react";
import { useState } from "react";
import { getData } from "./Data/Data.js";
import Full_Star from "../assets/Full_Star.png";
import Half_Star from "../assets/Half_Star.png";
import { Link, useNavigate } from "react-router-dom";
const Card = ({ image, title, rating, price, discount, id }) => {
  const [items, setItem] = useState([]);
  console.log(id);
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
      className="card-body hover:cursor-pointer"
      onClick={() => navigationhandler(`/itemdetails/${id}`)}
    >
      <div className="card-image">
        <img src={image} className="card-img" />
      </div>
      <div className="main-cloth-clothname">{title}</div>
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
