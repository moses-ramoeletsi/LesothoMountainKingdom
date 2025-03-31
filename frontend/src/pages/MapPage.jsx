import React from 'react';
import InteractiveMap from '../components/InteractiveMap';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Discover Lesotho</h1>
          <p className="mt-2 text-green-100">Explore the Mountain Kingdom's most beautiful attractions</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Map</h2>
          <p className="text-gray-600 mb-6">
            Click on markers to discover information about Lesotho's top attractions. From majestic waterfalls to 
            historical sites, explore the diversity of this beautiful mountain kingdom.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <InteractiveMap />
            <div className="mt-4 text-sm text-gray-500">
              <p>Map data © OpenStreetMap contributors</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">About Lesotho</h3>
            <p className="text-gray-700">
              Lesotho, officially the Kingdom of Lesotho, is a landlocked country surrounded entirely by South Africa. 
              Known as the "Kingdom in the Sky," Lesotho has the highest lowest point of any country in the world, 
              with its entire territory over 1,400 meters above sea level.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Plan Your Visit</h3>
            <p className="text-gray-700 mb-4">
              The best time to visit Lesotho is during the dry season from May to September, offering mild temperatures 
              and clear skies. Winter (June-August) brings snow to the highlands, perfect for skiing at Afriski Resort.
            </p>
            <a 
              href="#" 
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded transition duration-150"
            >
              Learn More About Travel
            </a>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt={attraction.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default MapPage;