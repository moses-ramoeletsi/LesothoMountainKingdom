import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGlobeAfrica, FaCamera, FaMountain, FaHiking, FaBars, FaTimes, FaMap, FaMoneyCheckAlt } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-green-700/85 bg-opacity-80 shadow-md' 
          : 'bg-green-800'
      } text-white py-3`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold">Lesotho: Kingdom in the Sky</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center hover:text-green-300 transition-colors">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/attractions" className="flex items-center hover:text-green-300 transition-colors">
            <FaMountain className="mr-2" /> Attractions
          </Link>
          <Link to="/culture" className="flex items-center hover:text-green-300 transition-colors">
            <FaGlobeAfrica className="mr-2" /> Culture
          </Link>
          <Link to="/adventure" className="flex items-center hover:text-green-300 transition-colors">
            <FaHiking className="mr-2" /> Adventure
          </Link>
          <Link to="/gallery" className="flex items-center hover:text-green-300 transition-colors">
            <FaCamera className="mr-2" /> Gallery
          </Link>
          <Link to="/currency" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaMoneyCheckAlt className="mr-2" /> Currency
          </Link>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        } ${scrolled ? 'bg-green-700/85 bg-opacity-80' : 'bg-green-800'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/attractions" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaMountain className="mr-2" /> Attractions
          </Link>
          <Link to="/culture" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaGlobeAfrica className="mr-2" /> Culture
          </Link>
          <Link to="/adventure" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaHiking className="mr-2" /> Adventure
          </Link>
          <Link to="/gallery" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaCamera className="mr-2" /> Gallery
          </Link>
          <Link to="/currency" className="flex items-center hover:text-green-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <FaMoneyCheckAlt className="mr-2" /> Currency
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;