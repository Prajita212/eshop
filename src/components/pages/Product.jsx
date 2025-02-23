import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/'/g, "");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const fakeStoreResponse = await fetch("https://fakestoreapi.com/products");
        const fakeStoreData = await fakeStoreResponse.json();

        
        const jsonServerResponse = await fetch("http://localhost:3001/products");
        const jsonServerData = await jsonServerResponse.json();

        
        const normalizedFakeStoreData = fakeStoreData.map((product) => ({
          ...product,
          category: normalizeCategory(product.category),
        }));

        const normalizedJsonServerData = jsonServerData.map((product) => ({
          ...product,
          category: normalizeCategory(product.category),
        }));

      
        const combinedData = [...normalizedFakeStoreData, ...normalizedJsonServerData];
        setProducts(combinedData);
        setFilteredProducts(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products); 
    } else {
      const normalizedCategory = normalizeCategory(category);
      const filtered = products.filter(
        (pro) => normalizeCategory(pro.category) === normalizedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="p-10">
    
      <div className="flex md:flex-row flex-col md:gap-8 gap-2 mb-8">
        <button
          onClick={() => handleFilter("all")}
          className={`bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl ${
            selectedCategory === "all" ? "bg-gray-900" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("men's clothing")}
          className={`bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl ${
            selectedCategory === "men's clothing" ? "bg-gray-900" : ""
          }`}
        >
          Men's clothing
        </button>
        <button
          onClick={() => handleFilter("women's clothing")}
          className={`bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl ${
            selectedCategory === "women's clothing" ? "bg-gray-900" : ""
          }`}
        >
          Women's clothing
        </button>
        <button
          onClick={() => handleFilter("jewelery")}
          className={`bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl ${
            selectedCategory === "jewelery" ? "bg-gray-900" : ""
          }`}
        >
          Jewellery
        </button>
        <button
          onClick={() => handleFilter("electronics")}
          className={`bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl ${
            selectedCategory === "electronics" ? "bg-gray-900" : ""
          }`}
        >
          Electronics
        </button>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((pro) => (
          <Link
            to={`/product-detail/${pro.id}`} 
            key={pro.id}
            className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <img
              src={pro.image}
              alt={pro.title}
              className="w-full h-48 object-contain mb-4"
            />
            <div className="text-lg font-semibold">{pro.title}</div>
            <div className="text-gray-700">${pro.price}</div>
            <div className="text-sm text-gray-500">{pro.category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;