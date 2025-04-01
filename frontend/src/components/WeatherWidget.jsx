import React from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, Wind, Droplets } from 'lucide-react';

const WeatherWidget = ({ weather, location, units, onToggleUnits }) => {
  const getWeatherIcon = () => {
    const condition = weather.condition.toLowerCase();
    if (condition.includes('snow')) return <CloudSnow size={36} className="text-gray-400 sm:w-12 sm:h-12" />;
    if (condition.includes('rain')) return <CloudRain size={36} className="text-blue-400 sm:w-12 sm:h-12" />;
    if (condition.includes('cloud')) return <Cloud size={36} className="text-gray-300 sm:w-12 sm:h-12" />;
    return <Sun size={36} className="text-yellow-400 sm:w-12 sm:h-12" />;
  };
 
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-gray-800 h-full">
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold truncate mr-2">{location}</h2>
        <button
          onClick={onToggleUnits}
          className="px-2 sm:px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-md transition text-sm sm:text-base whitespace-nowrap"
        >
          °{units === 'celsius' ? 'C' : 'F'}
        </button>
      </div>
     
      <div className="flex items-center justify-between mt-4 sm:mt-6">
        <div className="text-4xl sm:text-6xl font-bold">{weather.temperature}°{units === 'celsius' ? 'C' : 'F'}</div>
        <div>{getWeatherIcon()}</div>
      </div>
     
      <div className="mt-4 sm:mt-6">
        <p className="text-base sm:text-lg font-semibold">{weather.condition}</p>
        <p className="text-xs sm:text-sm text-gray-600">Feels like: {weather.feelsLike}°{units === 'celsius' ? 'C' : 'F'}</p>
      </div>
     
      <div className="flex justify-between mt-4 sm:mt-6">
        <div className="flex items-center">
          <Droplets className="text-blue-500 mr-1 sm:mr-2" size={16} />
          <span className="text-xs sm:text-sm">{weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind className="text-gray-500 mr-1 sm:mr-2" size={16} />
          <span className="text-xs sm:text-sm">{weather.windSpeed} {units === 'celsius' ? 'km/h' : 'mph'}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;