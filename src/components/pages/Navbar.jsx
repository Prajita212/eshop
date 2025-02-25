import React, { useContext, useState } from "react";
import { FaShopify, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CartContext } from "./cart/Contextprovider";

function Navbar() {
  const{cart}= useContext(CartContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" flex justify-between items-center font-semibold p-8  top-0">
      <div>
        <FaShopify className="md:text-xl text-2xl" />
      </div>
      <div
        className={`md:flex md:gap-20 gap-10 ${isMenuOpen ? "block" : "hidden"}`}>
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
    <span className="hidden md:flex text-red-400 text-sm">{cart.length}</span><FaCartPlus className="hover:text-green-500"/>
              </Link>
        
      </div>
      <IoReorderThreeOutline className="md:hidden text-2xl cursor-pointer hover:text-green-500"
        onClick={toggleMenu}  />
    </div>
  );
}

export default Navbar;
