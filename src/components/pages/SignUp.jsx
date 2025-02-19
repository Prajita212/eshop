import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

import {
  FaLock,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!username || !email || !password) {
      setError("All fields are required.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }
    const newUser = {
      username,
      email,
      password,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
    bg-gradient-to-r from-purple-200 to-purple-300"
    >
      <div className=" font-mono bg-amber-50 border rounded-xl border-amber-50 p-10 ">
        <h2 className="text-3xl font-bold ml-14 mb-15 ">Signup</h2>

        <form onSubmit={handleSignup}>
          <label>Username</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaUser className="text-xs text-gray-500" />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Email</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <MdEmail className="text-xs text-gray-500" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password:</label>
          <div className="flex items-center gap-1.5 border-b p-1">
            <FaLock className="text-xs text-gray-500" />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="w-full text-amber-50 bg-gradient-to-r  from-purple-300 to-purple-400 p-0.5 items-center mt-1 border rounded-3xl "
          >
            Signup
          </button>
          <h2 className="text-sm ml-10 mt-1.5">Or Sign Up Using</h2>
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
  );
}

export default SignUp;