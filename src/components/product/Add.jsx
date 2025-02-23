import React, { useEffect, useState } from "react";
import axios from "axios";

function Add() {
  let [products, setProducts] = useState([]);
  let [input_Data, setInput_Data] = useState({
    title: " ",
    price: " ",
    description: " ",
    image: " ",
    category: " ",
  });
  const categories = [
    { id: 1, name: "electronics" },
    { id: 2, name: "men's Clothing" },
    { id: 3, name: "women's Clothing" },
    { id: 4, name: "jewelery" },
  ];
  let setData = (e) => {
    setInput_Data({ ...input_Data, [e.target.name]: [e.target.value] });
  };
  let saveTo_database = () => {
    axios
      .post("http://localhost:3001/products", input_Data)
    
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(input_Data);

  let getProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
  };
  return (
    <div className="flex items center justify-center p-10 ">
      <div className="border p-7 grid items-center hover:border-green-600 rounded-2xl">
        <div className="justify-items-center mb-4">
          <h1 className="font-semibold text-xl">Update Products</h1>
        </div>
        <p>Product Name</p>
        <input
          type="text"
          id="title"
          name="title"
          onChange={setData}
          className="border border-gray-600
      "
    
        />
        <p>Product Price</p>
        <input
          type="price"
          id="price"
          name="price"
          onChange={setData}
          className="border border-gray-600
      "
        />
       
        <p>Product Category</p>
        <select
          type="text"
          id="category"
          name="category"
          onChange={setData}
          className="border border-gray-600 
      ">
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
        <p>Product Description</p>
        <textarea
          type="text area"
          id="description"
          name="description"
          onChange={setData}
          className="border border-gray-600 h-15
      "
        />
        <p>Product Image</p>
        <input
          type="text"
          id="image"
          name="image"
          onChange={setData}
          className="border border-gray-600
      "
        />
        <div className="text-center mt-4">
          <button
            type="submit"
            className="border w-35 p-1 text-white bg-gray-800 rounded-2xl hover:bg-gray-950 cursor-pointer "
            onClick={saveTo_database}
          >
            Update Now
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Add;
