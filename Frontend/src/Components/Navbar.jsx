import React from "react";
import down_arrow from "../assets/chevron-down.png";
import search from "../assets/search.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/cart");
  };
  return (
    <header className="container">
      <div className="logo">
        <span className="logo-nav">SHOP.CO</span>
      </div>
      <div className="elements">
        <ul className="element">
          <li className="ele">
            <div className="shop">
              <span>Shop</span>
              <img src={down_arrow} alt="down_arrow" className="down_arrow" />
            </div>
          </li>
          <li className="ele">On Sale</li>
          <li className="ele">New Arrivals</li>
          <li className="ele">Brands</li>
        </ul>
      </div>
      <div className="search">
        <img src={search} alt="search-icon" className="search-icon" />
      </div>

      <input
        type="text"
        placeholder="Search for Products..."
        className="input-box"
      />
      <div className="cart-user">
        <div className="cart">
          <img
            src={cart}
            alt="cart"
            className="cart-logo hover:cursor-pointer"
            onClick={navigateHandler}
          />
        </div>
        <div className="user">
          <img src={user} alt="user" className="user-logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
