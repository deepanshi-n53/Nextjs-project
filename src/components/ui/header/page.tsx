import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Logo / Brand Name */}
      <h1 className="text-2xl font-bold text-gray-800">Next JS</h1>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
          Services
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
          Contact
        </a>
      </nav>

      {/* Call to Action */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </header>
  );
}
