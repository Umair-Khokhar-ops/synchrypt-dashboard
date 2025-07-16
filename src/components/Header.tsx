import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Overview", path: "/dashboard" },
  { name: "Verification Logs", path: "/verification-logs" },
  { name: "Compliance", path: "/compliance" },
  { name: "Tamper Alerts", path: "/tamper-alerts" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0F1E42] md:flex md:items-center md:justify-between px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="ml-3 text-white text-xl font-semibold">
            Synchrypt Dashboard
          </span>
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(o => !o)}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      <nav
        className={`mt-4 md:mt-0 ${
          open ? "block" : "hidden"
        } md:block`}
      >
        <ul className="md:flex md:space-x-6">
          {navItems.map(item => (
            <li key={item.name} className="mt-2 md:mt-0">
              <Link
                to={item.path}
                className="block text-white hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
