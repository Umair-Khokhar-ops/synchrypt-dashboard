import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="flex items-center bg-[#0F1E42] h-16 px-6">
      <img
        src="/logo.png"
        alt="Synchrypt Logo"
        className="h-8 w-8 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      />
      <h1
        className="ml-4 text-white text-xl font-semibold cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        Synchrypt Dashboard
      </h1>
      {/* you can add nav links here if needed */}
    </header>
  );
};

export default TopBar;
