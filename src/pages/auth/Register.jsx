import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          onClick={() => alert("Register logic pending")}
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;