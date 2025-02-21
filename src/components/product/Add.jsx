import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Add = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "mens Clothing" },
    { id: 3, name: "womens Clothing" },
    { id: 4, name: "jewellery" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      id: Math.floor(Math.random() * Date.now()),
      ...product,
    };
    delete newProduct.count;
    delete newProduct.rate;

    try {
      const res = await axios.post(
        "https://fakestoreapi.com/products",
        newProduct
      );
      console.log(res.data);
   navigate("product") } catch (error) {
      console.error(error);
    }
  };
  const navigate=useNavigate()

  return (
    <div>
      <div className="flex justify-center items-center p-30 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-6 border border-gray-300 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300 w-120"
        >
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl mb-7">Add a new product</h1>
          </div>
          <label className="font-semibold mt-2">Product title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 rounded-lg"
            onChange={handleInputChange}
          />
          <label className="font-semibold mt-2">Product price</label>
          <input
            type="text"
            id="price"
            name="price"
            className="border border-gray-300 rounded-lg"
            onChange={handleInputChange}
          />
          <label className="font-semibold mt-2">Product category</label>
          <select
            id="category"
            name="category"
            className="border border-gray-300 rounded-lg"
            onChange={handleInputChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label className="font-semibold mt-2">Product description</label>
          <textarea
            className="w-full h-30 p-3 border border-gray-300 rounded-lg"
            id="description"
            name="description"
            onChange={handleInputChange}
          />
          <label className="text-sm font-semibold mt-2">Product Image</label>
          <input
            type="file"
            name="image"
            id="image"
            className="border border-gray-300 rounded-lg"
            onChange={handleImageChange}
          />
          <p className="text-right text-xs text-slate-700">
            Supported file formats: jpg, png, jpeg
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border items-center w-80 rounded-xl bg-gray-700 text-white p-2 cursor-pointer hover:bg-black mt-2 mb-2"
          >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;