import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-white w-100 fixed top-0 left-0 right-0 z-50 mx-16">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo/Icon */}
        <div className="flex items-center space-x-2">
          <img
            src="\src\assets\Landsacpe.svg"
            alt="Logo"
            className="w-100 h-10"
          />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 font-medium transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 font-medium transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 font-medium transition"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 font-medium transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 font-medium transition"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 font-medium hover:text-green-500 transition">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Signup
          </button>
          <button className="text-gray-600 hover:text-blue-500 transition">
            <Cog6ToothIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
