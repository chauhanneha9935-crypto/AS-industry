 import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Sahi tarika: Image ko pehle import karein
import logoImg from '../assets/logo.jpeg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-4 lg:top-6 left-0 w-full z-[100] px-4 lg:px-10">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl lg:rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300">
        
        {/* --- Logo & Brand Name Section --- */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Container */}
          <div className="w-10 h-10 lg:w-11 lg:h-11 bg-white rounded-xl lg:rounded-full flex items-center justify-center shadow-md border border-gray-100 group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
            {/* Ab ye image load hogi */}
            <img 
              src={logoImg} 
              alt="AS Industries Logo" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl lg:text-2xl font-black text-slate-800 tracking-tighter uppercase italic group-hover:text-[#f26522] transition-colors leading-none">
              AS INDUSTRIES
            </span>
            <div className="h-1 w-8 bg-[#f26522] rounded-full mt-1"></div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-gray-100/50 rounded-full px-2 py-1 border border-gray-200/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                location.pathname === link.path 
                ? "bg-white text-[#f26522] shadow-sm" 
                : "text-slate-600 hover:text-[#f26522]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-800 focus:outline-none bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-6 flex flex-col space-y-4 md:hidden border border-gray-100 animate-in fade-in zoom-in duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-center py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                  location.pathname === link.path 
                  ? "bg-[#f26522] text-white shadow-lg shadow-orange-500/30" 
                  : "text-slate-600 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;