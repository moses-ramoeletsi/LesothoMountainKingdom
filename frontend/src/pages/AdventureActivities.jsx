import React, { useState } from 'react';
import { adventureActivities, difficultyLevels } from '../data/adventureActivities';
import { Car, Mountain, Snowflake } from 'lucide-react';
import { FaMountain, FaHorse } from 'react-icons/fa';

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
      <div className=" mx-auto px-4 sm:px-6 py-6">
      <div 
          className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
          style={{backgroundImage: "url('/images/adventure/hero-background.jpg')"}}
      >
          <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Adventure in the Kingdom in the Sky</h1>
          <p className="text-base sm:text-lg md:text-xl">Explore Lesotho's Thrilling Outdoor Experiences</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Difficulty Filter - Improved mobile layout */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <button 
            onClick={() => setSelectedDifficulty("All")}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base ${
              selectedDifficulty === "All" 
                ? "bg-green-600 text-white" 
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All Activities
          </button>
          <div className="py-4 sm:py-6 overflow-x-auto scrollbar-hide">
            <div className='flex flex-nowrap min-w-max sm:flex-wrap'>
              {difficultyLevels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(level)}
                  className={`px-3 sm:px-4 py-2 mr-2 mb-2 rounded text-sm sm:text-base whitespace-nowrap ${
                    selectedDifficulty === level 
                      ? 'my-green-color-style text-white rounded-t-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 rounded-t-lg'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content grid - Responsive columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Activities List - Horizontal scrolling on small screens, vertical on large */}
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 lg:gap-4">
              {filteredActivities.map(activity => {
                const ActivityIcon = activityIcons[activity.name];
                return (
                  <button
                    key={activity.id}
                    onClick={() => setActiveActivity(activity)}
                    className={`flex-shrink-0 lg:flex-shrink lg:w-full text-left p-3 sm:p-4 rounded-lg flex items-center transition-all ${
                      activeActivity.id === activity.id 
                        ? "bg-green-600 text-white" 
                        : "bg-white text-gray-800 hover:bg-green-100"
                    }`}
                    style={{minWidth: "180px"}}
                  >
                    {ActivityIcon && <ActivityIcon className="mr-3 text-xl sm:text-2xl" />}
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold">{activity.name}</h3>
                      <p className="text-xs sm:text-sm">{activity.difficulty} Difficulty</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Activity Details - Full width on mobile, 2/3 on large screens */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <img 
              src={activeActivity.imageUrl} 
              alt={activeActivity.name} 
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg mb-4 sm:mb-6"
            />
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-green-800">{activeActivity.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{activeActivity.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Details</h3>
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
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
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Locations</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {activeActivity.locations.map(location => (
                    <span 
                      key={location} 
                      className="bg-green-100 my-secondary-text-color-style px-2 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Highlights</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
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
    </div>
  );
};

export default AdventureActivities;