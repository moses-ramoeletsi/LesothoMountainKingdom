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
      <div className="bg-gradient-to-br from-green-100 to-blue-200 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">{industry.name}</h3>
        <p className="text-gray-700 mb-4">{industry.description}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">Key Points</h4>
            <ul className="list-disc list-inside space-y-1">
              {industry.keyPoints.map((point, idx) => (
                <li key={idx} className="text-gray-700">{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Industry Metrics</h4>
            <p className="flex items-center">
              <span className="font-medium mr-2">Annual Growth Rate:</span> 
              <span className="text-green-600 font-semibold">{industry.growthRate}%</span>
            </p>
            <p className="flex items-center">
              <span className="font-medium mr-2">Employment Share:</span> 
              <span className="text-blue-600 font-semibold">{industry.employmentShare}%</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
        Economy & Business Opportunities
      </h1>
      
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <FaIndustry className="text-3xl text-blue-700 mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Major Industries</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {majorIndustries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndustry(industry)}
              className={`text-left p-4 rounded-lg transition-all ${
                selectedIndustry === industry 
                  ? 'bg-blue-700 text-white shadow-lg' 
                  : 'bg-white text-blue-800 shadow hover:shadow-md hover:bg-blue-50'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
              <p className={`text-sm ${selectedIndustry === industry ? 'text-blue-100' : 'text-gray-600'}`}>
                {industry.description.substring(0, 80)}...
              </p>
            </button>
          ))}
        </div>
        
        {renderIndustryDetails(selectedIndustry)}
      </section>
      
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <FaMoneyBillWave className="text-3xl text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Investment Opportunities</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {investmentOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-3">{opportunity.sector}</h3>
              <p className="text-gray-700 mb-3">{opportunity.description}</p>
              <p className="mb-3">
                <span className="font-medium">Potential ROI: </span>
                <span className="text-green-600 font-semibold">{opportunity.potentialROI}</span>
              </p>
              <h4 className="font-medium mb-2">Government Incentives:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {opportunity.governmentIncentives.map((incentive, idx) => (
                  <li key={idx}>{incentive}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <FaChartLine className="text-3xl text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Economic Indicators</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">GDP Growth Rate (%)</h3>
            <div className="h-64 flex items-end">
              {economicIndicators.gdpGrowth.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-4/5 bg-blue-500 rounded-t transition-all hover:bg-blue-600"
                    style={{ height: `${item.rate * 10}%` }}
                  ></div>
                  <span className="text-sm mt-2">{item.year}</span>
                  <span className="text-sm font-medium">{item.rate}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Export Revenue (M USD)</h3>
            <div className="h-64 flex items-end">
              {economicIndicators.exportRevenue.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-4/5 bg-green-500 rounded-t transition-all hover:bg-green-600"
                    style={{ height: `${(item.value / 1300) * 100}%` }}
                  ></div>
                  <span className="text-sm mt-2">{item.year}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="flex items-center mb-6">
          <FaHandshake className="text-3xl text-amber-600 mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Entrepreneurship Resources</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {entrepreneurshipResources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">{resource.name}</h3>
              <p className="text-gray-700 mb-3">{resource.description}</p>
              <h4 className="font-medium mb-2">Services:</h4>
              <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
                {resource.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
              <div className="text-sm text-gray-600">
                <p className="mb-1"><strong>Website:</strong> {resource.website}</p>
                <p><strong>Contact:</strong> {resource.contact}</p>
              </div>
              <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn More <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EconomyAndBusiness;