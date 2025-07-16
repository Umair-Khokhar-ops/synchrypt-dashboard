import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
