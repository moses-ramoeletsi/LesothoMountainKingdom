import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="my-green-color-style text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/travel-guide" className="hover:text-green-300 transition-colors">Travel Guide</Link></li>
              <li><Link to="/economy" className="hover:text-green-300 transition-colors">Business Opportunities</Link></li>
              <li><Link to="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded mb-2 sm:mb-0 sm:mr-2 text-black"
                aria-label="Email for newsletter"
              />
              <button className="my-blue-color-style text-white px-4 py-2 rounded transition-colors hover:opacity-90">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-300">
              Stay updated with our latest tours and offers
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              © 2024 Lesotho Tourism. All Rights Reserved.
            </div>
            <div className="text-sm">
              <Link to="/privacy" className="hover:text-green-300 mr-4 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;