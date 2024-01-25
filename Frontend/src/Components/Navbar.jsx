import React, { useState } from "react";
import down_arrow from "../assets/chevron-down.png";
import search from "../assets/search.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Radio, Space } from "antd";

const elements = ["On Sale", "New Arrivals", "Brands"];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="hamburger lg:hidden" onClick={showDrawer}>
        <Menu size={24} />
      </div>
      <Drawer
        title="Mobile Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={open}
      >
        {elements.map((element, id) => {
          return <p key={id}>{element}</p>;
        })}
      </Drawer>
    </>
  );
};
const Navbar = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/cart");
  };
  return (
    <header className="container  sm:w-[1240px] w-[390px] sm:ml-[100px] ml-[15px]">
      <div className="hamburger lg:hidden ">
        <MobileNavbar />
      </div>
      <div className="logo">
        <span className="logo-nav">SHOP.CO</span>
      </div>
      <div className="elements ">
        <ul className="element mt-[49px] lg:flex hidden">
          <li className="ele">
            <div className="shop">
              <span>Shop</span>
              <img src={down_arrow} alt="down_arrow" className="down_arrow" />
            </div>
          </li>
          {elements.map((element, id) => {
            return <li key={id}>{element}</li>;
          })}
        </ul>
      </div>
      <div className="search ">
        <img
          src={search}
          alt="search-icon"
          className="search-icon lg:flex hidden"
        />
      </div>

      <input
        type="text"
        placeholder="Search for Products..."
        className="input-box lg:flex hidden sm:flexhidden"
      />
      <div className="cart-user lg:w-[106px] w-[96px] lg:h-[32px] h-[24px]">
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
        <div className="search lg:hidden block">
          <img src={search} alt="search-icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
