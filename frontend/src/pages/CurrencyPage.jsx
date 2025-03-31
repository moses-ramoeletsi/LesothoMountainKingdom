import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';
import { Compass } from 'lucide-react';

const CurrencyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
      {/* Main content */}
        <main className="container mx-auto py-8 px-4">
        <div 
          className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
          style={{backgroundImage: "url('/images/community/contact-hero.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
            <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>
            <p className="text-xl"> Convert between multiple world currencies with our easy-to-use tool.</p>
          </div>
        </div>
            {/* Currency converter component */}
            <CurrencyConverter />

        {/* Additional information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl my-text-color-style font-semibold mb-3">About Our Rates</h3>
            <p className="text-gray-700">
              Our exchange rates are updated regularly to reflect market conditions. 
              For the most accurate rates for large transactions, please consult with a financial institution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl my-text-color-style font-semibold mb-3">Popular Conversions</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>EUR to USD:</span>
                <span className="font-medium">1.08</span>
              </li>
              <li className="flex justify-between">
                <span>GBP to USD:</span>
                <span className="font-medium">1.28</span>
              </li>
              <li className="flex justify-between">
                <span>LSL to ZAR:</span>
                <span className="font-medium">1.00</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl my-text-color-style font-semibold mb-3">Currency News</h3>
            <p className="text-gray-700 mb-2">
              The South African Rand (ZAR) and Lesotho Loti (LSL) maintain parity as part of the Common Monetary Area agreement.
            </p>
            <a href="#" className="my-secondary-text-color-style hover:underline">Read more</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrencyPage;