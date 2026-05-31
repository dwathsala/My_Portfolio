import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const headerStyles = `
  /* Formal, high-precision desktop hover transition */
  .formal-nav-link {
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  
  .formal-nav-link:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05); /* Ultra-subtle cell highlight */
  }

  /* Formal structural fade-in for mobile overlay */
  .animate-formal-fade {
    animation: formalFadeIn 0.25s cubic-bezier(0.2, 0, 0, 1) forwards;
  }

  @keyframes formalFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

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
    <>
      <style>{headerStyles}</style>

      {/* Professional transparent dark glassmorphism layout */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md text-white border-b border-white/5 shadow-sm select-none">
        <nav className="max-w-[1440px] mx-auto px-8 md:px-24 h-16 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="text-lg font-bold tracking-tight z-[60] text-white">
            Dulari Dayananda
          </div>

          {/* Desktop Navigation Links (Formal, Equal Spacing Matrix) */}
          <ul className="hidden md:flex items-center text-xs uppercase tracking-[0.18em] font-bold text-slate-400">
            {navLinks.map((link) => (
              <li key={link.name} className="block">
                <a 
                  href={link.href} 
                  className="formal-nav-link px-4 py-2 rounded-md cursor-pointer block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div 
            className="md:hidden z-[60] p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </div>

          {/* Mobile Dropdown Menu Overlay (Sharp Fade & Blur) */}
          <div 
            className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
              isOpen ? 'opacity-100 pointer-events-auto animate-formal-fade' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ul className="flex flex-col gap-6 w-full max-w-xs text-center">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-white text-lg font-medium tracking-wide cursor-pointer transition-colors block py-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;