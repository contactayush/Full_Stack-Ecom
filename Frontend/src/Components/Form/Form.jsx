import React, { useState } from "react";
import { postData } from "../Data/Data";
const Form = () => {
  const [formdata, setformdata] = useState({
    image_url: "",
    title: "",
    description: "",
    price: "",
    category: "",
    discount: "",
    rating: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formdata)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(formdata);
  };
  return (
    <div className="form-container flex flex-col w-full h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-3 ml-[11px]">
        <input
          className="p-3 border"
          type="text"
          placeholder="Enter image URL"
          name="image_url"
          value={formdata.image_url}
          onChange={handleChange}
        />
        <input
          className="p-3 border"
          type="text"
          placeholder="Enter Title"
          name="title"
          value={formdata.title}
          onChange={handleChange}
        />
        <input
          className="p-3 border"
          type="text"
          placeholder="Enter Description"
          name="description"
          value={formdata.description}
          onChange={handleChange}
        />
        <input
          className="p-3 border"
          type="number"
          placeholder="Enter Price"
          name="price"
          value={formdata.price}
          onChange={handleChange}
        />
        <input
          className="p-3 border"
          type="text"
          placeholder="Enter Category"
          name="category"
          value={formdata.category}
          onChange={handleChange}
        />
        <input
          className="p-3 border"
          type="number"
          placeholder="enter discount"
          name="discount"
          value={formdata.discount}
          onChange={handleChange}
        />
        <input
          className="p-3 border"
          type="number"
          placeholder="enter rating"
          name="rating"
          value={formdata.rating}
          onChange={handleChange}
        />
      </div>

      <button
        className="text-[#ffffff] bg-[#000000] w-[200px] rounded-md mt-3 px-2 py-3"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
