import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById, getreview, getData } from "../Data/Data";
import { Sliders, ChevronDown } from "lucide-react";
import Review from "../Reviews/Review";
import Card from "../Card";
const ItemDetails = () => {
  const { id } = useParams();
  const [items, SetItems] = useState([]);
  const [posts, setPosts] = useState([]);
  const [reviews, SetReviews] = useState([]);
  const [count, SetCount] = useState(0);
  const count_handler = () => {
    SetCount(count + 1);
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
    if (count <= 0) {
      return;
    }
    SetCount(count - 1);
  };

  console.log(id);

  useEffect(() => {
    getDataById(id)
      .then((data) => {
        SetItems(data.items);
        getreview()
          .then((data) => SetReviews(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    getData()
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts.items);
  console.log(items);
  console.log(reviews);
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
        <div className="review-heading flex max-w-[1251px] gap-[60%] ml-[9.5%] mt-[20px]">
          <div className="flex gap-[12px]">
            <p className="w-[125px] h-[32px] font-Satoshi font-bold text-[23px] leading-[33.4px] text-[#000000]">
              All Reviews
            </p>
            <p className="count-reviews mt-[5px] text-[#00000099] font-normal">
              ({reviews.length})
            </p>
          </div>

          <div className="flex gap-[10px] max-w-[345px] max-h-[48px]">
            <div className=" slider-con w-[48px] h-[48px] rounded-[62px] flex justify-between bg-[#F0F0F0]">
              <Sliders className="h-[24px] w-[24px]" />
            </div>
            <div className="lat-d w-[120px] h-[48px] rounded-[62px] flex justify-between bg-[#F0F0F0]">
              <p className="lat-text w-[43px] h-[22px] text-[#000000]">
                Latest
              </p>
              <ChevronDown className="w-[16px] h-[13px]" />
            </div>
            <button className="Review-btn bg-[#000000] text-[#FFFFFF]">
              Write a Review
            </button>
          </div>
        </div>
        <div className="review-post  flex flex-wrap justify-center items-center mt-[50px] gap-[24px]">
          {reviews.length > 0 ? (
            reviews?.map((review, id) => {
              return (
                <Review
                  key={id}
                  name={review.name}
                  comment={review.comment}
                  rating={review.rating}
                  date={review.posted_on}
                />
              );
            })
          ) : (
            <div className="flex justify-center items-center text-[20px] text-[#000000] font-normal">
              No Reviews
            </div>
          )}
        </div>
        <div className="more-reviews flex justify-center items-center">
          <button className="w-[230px] h-[52px] py-[16px] px-[40px] rounded-[62px] border flex gap-[12px] mt-[30px]">
            <p className="w-[140px] h-[22px] font-[Satoshi] font-medium text-[16px] leading-[21.6px] text-[#000000] ">
              Load More Reviews
            </p>
          </button>
        </div>
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
