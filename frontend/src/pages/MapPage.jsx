import React from 'react';
import InteractiveMap from '../components/InteractiveMap';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div 
          className="h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-6 md:mb-8"
        >
          <div className="text-center bg-black bg-opacity-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3">Discover Lesotho</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">Explore the Mountain Kingdom's most beautiful attractions</p>
          </div>
        </div>
        
        <main className="px-0 py-4 sm:py-6">
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Interactive Map</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
              Click on markers to discover information about Lesotho's top attractions. From majestic waterfalls to 
              historical sites, explore the diversity of this beautiful mountain kingdom.
            </p>
            
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <InteractiveMap />
              </div>
              <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500">
                <p>Map data © OpenStreetMap contributors</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-3">About Lesotho</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Lesotho, officially the Kingdom of Lesotho, is a landlocked country surrounded entirely by South Africa. 
                Known as the "Kingdom in the Sky," Lesotho has the highest lowest point of any country in the world, 
                with its entire territory over 1,400 meters above sea level.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-3">Plan Your Visit</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                The best time to visit Lesotho is during the dry season from May to September, offering mild temperatures 
                and clear skies. Winter (June-August) brings snow to the highlands, perfect for skiing at Afriski Resort.
              </p>
              <a 
                href="#" 
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 text-sm sm:text-base rounded transition duration-150"
              >
                Learn More About Travel
              </a>
            </div>
          </section>
          
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Featured Attractions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Maletsunyane Falls",
                  description: "One of Africa's highest single-drop waterfalls (192m), offering breathtaking views and adventure activities including the world's longest commercial abseil.",
                  image: "/maletsunyane-falls.jpg"
                },
                {
                  name: "Thaba-Bosiu",
                  description: "The mountain fortress that protected King Moshoeshoe I and his people, considered the birthplace of the Basotho nation and a site of great historical significance.",
                  image: "/thaba-bosiu.jpg"
                },
                {
                  name: "Katse Dam",
                  description: "Africa's second-largest double-curvature arch dam, an engineering marvel that provides water to South Africa and electricity to Lesotho.",
                  image: "/katse-dam.jpg"
                }
              ].map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="h-36 sm:h-40 md:h-48 bg-gray-200 flex items-center justify-center">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt={attraction.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 sm:p-4 flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-green-700 mb-1 sm:mb-2">{attraction.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MapPage;