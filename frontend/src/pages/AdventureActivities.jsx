import React, { useState } from 'react';
import { adventureActivities, difficultyLevels } from '../data/adventureActivities';
import { Car, Mountain, Snowflake } from 'lucide-react';
import { 
    FaMountain,
    FaHorse, 
  } from 'react-icons/fa';
const AdventureActivities = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [activeActivity, setActiveActivity] = useState(adventureActivities[0]);

  const filteredActivities = selectedDifficulty === "All"
    ? adventureActivities
    : adventureActivities.filter(activity => activity.difficulty === selectedDifficulty);

  const activityIcons = {
    "Pony Trekking": FaHorse,
    "Mountain Hiking": Mountain,
    "Rock Climbing": FaMountain,
    "Skiing & Snowboarding": Snowflake,
    "4x4 Off-Road Driving": Car
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{backgroundImage: "url('/images/adventure/hero-background.jpg')"}}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Adventure in the Kingdom in the Sky</h1>
          <p className="text-xl">Explore Lesotho's Thrilling Outdoor Experiences</p>
        </div>
      </div>

      <div className="container mx-auto py-12">
        {/* Difficulty Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => setSelectedDifficulty("All")}
            className={`px-4 py-2 rounded ${
              selectedDifficulty === "All" 
                ? "bg-green-600 text-white" 
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All Activities
          </button>
          {difficultyLevels.map(level => (
            <button
              key={level}
              onClick={() => setSelectedDifficulty(level)}
              className={`px-4 py-2 rounded ${
                selectedDifficulty === level 
                  ? "bg-green-600 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Activities List */}
          <div className="md:col-span-1 space-y-4">
            {filteredActivities.map(activity => {
              const ActivityIcon = activityIcons[activity.name];
              return (
                <button
                  key={activity.id}
                  onClick={() => setActiveActivity(activity)}
                  className={`w-full text-left p-4 rounded-lg flex items-center transition-all ${
                    activeActivity.id === activity.id 
                      ? "bg-green-600 text-white" 
                      : "bg-white text-gray-800 hover:bg-green-100"
                  }`}
                >
                  {ActivityIcon && <ActivityIcon className="mr-4 text-2xl" />}
                  <div>
                    <h3 className="text-xl font-semibold">{activity.name}</h3>
                    <p className="text-sm">{activity.difficulty} Difficulty</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Activity Details */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <img 
              src={activeActivity.imageUrl} 
              alt={activeActivity.name} 
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <h2 className="text-3xl font-bold mb-4 text-green-800">{activeActivity.name}</h2>
            <p className="text-gray-600 mb-6">{activeActivity.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Details</h3>
                <div className="space-y-2">
                  <p>
                    <strong>Difficulty:</strong> {activeActivity.difficulty}
                  </p>
                  <p>
                    <strong>Duration:</strong> {activeActivity.duration}
                  </p>
                  <p>
                    <strong>Best Seasons:</strong> {activeActivity.bestSeasons.join(", ")}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {activeActivity.locations.map(location => (
                    <span 
                      key={location} 
                      className="bg-green-100 my-secondary-text-color-style px-2 py-1 rounded-full text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside space-y-2">
                {activeActivity.highlights.map(highlight => (
                  <li key={highlight} className="text-gray-700">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureActivities;
