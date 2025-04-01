import React, { useState } from 'react';
import { 
  FaUniversity, 
  FaGlobeAfrica, 
  FaCrown, 
  FaCalendarAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

import { 
  historicalTimeline, 
  historicalSites, 
  monarchyInfo 
} from '../data/historicalEvents';

const HistoryAndHeritage = () => {
  const [activeSection, setActiveSection] = useState('timeline');

  const renderSection = () => {
    switch(activeSection) {
      case 'timeline':
        return (
          <div className="container mx-auto py-4 sm:py-6 md:py-8 bg-white rounded-lg shadow-md px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 my-text-color-style">Historical Timeline</h2>
            <div className="space-y-3 sm:space-y-4">
              {historicalTimeline.map((item, index) => (
                <div 
                  key={index} 
                  className="p-3 sm:p-4 border-l-4 border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center mb-1 sm:mb-2">
                    <FaCalendarAlt className="mr-2 sm:mr-3 my-secondary-text-color-style" />
                    <span className="text-lg sm:text-xl font-bold my-text-color-style">{item.year}</span>
                  </div>
                  <h3 className="font-semibold my-text-color-style text-base sm:text-lg">{item.event}</h3>
                  <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'sites':
        return (
          <div className="container mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {historicalSites.map((site, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                    <div className="mb-2 sm:mb-0">
                      {index === 0 ? (
                        <FaCrown className="text-3xl sm:text-4xl my-secondary-text-color-style" />
                      ) : index === 1 ? (
                        <FaGlobeAfrica className="text-3xl sm:text-4xl my-secondary-text-color-style" />
                      ) : (
                        <FaUniversity className="text-3xl sm:text-4xl my-secondary-text-color-style" />
                      )}
                    </div>
                    <h3 className="sm:ml-4 text-lg sm:text-xl font-semibold my-text-color-style">{site.name}</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="mr-2 text-red-500 flex-shrink-0" />
                    <p className="my-text-color-style text-sm sm:text-base">{site.location}</p>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{site.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'monarchy':
        return (
          <div className="bg-white container mx-auto py-4 sm:py-6 md:py-8 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 my-text-color-style">Monarchy of Lesotho</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Key Information</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p><strong>Founding King:</strong> {monarchyInfo.foundingKing}</p>
                  <p><strong>Current Monarch:</strong> {monarchyInfo.currentMonarch}</p>
                  <p><strong>Dynasty:</strong> {monarchyInfo.dynastyName}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Constitutional Role</h3>
                <p className="text-sm sm:text-base">{monarchyInfo.constitutionalRole}</p>
                <h4 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">Major Contributions:</h4>
                <ul className="list-disc list-inside text-sm sm:text-base">
                  {monarchyInfo.majorContributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div 
          className="h-48 sm:h-64 md:h-80 lg:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-6 sm:mb-8"
          style={{backgroundImage: "url('/images/history/heritage-hero.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-3 sm:p-4 md:p-6 lg:p-10 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-4">History & Heritage of Lesotho</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">Explore the Rich Past of Africa's Mountain Kingdom</p>
          </div>
        </div>

        <div className="container mx-auto py-4 sm:py-6">
          <div className="bg-white rounded-lg shadow-md flex flex-wrap w-full">
            {[
              { key: 'timeline', label: 'Historical Timeline' },
              { key: 'sites', label: 'Historical Sites' },
              { key: 'monarchy', label: 'Monarchy' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSection(tab.key)}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base flex-1 ${
                  activeSection === tab.key 
                   ? 'my-green-color-style text-white rounded-t-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 rounded-t-lg'
                } transition-colors`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default HistoryAndHeritage;