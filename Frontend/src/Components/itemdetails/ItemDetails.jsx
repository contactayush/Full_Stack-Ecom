import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById, getData } from "../Data/Data";

import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../Redux/Slice/CartSlice";
import { useNavigate } from "react-router-dom";
import { increment, decrement } from "../Redux/Slice/CounterSlice";
import Rating from "./Elements/Rating";
import Product_Info from "./Elements/Product_Info";
import Faqs from "./Elements/Faqs";
const ItemDetails = () => {
  const Cart = useSelector((state) => state.Cart);
  const Count = useSelector((state) => state.Counter);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [items, SetItems] = useState({});
  const [posts, setPosts] = useState([]);
  const [ratingComp, setRatingComp] = useState([
    {
      name: "Product Details",
      isActive: false,
    },
    {
      name: "Rating & Reviews",
      isActive: true,
    },
    {
      name: "FAQs",
      isActive: false,
    },
  ]);
  const clickHandler = (index, setfun, fun) => {
    const updatedRatingComp = fun.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setfun(updatedRatingComp);
  };

  const navigate = useNavigate();
  const count_handler = () => {
    dispatch(increment());
  };
  const ref = useRef();

  const handleClick = () => {
    if (ref.current.style.border) {
      ref.current.style.border = "";
    } else {
      ref.current.style.border = "1px solid #000000";
    }
  };
  const count_handler_minus = () => {
    return dispatch(decrement());
  };
  const addToCartHandler = () => {
    dispatch(addCart(items));

    navigate("/cart");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getDataById(id)
      .then((data) => {
        SetItems(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getData()
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts.items);

  console.log(items);
  let discount = items.discount;
  let price = items.price;
  const color = ["#000000", "#EE2222", "#35A6D0"];
  const size = ["Small", "Medium", "Large", "X-Large"];
  return (
    <div className="page_details_con">
      <div className="routes_text"></div>
      <div className="product_detail_con justify-center flex  mt-[7%] gap-[45px]">
        <div className="product_detail_images flex ">
          <div className="small_images flex flex-col gap-[18px]">
            <img
              ref={ref}
              src={items.image_url}
              className="sm_img hover:cursor-pointer"
              onClick={handleClick}
            />
            <img
              src={items.image_url}
              className="sm_img hover:cursor-pointer"
              onClick={handleClick}
              ref={ref}
            />
            <img
              src={items.image_url}
              className="sm_img hover:cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <div className="big_image  ml-[20px]">
            <img
              src={items.image_url}
              className="w-[444px] h-[530px] rounded-[20px] object-cover"
            />
          </div>
        </div>
        <div className="product_detail_content flex flex-col gap-[16px]">
          <div className="w-[600px] h-[48px]">
            <p className="item-title w-[600px] h-[48px]">{items.title}</p>
          </div>

          <div className="rating">
            <p className="w-[38px] h-[22px] font-Satoshi font-normal text-base leading-[21.6px]">
              {items.rating}/5
            </p>
          </div>
          <div className="price flex">
            {!!discount && <div className="discount-price">${discount}</div>}
            {!discount && <div className="discount-price">${price}</div>}
            {!!price && !!discount && (
              <div className="original-price">${price}</div>
            )}
          </div>
          <div className=" w-[493px] h-[44px] ">
            <p className="font-Satoshi font-normal text-base leading-[22px] text-left text-[#00000099]">
              {items.description}
            </p>
          </div>
          <div className="border bg-[#0000001a] opacity-50 w-[590px] h-[1px]  mt-[5px]"></div>
          <p className="w-[93px] h-[11px] font-Satoshi font-normal text-base leading-[21.6px] text">
            Select Colors
          </p>
          <div className="item-colors flex gap-1 mt-[5px]">
            {color.map((item, id) => (
              <div
                key={id}
                className="color border-2 text-[#00000033]"
                style={{ backgroundColor: item }}
              ></div>
            ))}
          </div>
          <div className="border bg-[#0000001a] opacity-50 w-[590px] h-[1px]  mt-[5px]"></div>
          <p className="w-[93px] h-[11px] font-Satoshi font-normal text-base leading-[21.6px] text">
            Choose Sizes
          </p>
          <div className="w-[420px] h-[46px] flex gap-[12px] mt-[5px]">
            {size.map((item, id) => (
              <button
                key={id}
                className="size_btn  text-[#00000099] flex text-center"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="border bg-[#0000001a] opacity-50 w-[590px] h-[1px]  mt-[5px]"></div>
          <div className="cart-count flex gap-[10px] mt-[13px]">
            <div className="counter flex w-[170px] h-[52px] py-4 px-5 justify-between items-center rounded-[62px] bg-[#F0F0F0]">
              <button
                className="minus w-[24px] h-[70px] text-[35px]"
                onClick={count_handler_minus}
              >
                <p>-</p>
              </button>
              <div className="counter-count">{Count < 0 ? 0 : Count}</div>
              <button
                className="plus  w-[24px] h-[70px] text-[35px]"
                onClick={count_handler}
              >
                <p>+</p>
              </button>
            </div>
            <div className="cart-button flex w-[400px] h-[52px] py-[16px] px-[54px] justify-center items-center gap-[12px] rounded-[62px] bg-[#000000] hover:cursor-pointer">
              {Cart == undefined ? (
                <button className="text-[#FFFFFF]">Add to Cart</button>
              ) : Cart.some((e) => {
                  return e._id == id;
                }) ? (
                <button
                  className="text-[#FFFFFF]"
                  onClick={() => dispatch(removeCart(id))}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="text-[#FFFFFF]" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Rating-raviews">
        <div className="Rating-raviews-btn ">
          {ratingComp.map((rate, index) => (
            <>
              <button
                onClick={() => clickHandler(index, setRatingComp, ratingComp)}
                key={index}
                className={`${rate.isActive ? "active" : ""}`}
              >
                {rate.name}
              </button>
            </>
          ))}
        </div>

        <div>{ratingComp[0].isActive == true ? <Product_Info /> : ""}</div>
        <div>{ratingComp[1].isActive == true ? <Rating /> : ""}</div>
        <div>{ratingComp[2].isActive == true ? <Faqs /> : ""}</div>
      </div>
      <div className="items-container flex flex-col justify-center items-center">
        <span className="title mt-[30px]">YOU MIGHT ALSO LIKE</span>
        <div className="posts-container flex gap-[30px] mt-[30px]">
          {posts.items?.slice(0, 4).map((item, id) => {
            return (
              <Card
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image_url}
                discount={item.discount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
