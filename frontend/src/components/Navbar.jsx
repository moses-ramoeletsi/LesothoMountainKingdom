
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGlobeAfrica, FaCamera, FaMountain, FaHiking } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="my-green-color-style text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Lesotho: Kingdom in the Sky</Link>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center hover:text-green-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/attractions" className="flex items-center hover:text-green-300">
            <FaMountain className="mr-2" /> Attractions
          </Link>
          <Link to="/culture" className="flex items-center hover:text-green-300">
            <FaGlobeAfrica className="mr-2" /> Culture
          </Link>
          <Link to="/adventure" className="flex items-center hover:text-green-300">
            <FaHiking className="mr-2" /> Adventure
          </Link>
          <Link to="/gallery" className="flex items-center hover:text-green-300">
            <FaCamera className="mr-2" /> Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar