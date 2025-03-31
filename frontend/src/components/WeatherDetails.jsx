import React from 'react';
import { Droplets, Wind, Eye, Sun, Gauge, Thermometer } from 'lucide-react';

const WeatherDetails = ({ weather, units }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 h-full">
      <h3 className="text-xl font-bold mb-4">Weather Details</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Thermometer className="text-red-500 mr-2" size={20} />
            <span className="text-gray-600">Feels Like</span>
          </div>
          <p className="text-xl font-semibold">{weather.feelsLike}°{units === 'celsius' ? 'C' : 'F'}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Droplets className="text-blue-500 mr-2" size={20} />
            <span className="text-gray-600">Humidity</span>
          </div>
          <p className="text-xl font-semibold">{weather.humidity}%</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Wind className="text-gray-500 mr-2" size={20} />
            <span className="text-gray-600">Wind Speed</span>
          </div>
          <p className="text-xl font-semibold">{weather.windSpeed} {units === 'celsius' ? 'km/h' : 'mph'}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Sun className="text-yellow-500 mr-2" size={20} />
            <span className="text-gray-600">UV Index</span>
          </div>
          <p className="text-xl font-semibold">{weather.uvIndex} of 10</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Eye className="text-indigo-500 mr-2" size={20} />
            <span className="text-gray-600">Visibility</span>
          </div>
          <p className="text-xl font-semibold">{weather.visibility} {units === 'celsius' ? 'km' : 'mi'}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Gauge className="text-purple-500 mr-2" size={20} />
            <span className="text-gray-600">Pressure</span>
          </div>
          <p className="text-xl font-semibold">{weather.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;