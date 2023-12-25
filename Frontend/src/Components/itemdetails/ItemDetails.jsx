import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../Data/Data";

const ItemDetails = () => {
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getDataById(id);
  });
  return <div>itemdetails</div>;
};

export default ItemDetails;
