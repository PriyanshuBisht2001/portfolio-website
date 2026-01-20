"use client";
import { handleLogin } from "@/utils/serverAction.ut";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await handleLogin(username, password);
    if (!response) {
      alert("Login failed. Please try again.");
      return;
    } else {
      window.location.href = "/project";
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-md p-8">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium "
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary-100"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary-100"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2  bg-secondary-100 rounded-xl hover:bg-secondary-100/80 focus:outline-none focus:ring-1 focus:ring-secondary-100 hover:cursor-pointer flex justify-center"
          >
            {loading ? (
              <span className="loader"></span> // Add your loader styling here
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
