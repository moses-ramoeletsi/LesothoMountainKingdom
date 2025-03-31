import React from 'react';
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';

const ForecastSection = ({ forecast, units }) => {
  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('snow')) return <CloudSnow className="text-gray-400" />;
    if (conditionLower.includes('rain')) return <CloudRain className="text-blue-400" />;
    if (conditionLower.includes('cloud')) return <Cloud className="text-gray-300" />;
    return <Sun className="text-yellow-400" />;
  };
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">7-Day Forecast</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="font-bold text-gray-700">{day.day}</p>
            <div className="my-4 flex justify-center">
              {getWeatherIcon(day.condition)}
            </div>
            <p className="text-sm text-gray-600">{day.condition}</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="font-semibold">{day.high}°</span>
              <span className="text-gray-500">{day.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;