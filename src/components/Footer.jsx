import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Helper function to handle smooth routing transition back to top of the screen
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll back up to the top
    });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link 
              to="/" 
              onClick={handleNavigation} 
              className="text-2xl font-black tracking-tighter uppercase italic"
            >
              AS <span className="text-[#f26522]">INDUSTRIES</span>
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Leading the way in industrial excellence and innovation. Quality you can trust, service you can rely on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link to="/" onClick={handleNavigation} className="hover:text-[#f26522] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavigation} className="hover:text-[#f26522] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleNavigation} className="hover:text-[#f26522] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNavigation} className="hover:text-[#f26522] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="text-[#f26522] mr-2">📍</span>
                123 Industrial Area, Phase II,<br />New Delhi, India
              </li>
              <li className="flex items-center">
                <span className="text-[#f26522] mr-2">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <span className="text-[#f26522] mr-2">✉️</span>
                info@asindustries.com
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f26522] transition-all">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f26522] transition-all">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f26522] transition-all">
                LI
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} AS INDUSTRIES. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;