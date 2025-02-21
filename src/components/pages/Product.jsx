import React, { useEffect, useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="p-10">
      {/* Filter Buttons */}
      <div className="flex gap-8 mb-8">
        <button className="bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl">
          Mens clothing
        </button>
        <button className="bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl">
          Womens clothing
        </button>
        <button className="bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl">
          Jewellery
        </button>
        <button className="bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl">
          Electronics
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {product.map((pro) => (
          <div key={pro.id} className="border p-4 rounded-lg shadow-md">
            <img src={pro.image} alt={pro.title} className="w-full h-48 object-contain mb-4" />
            <div className="text-lg font-semibold">{pro.title}</div>
            <div className="text-gray-700">${pro.price}</div>
            <div className="text-sm text-gray-500">{pro.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;