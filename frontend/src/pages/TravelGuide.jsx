import React, { useState } from 'react';
import { MapPin, Plane, Car, Clock, CreditCard, Sun } from 'lucide-react';

const TravelGuidePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Travel Guide Overview',
      content: (
        <div className="p-6 bg-white from-green-100 to-blue-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold my-text-color-style mb-4">Welcome to Lesotho Travel Guide</h2>
          <p className="mb-4">
            Lesotho, known as the Kingdom in the Sky, offers a unique travel experience with its stunning 
            mountain landscapes, rich cultural heritage, and adventure opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <MapPin className="my-secondary-text-color-style mb-4" />
              <h3 className=" my-text-color-style font-semibold">Geographical Highlights</h3>
              <p>Highest country in the world, entirely above 1,000 meters</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <Sun className="my-secondary-text-color-style mb-4" />
              <h3 className=" my-text-color-style font-semibold">Climate</h3>
              <p>Temperate with clear, sunny days and cold nights</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <Clock className="my-secondary-text-color-style mb-4" />
              <h3 className="my-text-color-style font-semibold">Best Time to Visit</h3>
              <p>Summer (December-February) for landscapes, Winter (June-August) for snow activities</p>
            </div>
          </div>
        </div>
      )
    },
    transportation: {
      title: 'Transportation Guide',
      content: (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold my-text-color-style mb-4">Getting Around Lesotho</h2>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <Plane className="mr-4 my-secondary-text-color-style" />
              <div>
                <h3 className="my-text-color-style font-semibold">Airports</h3>
                <p>Moshoeshoe I International Airport in Maseru, main entry point</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <Car className="mr-4 my-secondary-text-color-style" />
              <div>
                <h3 className="my-text-color-style font-semibold">Road Travel</h3>
                <p>4x4 vehicles recommended due to mountainous terrain</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <CreditCard className="mr-4 my-secondary-text-color-style" />
              <div>
                <h3 className="my-text-color-style font-semibold">Border Crossings</h3>
                <p>Primarily with South Africa, major crossings at Maseru Bridge and Sani Pass</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    visaInfo: {
      title: 'Visa & Entry Requirements',
      content: (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold my-text-color-style mb-4">Visa Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="my-text-color-style font-semibold mb-2">Visa-Free Entry</h3>
              <ul className="list-disc list-inside">
                <li>Many African countries</li>
                <li>Some European and Commonwealth countries</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="my-text-color-style font-semibold mb-2">Required Documents</h3>
              <ul className="list-disc list-inside">
                <li>Valid Passport</li>
                <li>Proof of Accommodation</li>
                <li>Return Ticket</li>
                <li>Sufficient Funds</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className=" min-h-screen  bg-gradient-to-br from-green-100 to-blue-200" >
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{backgroundImage: "url('/images/travel/guide-hero.jpg')"}}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Lesotho Travel Guide</h1>
          <p className="text-xl">Navigate the Mountain Kingdom Like a Local</p>
        </div>
      </div>
      <div className="container mx-auto py-8">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 mr-2 rounded ${
              activeSection === key 
                ? 'my-green-color-style text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setActiveSection(key)}
          >
            {sections[key].title}
          </button>
        ))}
      </div>
      <div className="container mx-auto py-8">
        {sections[activeSection].content}
      </div>
    </div>
  );
};

export default TravelGuidePage;
