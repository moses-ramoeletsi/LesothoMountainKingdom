import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="my-green-color-style text-white py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/travel-guide" className="hover:text-green-300">Travel Guide</Link></li>
              <li><Link to="/economy" className="hover:text-green-300">Business Opportunities</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 rounded mb-4 text-black"
            />
            <button className="my-blue-color-style text-white px-4 py-2 rounded">Subscribe</button>
          </div>
        </div>
        <div className="text-center mt-8">
          © 2024 Lesotho Tourism. All Rights Reserved.
        </div>
      </footer>
    );
  };
export default Footer