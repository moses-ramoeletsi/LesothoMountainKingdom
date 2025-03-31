import React from 'react'
import { Sun, Cloud, CloudRain, CloudSnow, Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherWidget = ({ weather, location, units, onToggleUnits }) => {
  const getWeatherIcon = () => {
    const condition = weather.condition.toLowerCase();
    if (condition.includes('snow')) return <CloudSnow size={48} className="text-gray-400" />;
    if (condition.includes('rain')) return <CloudRain size={48} className="text-blue-400" />;
    if (condition.includes('cloud')) return <Cloud size={48} className="text-gray-300" />;
    return <Sun size={48} className="text-yellow-400" />;
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{location}</h2>
        <button 
          onClick={onToggleUnits}
          className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-md transition"
        >
          °{units === 'celsius' ? 'C' : 'F'}
        </button>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <div className="text-6xl font-bold">{weather.temperature}°{units === 'celsius' ? 'C' : 'F'}</div>
        <div>{getWeatherIcon()}</div>
      </div>
      
      <div className="mt-6">
        <p className="text-lg font-semibold">{weather.condition}</p>
        <p className="text-gray-600">Feels like: {weather.feelsLike}°{units === 'celsius' ? 'C' : 'F'}</p>
      </div>
      
      <div className="flex justify-between mt-6">
        <div className="flex items-center">
          <Droplets className="text-blue-500 mr-2" size={20} />
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind className="text-gray-500 mr-2" size={20} />
          <span>{weather.windSpeed} {units === 'celsius' ? 'km/h' : 'mph'}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;