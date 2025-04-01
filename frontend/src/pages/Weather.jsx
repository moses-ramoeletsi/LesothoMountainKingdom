import React, { useState, useEffect } from 'react'
import WeatherWidget from '../components/WeatherWidget'
import ForecastSection from '../components/ForecastSection'
import WeatherDetails from '../components/WeatherDetails'
import LocationSearch from '../components/LocationSearch'

const Weather = () => {
  const [location, setLocation] = useState('Maseru, Lesotho');
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 15,
    condition: 'Partly Cloudy',
    humidity: 45,
    windSpeed: 12,
    feelsLike: 13,
    uvIndex: 4,
    visibility: 10,
    pressure: 1015
  });
  
  const [forecast, setForecast] = useState([
    { day: 'Mon', temp: 16, condition: 'Sunny', high: 19, low: 10 },
    { day: 'Tue', temp: 14, condition: 'Cloudy', high: 16, low: 9 },
    { day: 'Wed', temp: 13, condition: 'Rain', high: 15, low: 8 },
    { day: 'Thu', temp: 12, condition: 'Rain', high: 14, low: 7 },
    { day: 'Fri', temp: 14, condition: 'Cloudy', high: 17, low: 9 },
    { day: 'Sat', temp: 16, condition: 'Sunny', high: 20, low: 11 },
    { day: 'Sun', temp: 17, condition: 'Sunny', high: 22, low: 12 },
  ]);
  
  const [units, setUnits] = useState('celsius');
  const [loading, setLoading] = useState(false);
  
  // Mock function to simulate fetching weather data
  const fetchWeatherData = (searchLocation) => {
    setLoading(true);
    // In a real app, this would be an API call
    setTimeout(() => {
      setLocation(searchLocation || location);
      setLoading(false);
    }, 1000);
  };
  
  useEffect(() => {
    fetchWeatherData();
  }, []);
  
  const handleLocationChange = (newLocation) => {
    fetchWeatherData(newLocation);
  };
  
  const toggleUnits = () => {
    if (units === 'celsius') {
      setUnits('fahrenheit');
      // Convert temperatures to Fahrenheit
      setCurrentWeather({
        ...currentWeather,
        temperature: Math.round(currentWeather.temperature * 9/5 + 32),
        feelsLike: Math.round(currentWeather.feelsLike * 9/5 + 32)
      });
      setForecast(forecast.map(day => ({
        ...day,
        temp: Math.round(day.temp * 9/5 + 32),
        high: Math.round(day.high * 9/5 + 32),
        low: Math.round(day.low * 9/5 + 32)
      })));
    } else {
      setUnits('celsius');
      // Convert temperatures to Celsius
      setCurrentWeather({
        ...currentWeather,
        temperature: Math.round((currentWeather.temperature - 32) * 5/9),
        feelsLike: Math.round((currentWeather.feelsLike - 32) * 5/9)
      });
      setForecast(forecast.map(day => ({
        ...day,
        temp: Math.round((day.temp - 32) * 5/9),
        high: Math.round((day.high - 32) * 5/9),
        low: Math.round((day.low - 32) * 5/9)
      })));
    }
  };
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-4 md:p-8'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
            <div 
                className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
                style={{backgroundImage: "url('/images/community/contact-hero.jpg')"}}
                >
                <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Weather Dashboard</h1>
                <p className="text-base sm:text-lg md:text-xl">Real-time weather updates for Lesotho and beyond</p>
                </div>
            </div>
            <div className='max-w-6xl mx-auto'>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8'> 
                <LocationSearch 
                    location={location} 
                    onLocationChange={handleLocationChange} 
                    loading={loading}
                />
                
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
                    <div className='lg:col-span-1'>
                    <WeatherWidget 
                        weather={currentWeather} 
                        location={location} 
                        units={units} 
                        onToggleUnits={toggleUnits} 
                    />
                    </div>
                    
                    <div className='lg:col-span-2'>
                    <WeatherDetails weather={currentWeather} units={units} />
                    </div>
                </div>
            </div>
            
            <ForecastSection forecast={forecast} units={units} />
            </div>
        </div>
    </div>
  )
}

export default Weather;