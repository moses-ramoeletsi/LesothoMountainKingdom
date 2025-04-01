import React, { useState } from 'react';
import { attractions, attractionCategories } from '../data/attractions';
import { Camera, Clock, Map } from 'lucide-react';

const TouristAttractions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAttractions = selectedCategory === "All" 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div 
          className="h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-6 md:mb-8"
          style={{backgroundImage: "url('/images/attractions/hero-background.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3">Discover Lesotho's Attractions</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">Explore the Kingdom in the Sky's Most Stunning Destinations</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="py-4 sm:py-6 md:py-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            <button 
              onClick={() => setSelectedCategory("All")}
              className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded text-sm sm:text-base ${
                selectedCategory === "All" 
                  ? "bg-green-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All Attractions
            </button>
            {attractionCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded text-sm sm:text-base ${
                  selectedCategory === category 
                    ? "bg-green-600 text-white" 
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredAttractions.map(attraction => (
              <div 
                key={attraction.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <img 
                    src={attraction.imageUrl} 
                    alt={attraction.name} 
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl my-text-color-style font-bold mb-2 sm:mb-3 md:mb-4">{attraction.name}</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{attraction.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center text-sm sm:text-base">
                      <Map size={16} className="mr-2 my-secondary-text-color-style flex-shrink-0" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base">
                      <Clock size={16} className="mr-2 my-secondary-text-color-style flex-shrink-0" />
                      <span>Best Time: {attraction.bestTimeToVisit}</span>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <h3 className="font-semibold mb-1 sm:mb-2 flex items-center text-sm sm:text-base">
                      <Camera size={16} className="mr-2 my-secondary-text-color-style flex-shrink-0" /> Activities
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {attraction.activities.map(activity => (
                        <span 
                          key={activity} 
                          className="bg-green-100 my-secondary-text-color-style px-2 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristAttractions;