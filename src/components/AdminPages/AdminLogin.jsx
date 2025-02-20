import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
function AdminLogin() {
    const[email, setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
    };
  return (
    <div className="w-full h-140 grid items-center justify-center">
      <div className=" bg-white border rounded-3xl p-5 ">
      <form onSubmit={handleLogin}>
        <h2 className="text-center text-3xl font-bold mb-7">Login</h2>
          <label className=" font-semibold">Email</label>
        <div className="flex items-center gap-3 mb-3">
          <MdEmail className="text-xs text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border-b text-gray-500"
          />
        </div>
          <label className="font-semibold">Password</label>
        <div className="flex items-center gap-3">
        <RiLockPasswordLine className="text-sm text-gray-500"/>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border-b text-gray-500"
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="text-center">
        <h1 className="text-sm mt-2">Forgot your password?</h1>
        <button type="submit" className="bg-gradient-to-r from-gray-600 to-gray-800 text-white w-50 rounded-2xl mt-5 cursor-pointer">
          Login
        </button>
        <p className="text-sm">or <Link to="/admin-signup" className="hover:underline underline-offset-2 hover:text-green-700">sign up</Link> using</p>
        <div className="justify-items-center mt-2">
            <div className="flex gap-2">
          <FaFacebook className="text-blue-400" />
          <FaTwitter className="text-blue-600" />
          <AiFillGoogleCircle className="text-red-500" />
        </div>
        </div>
      </div>
      </form>
      </div>
    </div>
  );
}

export default AdminLogin;
