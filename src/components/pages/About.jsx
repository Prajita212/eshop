import React from "react";
import picture from "../../assets/pic.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center font-serif leading-relaxed justify-between lg:p-25 p-4">
    
      <div className="text-justify lg:w-160 md:w-140 w-100">
        <h2 className="lg:text-2xl font-bold ">
          {" "}
          More Than Just a Store - We're Your Partner in clothing
        </h2>
        <p className="mt-1">
          Founded in 2025, E-shop began with a simple idea: to provide
          high-quality clothing that make life easier and more enjoyable. Our
          mission is to deliver sustainable, eco-friendly products that help you
          live a greener lifestyle. We're committed to providing exceptional
          customer service and products that exceed your expectations.
        </p>

        <p className="md:mt-10 mt-3">
          Got questions? We'd love to hear from you! Reach out at:{" "}
          <span className="hover:text-blue-600 hover:underline underline-offset-2 cursor-pointer ">
            eshop@gmail.com
          </span>
          <br />
          or connect with us on:
          <span className="flex gap-3 mt-2 ">
            <FaFacebook className="hover:text-blue-400 text-xl cursor-pointer" />
            <FaInstagram className="hover:text-purple-800 text-xl cursor-pointer" />
          </span>
        </p>
      </div>
      <div>
        <img src={picture} className="md:h-100 md:w-140 h-50 w-80 mt-3" />
        </div>
      </div>
    
  );
}

export default About;
