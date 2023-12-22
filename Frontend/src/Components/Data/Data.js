import axios from "axios";
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
