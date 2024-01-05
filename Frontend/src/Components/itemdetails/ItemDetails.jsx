import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../Data/Data";

const ItemDetails = () => {
  const { id } = useParams();
  const [items, SetItems] = useState([]);
  const [imagechange, SetImageChange] = useState(false);
  const [count, SetCount] = useState(0);
  const count_handler = () => {
    SetCount(count + 1);
  };
  const count_handler_minus = () => {
    if (count <= 0) {
      return;
    }
    SetCount(count - 1);
  };
  const image_handler = () => {
    SetImageChange((prev) => !prev);
  };
  console.log(imagechange);
  console.log(id);

  useEffect(() => {
    getDataById(id)
      .then((data) => {
        SetItems(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              src={items.image_url}
              className={`sm_img hover:cursor-pointer ${
                imagechange ? "active-sm-img" : "deactive-sm-img"
              }`}
              onClick={image_handler}
            />
            <img src={items.image_url} className="sm_img" />
            <img src={items.image_url} className="sm_img" />
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
              <div className="counter-count">{count}</div>
              <button
                className="plus  w-[24px] h-[70px] text-[35px]"
                onClick={count_handler}
              >
                <p>+</p>
              </button>
            </div>
            <div className="cart-button flex w-[400px] h-[52px] py-[16px] px-[54px] justify-center items-center gap-[12px] rounded-[62px] bg-[#000000] hover:cursor-pointer">
              <button className="text-[#FFFFFF]">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[80px]">
        <div className="line-content flex max-w-[1251px] ml-[292px] gap-[354px]">
          <div className="t-1">Product Details</div>
          <div className="t-1">Rating & Reviews</div>
          <div className="t-1">FAQs</div>
        </div>
        <div className="border bg-[#0000001a] opacity-50 w-[1251px] h-[1px] ml-[140px] "></div>
      </div>
    </div>
  );
};

export default ItemDetails;
