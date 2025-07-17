import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { token } = await AuthService.login(username, password);
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
    } catch {
      setError("Login failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="
        flex items-center justify-center
        h-[calc(100vh-4rem)]
      "
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-6 text-center font-semibold">Sign In</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm">{error}</div>
        )}

        <label className="block mb-2 text-sm font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-[#0F1E42] text-white rounded hover:bg-[#162d6b] transition"
        >
          {loading ? "Signing in…" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
