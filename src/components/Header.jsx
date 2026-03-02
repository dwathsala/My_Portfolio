import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install using: npm install lucide-react

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white shadow-lg">
      <nav className="max-w-[1440px] mx-auto px-8 md:px-24 h-16 flex justify-between items-center bg-slate-900">
        {/* Logo Section */}
        <div className="text-xl font-bold tracking-tight z-[60]">
          Dulari Dayananda
        </div>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name} >
              <a 
                href={link.href} className="hover:text-gray-400 cursor-pointer transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Visible on Mobile Only) */}
        <div className="md:hidden z-[60]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="cursor-pointer" /> : <Menu size={28} className="cursor-pointer" />}
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-8 text-2xl font-semibold text-center">
            {navLinks.map((link) => (
              <li key={link.name} >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                className="hover:text-gray-400 cursor-pointer transition-colors"
              >
                {link.name}
              </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;