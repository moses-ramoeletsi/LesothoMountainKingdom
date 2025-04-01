import React, { useState } from 'react';
import { 
  FaIndustry, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaHandshake,
  FaArrowRight
} from 'react-icons/fa';

import { 
  majorIndustries, 
  investmentOpportunities, 
  economicIndicators,
  entrepreneurshipResources 
} from '../data/economyData';

const EconomyAndBusiness = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const renderIndustryDetails = (industry) => {
    if (!industry) return null;
    
    return (
      <div className="container mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold my-text-color-style mb-3 sm:mb-4">{industry.name}</h3>
        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{industry.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-2">Key Points</h4>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              {industry.keyPoints.map((point, idx) => (
                <li key={idx} className="text-gray-700">{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-2 mt-4 md:mt-0">Industry Metrics</h4>
            <p className="flex items-center text-sm sm:text-base">
              <span className="font-medium mr-2">Annual Growth Rate:</span> 
              <span className="my-text-color-style font-semibold">{industry.growthRate}%</span>
            </p>
            <p className="flex items-center text-sm sm:text-base">
              <span className="font-medium mr-2">Employment Share:</span> 
              <span className="my-secondary-text-color-style font-semibold">{industry.employmentShare}%</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200 min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div 
            className="h-48 sm:h-64 md:h-80 lg:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-6 sm:mb-8"
            style={{backgroundImage: "url('/images/economy/business-hero.jpg')"}}
        >
            <div className="text-center bg-black bg-opacity-50 p-3 sm:p-4 md:p-6 lg:p-10 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-4">Economy & Business Opportunities</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">Discover Investment Potential in Lesotho's Growing Markets</p>
            </div>
        </div>
      
        <section className="mb-8 sm:mb-12">
          <div className="container mx-auto flex items-center py-4 sm:py-6">
            <FaIndustry className="text-2xl sm:text-3xl my-secondary-text-color-style mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold my-text-color-style">Major Industries</h2>
          </div>
          
          <div className="container mx-auto py-2 sm:py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {majorIndustries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className={`text-left p-3 sm:p-4 rounded-lg transition-all ${
                  selectedIndustry === industry 
                    ? 'my-text-color-style text-black shadow-lg' 
                    : 'bg-white my-text-color-style shadow hover:shadow-md hover:bg-blue-50'
                }`}
              >
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{industry.name}</h3>
                <p className={`text-xs sm:text-sm ${selectedIndustry === industry ? 'text-blue-100' : 'text-gray-600'}`}>
                  {industry.description.substring(0, 60)}...
                </p>
              </button>
            ))}
          </div>
          
          {renderIndustryDetails(selectedIndustry)}
        </section>
      
        <section className="mb-8 sm:mb-12">
          <div className="container mx-auto flex items-center py-4 sm:py-6">
            <FaMoneyBillWave className="text-2xl sm:text-3xl my-secondary-text-color-style mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold my-text-color-style">Investment Opportunities</h2>
          </div>
          
          <div className="container mx-auto py-3 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {investmentOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold my-text-color-style mb-2 sm:mb-3">{opportunity.sector}</h3>
                <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">{opportunity.description}</p>
                <p className="mb-2 sm:mb-3 text-sm sm:text-base">
                  <span className="font-medium">Potential ROI: </span>
                  <span className="my-text-color-style font-semibold">{opportunity.potentialROI}</span>
                </p>
                <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Government Incentives:</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                  {opportunity.governmentIncentives.map((incentive, idx) => (
                    <li key={idx}>{incentive}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      
        <section className="mb-8 sm:mb-12">
          <div className="container mx-auto flex items-center mb-4 sm:mb-6">
            <FaChartLine className="text-2xl sm:text-3xl my-secondary-text-color-style mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold my-text-color-style">Economic Indicators</h2>
          </div>
          
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold my-text-color-style mb-3 sm:mb-4">GDP Growth Rate (%)</h3>
              <div className="h-48 sm:h-64 flex items-end">
                {economicIndicators.gdpGrowth.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-3/4 sm:w-4/5 bg-blue-500 rounded-t transition-all hover:bg-blue-600"
                      style={{ height: `${item.rate * 10}%` }}
                    ></div>
                    <span className="text-xs sm:text-sm mt-1 sm:mt-2">{item.year}</span>
                    <span className="text-xs sm:text-sm font-medium">{item.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 my-text-color-style">Export Revenue (M USD)</h3>
              <div className="h-48 sm:h-64 flex items-end">
                {economicIndicators.exportRevenue.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-3/4 sm:w-4/5 bg-green-500 rounded-t transition-all hover:bg-green-600"
                      style={{ height: `${(item.value / 1300) * 100}%` }}
                    ></div>
                    <span className="text-xs sm:text-sm mt-1 sm:mt-2">{item.year}</span>
                    <span className="text-xs sm:text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      
        <section className="mb-4 sm:mb-6">
          <div className="container mx-auto py-4 sm:py-6 flex items-center mb-4 sm:mb-6">
            <FaHandshake className="text-2xl sm:text-3xl my-secondary-text-color-style mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold my-text-color-style">Entrepreneurship Resources</h2>
          </div>
          
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {entrepreneurshipResources.map((resource, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold my-text-color-style mb-2 sm:mb-3">{resource.name}</h3>
                <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">{resource.description}</p>
                <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Services:</h4>
                <ul className="list-disc list-inside mb-3 sm:mb-4 text-xs sm:text-sm text-gray-700">
                  {resource.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
                <div className="text-xs sm:text-sm text-gray-600">
                  <p className="mb-1"><strong>Website:</strong> <span className="my-secondary-text-color-style">{resource.website}</span></p>
                  <p><strong>Contact:</strong> {resource.contact}</p>
                </div>
                <button className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm text-secondary-text-color-style hover:text-blue-800 transition-colors">
                  Learn More <FaArrowRight className="ml-1 sm:ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EconomyAndBusiness;