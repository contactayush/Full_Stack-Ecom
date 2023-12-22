import Items from "../models/Items.js";

export const createItem = async (req, res) => {
  const { image_url, title, rating, price, discount } = req.body;
  let item;
  try {
    item = new Items({
      image_url,
      title,
      rating,
      price,
      discount,
    });
    await item.save();
  } catch (err) {
    console.log(err);
  }
  if (!item) {
    res.status(500).json({ message: "Request Failed" });
  }
  console.log("Item Created");
  res.status(201).json({ item });
};

export const getItems = async (req, res) => {
  let items;
  try {
    items = await Items.find({});
  } catch (err) {
    console.log(err);
  }
  if (!items) {
    res.status(500).json({ message: "Request Failed" });
  }
  console.log("Items Fetched");
  res.status(200).json({ items });
};

export const getItemsByCategory = async (req, res) => {
  const { category } = req.params;
  let items;
  try {
    items = await Items.find({ category: category });
  } catch (err) {
    console.log(err);
  }
  if (!items) {
    res.status(500).json({ message: "Request Failed" });
  }
  console.log("Items Fetched");
  res.status(200).json({ items });
};
