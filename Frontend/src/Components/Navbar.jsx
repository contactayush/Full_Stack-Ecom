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
      <div
        className="hamburger lg:hidden hover:cursor-pointer mt-[10px]"
        onClick={showDrawer}
      >
        <Menu size={24} />
      </div>
      <Drawer
        title="Shop Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={open}
      >
        {elements.map((element, id) => {
          return (
            <p key={id} className="cursor-pointer">
              {element}
            </p>
          );
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
    <header className="container  lg:w-[1240px] w-[390px] lg:ml-[100px] ml-[15px] gap-[40px]">
      <div className="hamburger lg:hidden ">
        <MobileNavbar />
      </div>
      <div className="logo">
        <span className="logo-nav">SHOP.CO</span>
      </div>
      <div className="elements ">
        <ul className="element mt-[49px] lg:flex hidden">
          <li className="ele">
            <div className="shop lg:flex hidden">
              <span>Shop</span>
              <img src={down_arrow} alt="down_arrow" className="down_arrow" />
            </div>
          </li>
          {elements.map((element, id) => {
            return (
              <li key={id} className="hover:cursor-pointer">
                {element}
              </li>
            );
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
        className="input-box lg:flex hidden "
      />
      <div className="cart-user lg:w-[106px] w-[96px] lg:h-[32px] h-[24px] gap-[20px] mt-[10px]">
        <div className="w-[24px] h-[24px]">
          <img
            src={cart}
            alt="cart"
            className="w-[20.27px] h-[20.27px] hover:cursor-pointer"
            onClick={navigateHandler}
          />
        </div>
        <div className="w-[24px] h-[24px]">
          <img src={user} alt="user" className="w-[20.27px] h-[20.27px]" />
        </div>
        <div className="search lg:hidden ">
          <img src={search} alt="search-icon " />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
