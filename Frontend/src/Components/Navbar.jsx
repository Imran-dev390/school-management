import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Hamburger & Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logo.jpg"
            alt="Logo"
            className="w-60 h-16 object-cover rounded-full"
          />
          {/* <span className="text-2xl font-bold text-emerald-600 hidden sm:inline">MeriTaleem</span> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li className="hover:text-emerald-600 transition"><a href="#">Home</a></li>
          <li className="hover:text-emerald-600 transition"><a href="#">Features</a></li>
          <li className="hover:text-emerald-600 transition"><a href="#">Benefits</a></li>
          <li className="hover:text-emerald-600 transition"><a href="#">Pricing</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
            <li><a href="#" onClick={toggleMenu}>Home</a></li>
            <li><a href="#" onClick={toggleMenu}>Features</a></li>
            <li><a href="#" onClick={toggleMenu}>Benefits</a></li>
            <li><a href="#" onClick={toggleMenu}>Pricing</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
