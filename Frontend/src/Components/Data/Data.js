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

export const getDataByCategory = async (category) => {
  const res = await axios
    .get(`/item/GetItems/${category}`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    console.log("Unexpected Error Occurred");
  }
  const data = await res.data;
  console.log(data);

  return data;
};
