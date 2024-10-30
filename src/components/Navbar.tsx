import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">LIA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="/apply" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="/apply" className="block px-3 py-2 bg-indigo-600 text-white rounded-md">Apply Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;