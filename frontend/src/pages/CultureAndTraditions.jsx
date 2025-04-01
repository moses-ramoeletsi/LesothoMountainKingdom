import React, { useState, useEffect } from 'react';
import { culturalItems } from '../data/culturalItems';
import { Languages, Music, Menu, X } from 'lucide-react';
import { FaHorse } from 'react-icons/fa';

const CultureAndTraditions = () => {
  const [selectedItem, setSelectedItem] = useState(culturalItems[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive states
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Reset menu state on desktop
      }
    };

    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Hero Section with improved responsive scaling */}
        <div 
          className="h-40 sm:h-56 md:h-72 lg:h-96 bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-4 sm:mb-6 md:mb-8"
          style={{backgroundImage: "url('/images/culture/hero-background.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-3 sm:p-5 md:p-8 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-4">Basotho Culture & Traditions</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">Discover the Rich Heritage of the Kingdom in the Sky</p>
          </div>
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="md:hidden mb-4">
          <button 
            onClick={toggleMenu} 
            className="flex items-center justify-between w-full px-4 py-2 sm:py-3 bg-green-600 text-white rounded-lg shadow transition-colors hover:bg-green-700"
            aria-expanded={menuOpen}
            aria-controls="cultural-menu"
          >
            <span className="font-medium text-sm sm:text-base">
              {menuOpen ? 'Close Menu' : 'Browse Cultural Items'}
            </span>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Main Content Area with Responsive Grid */}
        <div className="relative grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Sidebar Navigation - With mobile overlay optimization */}
          <div 
            id="cultural-menu"
            className={`md:col-span-1 space-y-2 sm:space-y-3 
              ${isMobile ? 
                `fixed inset-0 z-10 bg-green-900 bg-opacity-70 p-4 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}` : 
                'relative'
              }`}
          >
            {isMobile && menuOpen && (
              <div className="bg-white p-4 rounded-lg mb-3 flex justify-between items-center">
                <h2 className="font-bold text-green-800">Cultural Items</h2>
                <button 
                  onClick={toggleMenu}
                  className="p-1 rounded-full hover:bg-gray-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            
            <div className={`space-y-2 ${isMobile ? 'max-h-screen overflow-y-auto bg-white p-3 rounded-lg' : ''}`}>
              {culturalItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedItem(item);
                    if (isMobile) {
                      setMenuOpen(false); // Close menu on selection for mobile
                    }
                  }}
                  className={`w-full text-left p-2 sm:p-3 rounded-lg transition-all ${
                    selectedItem.id === item.id 
                      ? "bg-green-600 text-white" 
                      : "bg-white text-gray-800 hover:bg-green-100"
                  }`}
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">{item.name}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Detail View - Optimized for all screen sizes */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-3 sm:p-5 md:p-6">
            {selectedItem.imageUrl && (
              <div className="w-full h-36 sm:h-48 md:h-64 lg:h-80 mb-3 sm:mb-4 md:mb-6 overflow-hidden rounded-lg">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-green-800">{selectedItem.name}</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">{selectedItem.description}</p>

            {/* Conditional Rendering with improved responsiveness */}
            {selectedItem.name === "Basotho Blanket" && (
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Colors and Patterns</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedItem.colors.map(color => (
                    <span 
                      key={color} 
                      className="px-2 py-1 text-xs sm:text-sm md:text-base bg-blue-100 my-secondary-text-color-style rounded-full"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedItem.name === "Sesotho Language" && (
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 flex items-center">
                  <Languages className="mr-2 my-secondary-text-color-style" size={isMobile ? 16 : 20} /> 
                  Common Phrases
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {selectedItem.commonPhrases.map(phrase => (
                    <div 
                      key={phrase.phrase} 
                      className="bg-green-100 p-2 sm:p-3 rounded-lg"
                    >
                      <p className="font-bold text-xs sm:text-sm md:text-base">{phrase.phrase}</p>
                      <p className="text-xs md:text-sm text-gray-600">Meaning: {phrase.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedItem.name === "Famo Music" && (
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 flex items-center">
                  <Music className="mr-2 my-secondary-text-color-style" size={isMobile ? 16 : 20} /> 
                  Musical Elements
                </h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedItem.instruments.map(instrument => (
                    <span 
                      key={instrument} 
                      className="px-2 py-1 text-xs sm:text-sm md:text-base bg-red-100 my-secondary-text-color-style rounded-full"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedItem.name === "Basotho Pony Trekking" && (
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 flex items-center">
                  <FaHorse className="mr-2 my-secondary-text-color-style" size={isMobile ? 16 : 20} /> 
                  Trekking Regions
                </h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedItem.regions.map(region => (
                    <span 
                      key={region} 
                      className="px-2 py-1 text-xs sm:text-sm md:text-base bg-amber-100 my-secondary-text-color-style rounded-full"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureAndTraditions;