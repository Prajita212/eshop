import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import picture5 from "../../assets/pic5.jpg";
function AdminLogin() {
  return (
    <div className="w-full h-140 grid items-center justify-center">
      <div className=" bg-white border rounded-3xl p-5 ">
        <h2 className="text-center text-3xl font-bold mb-7">Login</h2>
          <label className=" font-semibold">Email</label>
        <div className="flex items-center gap-3 mb-3">
          <MdEmail className="text-xs text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email"
            className="border-b text-gray-500"
          />
        </div>
          <label className="font-semibold">Password</label>
        <div className="flex items-center gap-3">
        <RiLockPasswordLine className="text-sm text-gray-500"/>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-b text-gray-500"
          />
        </div>
        <div className="text-center">
        <h1 className="text-sm mt-2">Forgot your password?</h1>
        <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white w-50 rounded-2xl mt-5 cursor-pointer">
          Login
        </button>
        <p className="text-sm">or sign up using</p>
        <div className="justify-items-center mt-2">
            <div className="flex gap-2">
          <FaFacebook className="text-blue-400" />
          <FaTwitter className="text-blue-600" />
          <AiFillGoogleCircle className="text-red-500" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminLogin;
