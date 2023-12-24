import axios from "axios";
export const postData = async (e) => {
  const res = await axios
    .post("/item/CreateItem", {
      image_url: e.image_url,
      title: e.title,
      rating: e.rating,
      price: e.price,
      discount: e.discount,
      description: e.description,
      category: e.category,
      itemtype: e.itemtype,
    })
    .catch((err) => {
      console.log(err);
    });
  if (res.status !== 200) {
    console.log("Unexpected Error Occurred");
  }
  const data = await res.data;
  return data;
};
export const getData = async () => {
  const res = await axios
    .get("/item/GetItems")
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    console.log("Unexpected Error Occurred");
  }
  const data = await res.data;
  return data;
};

export const getDataByCategoryAndType = async (...args) => {
  console.log(args);
  const url = `/item/GetItems/${args[0]}${
    args[1] ? `?product_type=${args[1]}` : ""
  }`;

  console.log(url);

  const res = await axios.get(url).catch((err) => console.log(err));
  if (res.status !== 200) {
    console.log("Unexpected Error Occurred");
  }
  const data = await res.data;
  console.log(data);
  return data;
};
