import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaGlobeAfrica, FaHiking, FaHireAHelper, FaHistory, FaMountain } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{backgroundImage: "url('/images/hero-background.jpg')"}}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Lesotho: Kingdom in the Sky</h1>
          <p className="text-xl mb-8">Discover the Majestic Mountain Kingdom of Africa</p>
          <Link 
            to="/about" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Explore Lesotho
          </Link>
        </div>
      </div>

      {/* Quick Navigation Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaMountain className="mx-auto text-5xl my-text-color-style mb-4" />
            <h2 className="text-2xl font-semibold my-text-color-style mb-4">Tourist Attractions</h2>
            <Link 
              to="/attractions" 
              className="my-secondary-text-color-style hover:underline"
            >
              Discover Destinations
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaCamera className="mx-auto text-5xl my-text-color-style mb-4" />
            <h2 className="text-2xl  my-text-color-style font-semibold mb-4">Culture & Traditions</h2>
            <Link 
              to="/culture" 
              className="my-secondary-text-color-style hover:underline"
            >
              Explore Heritage
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaGlobeAfrica className="mx-auto text-5xl my-text-color-style mb-4" />
            <h2 className="text-2xl my-text-color-style font-semibold mb-4">Travel Guide</h2>
            <Link 
              to="/travel-guide" 
              className="my-secondary-text-color-style hover:underline"
            >
              Plan Your Trip
            </Link>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md text-center'>
            <FaHistory className="mx-auto text-5xl my-text-color-style mb-4" />
            <h2 className="text-2xl my-text-color-style font-semibold mb-4">History & Heritage</h2>
            <Link 
              to="/history" 
              className="my-secondary-text-color-style hover:underline"
            >
              Discover History
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
