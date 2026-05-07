import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-100 flex flex-col justify-center items-center px-4 font-sans">
      
      {/* Decorative background glow (subtle nod to the circle behind Saad) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Login Card Container with subtle border */}
      <div className="relative w-full max-w-md bg-[#111113] p-8 rounded-2xl border border-gray-800 shadow-2xl">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          {/* Optional: Add a small lock icon or logo here */}
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Admin <span className="text-purple-500">Portal</span>
          </h1>
          <p className="text-gray-400">Please sign in to access the dashboard.</p>
        </div>

        {/* The Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Username Field */}
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              placeholder="admin.saad"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-[#18181b] border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition duration-150 placeholder:text-gray-600"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#18181b] border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition duration-150 placeholder:text-gray-600"
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-red-950 border border-red-700 text-red-200 p-3 rounded-lg text-sm text-center font-medium">
              ⚠️ {error}
            </div>
          )}

          {/* Submit Button - Matched to your "View My Work" button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-[#111113] transition duration-200 active:scale-[0.98]"
            >
              Secure Login
              {/* Optional: Add an icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </form>

        {/* Optional Footer Link */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <a href="/" className="hover:text-purple-400 transition">
            &larr; Back to homepage
          </a>
        </div>
      </div>
    </div>
  );
}