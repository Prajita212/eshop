import React, { useContext } from "react";
import { CartContext } from "./cart/Contextprovider";
import Product from "./Product";

const CartProduct = ({ pro }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="flex flex-row border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={pro.image}
        alt={pro.title}
        className="w-24 h-24 object-contain mr-4"
      />

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="text-lg font-semibold">{pro.title}</p>
          <p className="text-gray-700">${pro.price}</p>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => Decrease(pro.id)}
          >
            -
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
            {pro.quantity}
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => Increase(pro.id)}
          >
            +
          </button>
        </div>

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full mt-2 transition-colors"
          onClick={() => dispatch({ type: "Remove", id: pro.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;