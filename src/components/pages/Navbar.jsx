import React from "react";
import { FaShopify, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex p-8 font-semibold justify-between items-center ">
      <div>
        <FaShopify className="text-3xl" />
      </div>
      <div className="flex gap-20">
        <Link to="/">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500">
            Home
          </h2>
        </Link>
        <Link to="/product">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500">
            Products
          </h2>
        </Link>
        <Link to="/about">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500">
            About
          </h2>
        </Link>
      </div>
      <div>
        <Link
          to="/cart"
          className="flex gap-3 items-center  hover:text-green-500"
        >
          <FaCartPlus />
          <h2 className="hover:underline underline-offset-3"> Cart</h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
