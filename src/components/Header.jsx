import React from 'react';

const Header = () => {
  return (
    <nav className="w-full z-50 px-8 md:px-24 py-6 flex justify-between items-center bg-[#000000] text-white">
      {/* Logo Section */}
      <div className="text-xl font-bold tracking-tight">
        Dulari Dayananda
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li className="hover:text-gray-300 cursor-pointer transition-colors">Home</li>
        <li className="hover:text-gray-300 cursor-pointer transition-colors">About</li>
        <li className="hover:text-gray-300 cursor-pointer transition-colors">Skills</li>
        <li className="hover:text-gray-300 cursor-pointer transition-colors">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer transition-colors">Contact</li>
      </ul>
    </nav>
  );
};

export default Header;