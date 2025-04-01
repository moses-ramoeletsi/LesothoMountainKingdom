import React from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import { Compass } from "lucide-react";

const CurrencyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero section with responsive height and padding */}
        <div
          className="h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
          style={{
            backgroundImage: "url('/images/community/contact-hero.jpg')",
          }}
        >
          <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">Currency Converter</h1>
            <p className="text-sm sm:text-base md:text-lg">
              Convert between multiple world currencies with our easy-to-use
              tool.
            </p>
          </div>
        </div>

        {/* Currency converter component */}
        <div className="max-w-lg mx-auto">
          <CurrencyConverter />
        </div>

        {/* Additional information - responsive grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl my-text-color-style font-semibold mb-2 sm:mb-3">
              About Our Rates
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Our exchange rates are updated regularly to reflect market
              conditions. For the most accurate rates for large transactions,
              please consult with a financial institution.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl my-text-color-style font-semibold mb-2 sm:mb-3">
              Popular Conversions
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
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
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl my-text-color-style font-semibold mb-2 sm:mb-3">
              Currency News
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              The South African Rand (ZAR) and Lesotho Loti (LSL) maintain
              parity as part of the Common Monetary Area agreement.
            </p>
            <a
              href="#"
              className="text-sm sm:text-base my-secondary-text-color-style hover:underline inline-flex items-center"
            >
              Read more
              <Compass className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;