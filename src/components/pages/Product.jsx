import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("all"); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const fakeStoreResponse = await fetch("https://fakestoreapi.com/products");
        const fakeStoreData = await fakeStoreResponse.json();

        
        const jsonServerResponse = await fetch("http://localhost:3001/products"); 
        const jsonServerData = await jsonServerResponse.json();

        
        const combinedData = [...fakeStoreData, ...jsonServerData];
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
      const filtered = products.filter((pro) => pro.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="p-10">
    
      <div className="flex gap-8 mb-8">
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
          <div key={pro.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={pro.image}
              alt={pro.title}
              className="w-full h-48 object-contain mb-4"
            />
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