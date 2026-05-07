import React from "react";
import logo from "./images/logo.png";
import { Lock , Menu , X} from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#Project" },
    { name: "Experience", href: "#experience" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <a 
                href={item.href} 
                className="hover:text-white transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => window.location.href='./login'} 
          className="hidden md:flex items-center gap-2 border border-purple-500 text-purple-400 px-4 py-1.5 rounded-lg hover:bg-purple-500 hover:text-white transition"
        >
          <Lock size={18} />
          Admin
        </button>

        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-4 text-gray-300 font-medium pb-4 border-b border-gray-800">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="block hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => window.location.href='./login'} 
          className="mt-4 flex w-full items-center justify-center gap-2 border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition"
        >
          <Lock size={18} />
          Admin Access
        </button>
      </div>
    </nav>
  );
};
export default Navbar;