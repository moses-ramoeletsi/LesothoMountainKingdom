import React, { useState } from 'react';
import { culturalItems } from '../data/culturalItems';
import { Languages, Music } from 'lucide-react';
import {FaHorse } from 'react-icons/fa';
const CultureAndTraditions = () => {
  const [selectedItem, setSelectedItem] = useState(culturalItems[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{backgroundImage: "url('/images/culture/hero-background.jpg')"}}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Basotho Culture & Traditions</h1>
          <p className="text-xl">Discover the Rich Heritage of the Kingdom in the Sky</p>
        </div>
      </div>

      <div className="container mx-auto py-12 grid md:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1 space-y-4">
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

        {/* Detail View */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8">
          {selectedItem.imageUrl && (
            <img 
              src={selectedItem.imageUrl} 
              alt={selectedItem.name} 
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
          )}
          
          <h2 className="text-3xl font-bold mb-4 text-green-800">{selectedItem.name}</h2>
          <p className="text-gray-600 mb-6">{selectedItem.description}</p>

          {/* Conditional Rendering for Different Cultural Items */}
          {selectedItem.name === "Basotho Blanket" && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Colors and Patterns</h3>
              <div className="flex space-x-4">
                {selectedItem.colors.map(color => (
                  <span 
                    key={color} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedItem.name === "Sesotho Language" && (
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Languages className="mr-2 text-purple-600" /> Common Phrases
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedItem.commonPhrases.map(phrase => (
                  <div 
                    key={phrase.phrase} 
                    className="bg-green-100 p-4 rounded-lg"
                  >
                    <p className="font-bold">{phrase.phrase}</p>
                    <p className="text-gray-600">Meaning: {phrase.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedItem.name === "Famo Music" && (
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Music className="mr-2 text-red-600" /> Musical Elements
              </h3>
              <div className="flex space-x-4">
                {selectedItem.instruments.map(instrument => (
                  <span 
                    key={instrument} 
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full"
                  >
                    {instrument}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedItem.name === "Basotho Pony Trekking" && (
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaHorse div className="mr-2 text-brown-600" /> Trekking Regions
              </h3>
              <div className="flex space-x-4">
                {selectedItem.regions.map(region => (
                  <span 
                    key={region} 
                    className="px-3 py-1 bg-brown-100 text-brown-800 rounded-full"
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
  );
};

export default CultureAndTraditions;