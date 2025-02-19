import React from "react";
import picture from "../../assets/pic.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function About() {
  return (
    <div className="flex items-center font-serif leading-relaxed p-30">
      <div>
        <h2 className="text-2xl">
          {" "}
          More Than Just a Store - We're Your Partner in clothing
        </h2>
        <p>
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
          <span className="flex gap-3 ">
            <FaFacebook className="hover:text-blue-400 text-xl cursor-pointer" />
            <FaInstagram className="hover:text-purple-800 text-xl cursor-pointer" />
          </span>
        </p>
      </div>
      <div>
        <img src={picture} className="h-100 w-300" />
      </div>
    </div>
  );
}

export default About;
