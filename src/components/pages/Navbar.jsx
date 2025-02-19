import React from "react";
import { FaShopify, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className=" flex justify-between items-center font-semibold p-8  top-0">
      <div>
        <FaShopify />
      </div>
      <div className="flex md:gap-20 gap-10">
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

        <Link to='/cart' className="flex gap-3 items-center"> 
      <FaCartPlus />
          <h2 className="hover:underline underline-offset-3 hover:text-green-500"> Cart</h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
