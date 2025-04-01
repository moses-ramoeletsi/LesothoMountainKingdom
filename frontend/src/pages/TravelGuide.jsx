import React, { useState } from 'react';
import { MapPin, Plane, Car, Clock, CreditCard, Sun } from 'lucide-react';

const TravelGuidePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Travel Guide Overview',
      content: (
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold my-text-color-style mb-3 sm:mb-4">Welcome to Lesotho Travel Guide</h2>
          <p className="mb-4 text-sm sm:text-base">
            Lesotho, known as the Kingdom in the Sky, offers a unique travel experience with its stunning 
            mountain landscapes, rich cultural heritage, and adventure opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <MapPin className="my-secondary-text-color-style mb-2 sm:mb-4 h-5 w-5 sm:h-6 sm:w-6" />
              <h3 className="my-text-color-style font-semibold text-sm sm:text-base">Geographical Highlights</h3>
              <p className="text-xs sm:text-sm">Highest country in the world, entirely above 1,000 meters</p>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
              <Sun className="my-secondary-text-color-style mb-2 sm:mb-4 h-5 w-5 sm:h-6 sm:w-6" />
              <h3 className="my-text-color-style font-semibold text-sm sm:text-base">Climate</h3>
              <p className="text-xs sm:text-sm">Temperate with clear, sunny days and cold nights</p>
            </div>
            <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
              <Clock className="my-secondary-text-color-style mb-2 sm:mb-4 h-5 w-5 sm:h-6 sm:w-6" />
              <h3 className="my-text-color-style font-semibold text-sm sm:text-base">Best Time to Visit</h3>
              <p className="text-xs sm:text-sm">Summer (December-February) for landscapes, Winter (June-August) for snow activities</p>
            </div>
          </div>
        </div>
      )
    },
    transportation: {
      title: 'Transportation Guide',
      content: (
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold my-text-color-style mb-3 sm:mb-4">Getting Around Lesotho</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Plane className="mb-2 sm:mb-0 sm:mr-4 my-secondary-text-color-style h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <h3 className="my-text-color-style font-semibold text-sm sm:text-base">Airports</h3>
                <p className="text-xs sm:text-sm">Moshoeshoe I International Airport in Maseru, main entry point</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Car className="mb-2 sm:mb-0 sm:mr-4 my-secondary-text-color-style h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <h3 className="my-text-color-style font-semibold text-sm sm:text-base">Road Travel</h3>
                <p className="text-xs sm:text-sm">4x4 vehicles recommended due to mountainous terrain</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center bg-gray-100 p-3 sm:p-4 rounded-lg">
              <CreditCard className="mb-2 sm:mb-0 sm:mr-4 my-secondary-text-color-style h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <h3 className="my-text-color-style font-semibold text-sm sm:text-base">Border Crossings</h3>
                <p className="text-xs sm:text-sm">Primarily with South Africa, major crossings at Maseru Bridge and Sani Pass</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    visaInfo: {
      title: 'Visa & Entry Requirements',
      content: (
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold my-text-color-style mb-3 sm:mb-4">Visa Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <h3 className="my-text-color-style font-semibold mb-2 text-sm sm:text-base">Visa-Free Entry</h3>
              <ul className="list-disc list-inside text-xs sm:text-sm">
                <li>Many African countries</li>
                <li>Some European and Commonwealth countries</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
              <h3 className="my-text-color-style font-semibold mb-2 text-sm sm:text-base">Required Documents</h3>
              <ul className="list-disc list-inside text-xs sm:text-sm">
                <li>Valid Passport</li>
                <li>Proof of Accommodation</li>
                <li>Return Ticket</li>
                <li>Sufficient Funds</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Responsive Hero Section */}
        <div 
          className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-6 sm:mb-8"
          style={{backgroundImage: "url('/images/travel/guide-hero.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Lesotho Travel Guide</h1>
            <p className="text-base sm:text-lg md:text-xl">Navigate the Mountain Kingdom Like a Local</p>
          </div>
        </div>

        {/* Responsive Navigation Buttons */}
        <div className="py-4 sm:py-6 overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap min-w-max sm:flex-wrap">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                className={`px-3 sm:px-4 py-2 mr-2 mb-2 rounded text-sm sm:text-base whitespace-nowrap ${
                  activeSection === key 
                    ? 'my-green-color-style text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => setActiveSection(key)}
              >
                {sections[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="py-4 sm:py-6">
          {sections[activeSection].content}
        </div>
      </div>
    </div>
  );
};

export default TravelGuidePage;