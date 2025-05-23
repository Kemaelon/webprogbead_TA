import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white">
              <BookOpen className="h-8 w-8 mr-2" />
              <span className="text-xl font-serif font-bold">The Great Library</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? 'text-white bg-gray-700' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}>
                Home
              </Link>
              <Link to="/services" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/services' 
                    ? 'text-white bg-gray-700' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}>
                Services
              </Link>
              <Link to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-white bg-gray-700' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          <Link to="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/' 
                ? 'text-white bg-gray-700' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}>
            Home
          </Link>
          <Link to="/services" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/services' 
                ? 'text-white bg-gray-700' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}>
            Services
          </Link>
          <Link to="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/contact' 
                ? 'text-white bg-gray-700' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;