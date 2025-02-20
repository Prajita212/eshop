import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import picture5 from "../../assets/pic5.jpg";
import { MdEmail } from "react-icons/md";
import {
  FaLock,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    <div className="relative w-full h-auto ">
      <img src={picture5}/>
      <div className="absolute inset-0 flex items-center justify-center">
         <div className=" font-mono bg-amber-50 border rounded-xl border-amber-50 p-10">
        <h2 className="text-3xl font-bold ml-15 mb-15 ">Login</h2>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <MdEmail className="text-xs text-gray-500" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaLock className="text-xs text-gray-500" />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <div className="mt-3 text-sm">
            <Link to="/signup">
              <h2>Forgot your password ? </h2>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full text-amber-50 bg-gradient-to-r from-purple-300 to-purple-400 p-0.5 items-center mt-1 border rounded-3xl "
          >
            Login
          </button>

          <h2 className="text-sm ml-10 mt-1.5">
            Or{" "}
            <Link to="/signup">
              <span> Sign Up </span>
            </Link>
            Using
          </h2>
          <div className="flex ml-19 gap-2 mt-1.5 ">
            <Link to="https://www.facebook.com">
              <FaFacebook className=" hover:text-blue-800" />
            </Link>
            <Link to="https://www.x.com">
              <FaTwitter className="hover:text-blue-500" />
            </Link>
            <Link to="https://www.google.com">
              <FaGoogle className="hover:text-red-500" />
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
