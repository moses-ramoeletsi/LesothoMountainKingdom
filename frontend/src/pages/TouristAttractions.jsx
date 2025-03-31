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
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{backgroundImage: "url('/images/attractions/hero-background.jpg')"}}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Discover Lesotho's Attractions</h1>
          <p className="text-xl">Explore the Kingdom in the Sky's Most Stunning Destinations</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded ${
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
              className={`px-4 py-2 rounded ${
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
        <div className="grid md:grid-cols-3 gap-8">
          {filteredAttractions.map(attraction => (
            <div 
              key={attraction.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <img 
                src={attraction.imageUrl} 
                alt={attraction.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl my-text-color-style font-bold mb-4">{attraction.name}</h2>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Map className="mr-2 my-secondary-text-color-style" />
                    <span>{attraction.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 my-secondary-text-color-style" />
                    <span>Best Time: {attraction.bestTimeToVisit}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Camera className="mr-2 my-secondary-text-color-style" /> Activities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {attraction.activities.map(activity => (
                      <span 
                        key={activity} 
                        className="bg-green-100 my-secondary-text-color-style px-2 py-1 rounded-full text-sm"
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
  );
};

export default TouristAttractions;
