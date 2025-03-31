import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Agrimater</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-green-600">Features</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-green-600">How It Works</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
            <Link to="/blog" className="text-gray-600 hover:text-green-600">Blog</Link>
            <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;