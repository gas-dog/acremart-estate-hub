
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-acremart-400 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-bold text-xl text-gray-800">AcreMart</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium ${isActive('/') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'}`}>
            Home
          </Link>
          <Link to="/properties" className={`font-medium ${isActive('/properties') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'}`}>
            Properties
          </Link>
          <Link to="/about" className={`font-medium ${isActive('/about') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'}`}>
            About
          </Link>
          <Link to="/contact" className={`font-medium ${isActive('/contact') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'}`}>
            Contact
          </Link>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="outline" className="border-gray-300 text-gray-700">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-acremart-400 hover:bg-acremart-500 text-white">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white border-t">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`py-2 ${isActive('/') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'} font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className={`py-2 ${isActive('/properties') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'} font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className={`py-2 ${isActive('/about') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'} font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 ${isActive('/contact') ? 'text-acremart-500' : 'text-gray-600 hover:text-acremart-500'} font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="bg-acremart-400 hover:bg-acremart-500 w-full" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
