// LocationSearch.js
import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';

const LocationSearch = ({ location, onLocationChange, loading }) => {
  const [searchValue, setSearchValue] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onLocationChange(searchValue);
      setSearchValue('');
    }
  };
 
  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a city or country..."
          className="w-full py-2 sm:py-3 pl-10 sm:pl-12 pr-20 sm:pr-24 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3">
          {loading ? (
            <Loader className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-1 sm:py-2 px-2 sm:px-4 text-sm sm:text-base rounded-md hover:bg-blue-600 transition"
        disabled={loading}
      >
        Search
      </button>
    </form>
  );
};

export default LocationSearch;