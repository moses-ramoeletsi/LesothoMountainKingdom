import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaCloud, FaGlobeAfrica, FaHiking, FaHistory, FaMap, FaMountain } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="mx-auto px-4 sm:px-6 py-6">
        <div 
          className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
          style={{backgroundImage: "url('/images/hero-background.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Lesotho: Kingdom in the Sky</h1>
            <p className="text-base sm:text-lg md:text-xl">Discover the Majestic Mountain Kingdom of Africa</p>
            <Link 
              to="/about" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300"
            >
              Explore Lesotho
            </Link>
          </div>
        </div>

        <div className="container mx-auto py-6 md:py-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaMountain className="mx-auto text-4xl md:text-5xl my-text-color-style mb-2 md:mb-4" />
              <h2 className="text-xl md:text-2xl font-semibold my-text-color-style mb-2 md:mb-4">Tourist Attractions</h2>
              <Link 
                to="/attractions" 
                className="my-secondary-text-color-style hover:underline"
              >
                Discover Destinations
              </Link>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaCamera className="mx-auto text-4xl md:text-5xl my-text-color-style mb-2 md:mb-4" />
              <h2 className="text-xl md:text-2xl my-text-color-style font-semibold mb-2 md:mb-4">Culture & Traditions</h2>
              <Link 
                to="/culture" 
                className="my-secondary-text-color-style hover:underline"
              >
                Explore Heritage
              </Link>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaGlobeAfrica className="mx-auto text-4xl md:text-5xl my-text-color-style mb-2 md:mb-4" />
              <h2 className="text-xl md:text-2xl my-text-color-style font-semibold mb-2 md:mb-4">Travel Guide</h2>
              <Link 
                to="/travel-guide" 
                className="my-secondary-text-color-style hover:underline"
              >
                Plan Your Trip
              </Link>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaHistory className="mx-auto text-4xl md:text-5xl my-text-color-style mb-2 md:mb-4" />
              <h2 className="text-xl md:text-2xl my-text-color-style font-semibold mb-2 md:mb-4">History & Heritage</h2>
              <Link 
                to="/history" 
                className="my-secondary-text-color-style hover:underline"
              >
                Discover History
              </Link>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaMap className="mx-auto text-4xl md:text-5xl my-text-color-style mb-2 md:mb-4" />
              <h2 className="text-xl md:text-2xl my-text-color-style font-semibold mb-2 md:mb-4">Lesotho Map</h2>
              <Link 
                to="/map" 
                className="my-secondary-text-color-style hover:underline"
              >
                Explore Lesotho
              </Link>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaCloud className="mx-auto text-4xl md:text-5xl my-text-color-style mb-2 md:mb-4" />
              <h2 className="text-xl md:text-2xl my-text-color-style font-semibold mb-2 md:mb-4">Lesotho Weather</h2>
              <Link 
                to="/weather-forecast" 
                className="my-secondary-text-color-style hover:underline"
              >
                Explore Lesotho's Weather
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;