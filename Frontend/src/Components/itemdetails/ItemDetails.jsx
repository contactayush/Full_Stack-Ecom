import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../Data/Data";

const ItemDetails = () => {
  const { id } = useParams();
  const [items, SetItems] = useState([]);
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

  return (
    //updates
    //brief updates
    <div className="page_details_con">
      <div className="routes_text"></div>
      <div className="product_detail_con justify-center flex  mt-[7%] gap-[25px]">
        <div className="product_detail_images ">
          <div className="small_images"></div>
          <div className="big_image w-[444px] h-[598px]">
            <img
              src={items.image_url}
              //w-[300px] h-[345px] rounded-[20px] mt-[25%] ml-[90%]
            />
          </div>
        </div>
        <div className="product_detail_content flex flex-col gap-2">
          <div className="title">
            <p>{items.title}</p>
          </div>
          <div className="rating">
            <p>{items.rating}/5</p>
          </div>
          <div className="price">
            <p>${items.price}</p>
          </div>
          <div className="desp">
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
