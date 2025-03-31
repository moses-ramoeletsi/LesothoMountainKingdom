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
          <div className="bg-gradient-to-br from-green-100 to-blue-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Historical Timeline</h2>
            {historicalTimeline.map((item, index) => (
              <div 
                key={index} 
                className="mb-4 p-4 border-l-4 border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="mr-3 text-blue-600" />
                  <span className="text-xl font-bold text-blue-700">{item.year}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{item.event}</h3>
                <p className="text-gray-600 mt-2">{item.details}</p>
              </div>
            ))}
          </div>
        );
      
      case 'sites':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {historicalSites.map((site, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {index === 0 ? (
                    <FaCrown className="text-4xl text-blue-600" />
                  ) : index === 1 ? (
                    <FaGlobeAfrica className="text-4xl text-green-600" />
                  ) : (
                    <FaUniversity className="text-4xl text-purple-600" />
                  )}
                  <h3 className="ml-4 text-xl font-semibold">{site.name}</h3>
                </div>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  <p className="text-gray-600">{site.location}</p>
                </div>
                <p className="text-gray-700">{site.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'monarchy':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Monarchy of Lesotho</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">Key Information</h3>
                <p><strong>Founding King:</strong> {monarchyInfo.foundingKing}</p>
                <p><strong>Current Monarch:</strong> {monarchyInfo.currentMonarch}</p>
                <p><strong>Dynasty:</strong> {monarchyInfo.dynastyName}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Constitutional Role</h3>
                <p>{monarchyInfo.constitutionalRole}</p>
                <h4 className="mt-4 font-semibold">Major Contributions:</h4>
                <ul className="list-disc list-inside">
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
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
        History & Heritage of Lesotho
      </h1>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-md inline-flex">
          {[
            { key: 'timeline', label: 'Historical Timeline' },
            { key: 'sites', label: 'Historical Sites' },
            { key: 'monarchy', label: 'Monarchy' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`px-4 py-2 ${
                activeSection === tab.key 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-600 hover:bg-blue-100'
              } transition-colors`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {renderSection()}
      </div>
    </div>
  );
};

export default HistoryAndHeritage;