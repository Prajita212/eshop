
import React, { useContext, useRef, useState } from "react";
import gsap from "gsap";
import { FaShopify, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CartContext } from "./cart/Contextprovider";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const gsapRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    gsap.to(gsapRef.current, {
      rotate: 360,
      duration: 1,
      scale: 0,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
    });
    gsap.to(buttonRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <div className=" flex justify-between items-center font-semibold p-8  top-0">
      <div>
        <FaShopify ref={gsapRef} className="md:text-3xl text-2xl" />
      </div>
      <div
        className={`md:flex md:gap-20 gap-10 ${
          isMenuOpen
            ? "fixed p-2 bg-white flex flex-col gap-0 right-0 top-16 border"
            : "hidden"
        }`}
      >
        <Link to="/">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 duration-600">
            Home
          </h2>
        </Link>
        <Link to="/product">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 duration-600">
            Products
          </h2>
        </Link>
        <Link to="/about">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 duration-600">
            About
          </h2>
        </Link>
      </div>
      <div>
        <Link to="/cart" className="flex gap-3 items-cente(r">
          <span className="flex text-red-400 text-sm">{cart.length}</span>
          <FaCartPlus ref={buttonRef} className="hover:text-green-500" />
        </Link>
      </div>
      <IoReorderThreeOutline
        className="md:hidden text-2xl cursor-pointer hover:text-green-500"
        onClick={toggleMenu}
      />
    </div>
  );
}

export default Navbar;