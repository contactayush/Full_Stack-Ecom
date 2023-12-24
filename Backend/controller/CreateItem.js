import Items from "../models/Items.js";

export const createItem = async (req, res) => {
  const {
    image_url,
    title,
    rating,
    price,
    discount,
    description,
    category,
    itemtype,
  } = req.body;
  let item;
  try {
    item = new Items({
      image_url,
      title,
      rating,
      price,
      discount,
      description,
      category,
      itemtype,
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
  const { product_type } = req.query;

  let items;
  try {
    if (product_type) {
      items = await Items.find({ category: category, itemtype: product_type });
    } else {
      items = await Items.find({ category: category });
    }

    console.log(items)
  } catch (err) {
    console.log(err);
  }
  if (!items) {
    res.status(500).json({ message: "Request Failed" });
  }
  console.log("Items Fetched");
  res.status(200).json({ items });
};

