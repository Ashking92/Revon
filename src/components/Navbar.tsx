
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-700">RevON</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md ${isActive('/')}`}>Home</Link>
            <Link to="/services" className={`px-3 py-2 rounded-md ${isActive('/services')}`}>Services</Link>
            <Link to="/app-review" className={`px-3 py-2 rounded-md ${isActive('/app-review')}`}>App Review</Link>
            <Link to="/reviews" className={`px-3 py-2 rounded-md ${isActive('/reviews')}`}>Reviews</Link>
            <Link to="/earn" className={`px-3 py-2 rounded-md ${isActive('/earn')}`}>Earn</Link>
            <Link to="/about" className={`px-3 py-2 rounded-md ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`px-3 py-2 rounded-md ${isActive('/contact')}`}>Contact</Link>
            <Link to="/live-orders" className={`px-3 py-2 rounded-md ${isActive('/live-orders')}`}>Live Orders</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md ${isActive('/') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`block px-3 py-2 rounded-md ${isActive('/services') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/app-review" 
            className={`block px-3 py-2 rounded-md ${isActive('/app-review') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            App Review
          </Link>
          <Link 
            to="/reviews" 
            className={`block px-3 py-2 rounded-md ${isActive('/reviews') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </Link>
          <Link 
            to="/earn" 
            className={`block px-3 py-2 rounded-md ${isActive('/earn') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            Earn
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 rounded-md ${isActive('/about') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md ${isActive('/contact') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/live-orders" 
            className={`block px-3 py-2 rounded-md ${isActive('/live-orders') ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"}`}
            onClick={() => setIsOpen(false)}
          >
            Live Orders
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
