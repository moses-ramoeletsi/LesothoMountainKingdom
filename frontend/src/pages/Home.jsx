import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, Mountain } from 'lucide-react';

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
            <Mountain className="mx-auto text-5xl text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Tourist Attractions</h2>
            <Link 
              to="/attractions" 
              className="text-blue-600 hover:underline"
            >
              Discover Destinations
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Camera className="mx-auto text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Culture & Traditions</h2>
            <Link 
              to="/culture" 
              className="text-blue-600 hover:underline"
            >
              Explore Heritage
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Globe className="mx-auto text-5xl text-green-800 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Travel Guide</h2>
            <Link 
              to="/travel-guide" 
              className="text-blue-600 hover:underline"
            >
              Plan Your Trip
            </Link>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md text-center'>
            <Globe className="mx-auto text-5xl text-green-800 mb-4" />
            <h2 className="text-2xl font-semibold mb-4"></h2>
            <Link 
              to="/history" 
              className="text-blue-600 hover:underline"
            >
              Adventure Activities
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
