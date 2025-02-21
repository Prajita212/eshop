import React, { useState } from 'react';

function Update() {
  // State for the list of products
  const [products, setProducts] = useState([
  ]);

  // State for form inputs
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validate inputs
    if (!newProduct.name || !newProduct.price) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new product object
    const productToAdd = {
      id: products.length + 1, // Generate a unique ID
      name: newProduct.name,
      price: parseFloat(newProduct.price), // Convert price to a number
    };

    // Add the new product to the list
    setProducts([...products, productToAdd]);

    // Clear the form
    setNewProduct({
      name: '',
      price: '',
    });
  };

  return (
    <div>
      <h1>Fake Store</h1>

      {/* Form to add a new product */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Enter product price"
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      {/* Display the list of products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Update