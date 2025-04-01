import React, { useState, useEffect } from 'react';
import { RefreshCcw, ArrowLeftRight } from 'lucide-react';

// Currency converter component with all functionality
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('LSL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // List of currencies
  const currencies = {
    LSL: "Lesotho Loti",
    ZAR: "South African Rand",
    USD: "US Dollar",
    EUR: "Euro",
    GBP: "British Pound",
    JPY: "Japanese Yen",
    CNY: "Chinese Yuan",
    INR: "Indian Rupee",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc"
  };

  // Base exchange rates relative to USD (as of March 2025)
  // In a real app, these would come from an API
  const baseRates = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.78,
    JPY: 153.25,
    CNY: 7.23,
    INR: 83.45,
    AUD: 1.52,
    CAD: 1.36,
    CHF: 0.90,
    LSL: 18.50,
    ZAR: 18.48
  };

  // Function to get current exchange rate between two currencies
  const getExchangeRate = (from, to) => {
    // Convert from source currency to USD, then from USD to target currency
    const fromToUSD = 1 / baseRates[from];
    const usdToTarget = baseRates[to];
    return fromToUSD * usdToTarget;
  };

  // Update exchange rate when currencies change
  useEffect(() => {
    setLoading(true);
    try {
      const rate = getExchangeRate(fromCurrency, toCurrency);
      setExchangeRate(rate);
      setLastUpdated(new Date().toLocaleString());
      setError(null);
    } catch (err) {
      setError("Failed to get exchange rate");
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency]);

  // Convert currency based on current rate
  const convertCurrency = () => {
    if (!exchangeRate) return "...";
    return (amount * exchangeRate).toFixed(2);
  };

  // Swap currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Format amount input to handle potential errors
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || value > 0) {
      setAmount(value);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200 p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl my-text-color-style font-bold mb-3 sm:mb-4 text-center">Currency Converter</h2>
      
      {/* Amount input */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full p-2 sm:p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
          min="0"
        />
      </div>
      
      {/* Currency selection - responsive layout */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
        <div className="w-full sm:flex-1">
          <label className="block text-xs sm:text-sm font-medium mb-1">From</label>
          <select 
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 sm:p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={`from-${code}`} value={code}>
                {code} ({name})
              </option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={handleSwap}
          className="my-2 sm:mx-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
          aria-label="Swap currencies"
        >
          <ArrowLeftRight size={20} />
        </button>
        
        <div className="w-full sm:flex-1">
          <label className="block text-xs sm:text-sm font-medium mb-1">To</label>
          <select 
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 sm:p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={`to-${code}`} value={code}>
                {code} ({name})
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Result display */}
      <div className="bg-white p-3 sm:p-4 rounded-md shadow-sm mb-3 sm:mb-4">
        {loading ? (
          <div className="flex justify-center">
            <RefreshCcw className="animate-spin" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center text-sm sm:text-base">{error}</div>
        ) : (
          <div className="text-center">
            <div className="text-base sm:text-lg my-secondary-text-color-style font-bold">
              {amount} {fromCurrency} = {convertCurrency()} {toCurrency}
            </div>
            <div className="text-xs sm:text-sm my-secondary-text-color-style">
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </div>
          </div>
        )}
      </div>
      
      {/* Exchange rate info */}
      <div className="text-xs text-center text-gray-600">
        <div className="flex items-center justify-center">
          <RefreshCcw size={12} className="mr-1" />
          <span>Last updated: {lastUpdated || "Never"}</span>
        </div>
        <div className="mt-1">
          Exchange rates are for demonstration purposes.
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;