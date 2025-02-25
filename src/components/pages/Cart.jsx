import React, { useContext } from "react";
import { CartContext } from "./cart/Contextprovider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "./cart/CartReducer";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Items in Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cart.map(p => (
            <CartProduct key={p.id} pro={p} />
          ))}
        </div>
      )}
      <div className="border border-gray-500 mt-3 w-40 p-3">
        <h1>Total Items: {totalItem}</h1>
        <h1>Total Price: ${totalPrice}</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4  rounded-full mt-2 transition-colors">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;