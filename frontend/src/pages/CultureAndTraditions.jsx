import React, { useState } from 'react';
import { culturalItems } from '../data/culturalItems';
import { Languages, Music } from 'lucide-react';
import {FaHorse } from 'react-icons/fa';
const CultureAndTraditions = () => {
  const [selectedItem, setSelectedItem] = useState(culturalItems[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className=" mx-auto px-4 sm:px-6 py-6">

      <div 
          className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
          style={{backgroundImage: "url('/images/culture/hero-background.jpg')"}}
      >
          <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Basotho Culture & Traditions</h1>
          <p className="text-base sm:text-lg md:text-xl">Discover the Rich Heritage of the Kingdom in the Sky</p>
        </div>
      </div>

      <div className="container mx-auto py-2 px-4">
      <div className="md:hidden py-4 overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap min-w-max">
          {culturalItems.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`px-3 py-2 mr-2 mb-2 rounded text-sm whitespace-nowrap ${
                selectedItem.id === item.id
                  ? 'my-green-color-style text-white rounded-t-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 rounded-t-lg'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="hidden md:block md:col-span-1 space-y-4">
          {culturalItems.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedItem.id === item.id
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-800 hover:bg-green-100"
              }`}
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </button>
          ))}
        </div>

        <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            {selectedItem.imageUrl && (
              <div className="w-full h-48 sm:h-64 md:h-72 lg:h-96 mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
         
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-green-800">{selectedItem.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{selectedItem.description}</p>

            {selectedItem.name === "Basotho Blanket" && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Colors and Patterns</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.colors.map(color => (
                    <span 
                      key={color} 
                      className="px-2 py-1 text-sm sm:text-base bg-blue-100 my-secondary-text-color-style rounded-full"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
          {selectedItem.name === "Sesotho Language" && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center">
                  <Languages className="mr-2 my-secondary-text-color-style" /> 
                  Common Phrases
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedItem.commonPhrases.map(phrase => (
                    <div 
                      key={phrase.phrase} 
                      className="bg-green-100 p-3 rounded-lg"
                    >
                      <p className="font-bold text-sm sm:text-base">{phrase.phrase}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Meaning: {phrase.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedItem.name === "Famo Music" && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center">
                  <Music className="mr-2 my-secondary-text-color-style" /> 
                  Musical Elements
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.instruments.map(instrument => (
                    <span 
                      key={instrument} 
                      className="px-2 py-1 text-sm sm:text-base bg-red-100 my-secondary-text-color-style rounded-full"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedItem.name === "Basotho Pony Trekking" && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center">
                  <FaHorse className="mr-2 my-secondary-text-color-style" /> 
                  Trekking Regions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.regions.map(region => (
                    <span 
                      key={region} 
                      className="px-2 py-1 text-sm sm:text-base bg-amber-100 my-secondary-text-color-style rounded-full"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default CultureAndTraditions;