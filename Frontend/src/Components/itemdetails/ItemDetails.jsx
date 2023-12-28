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
      <div className="product_detail_con">
        <div className="product_detail_images">
          <div className="small_images"></div>
          <div className="big_image w-[444px] h-[598px]">
            <img
              src={items.image_url}
              className="w-[444px] h-[530px] rounded-[20px] mt-[25%] ml-[80%]"
            />
          </div>
        </div>
        <div className="product_detail_content"></div>
      </div>
    </div>
  );
};

export default ItemDetails;
