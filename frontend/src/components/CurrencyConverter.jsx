import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('LSL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(0.054);

  const convertCurrency = () => {
    return (amount * exchangeRate).toFixed(2);
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
      <div className="flex space-x-4 mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select 
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="LSL">LSL (Lesotho Loti)</option>
          <option value="ZAR">ZAR (South African Rand)</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <select 
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="USD">USD (US Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="GBP">GBP (British Pound)</option>
        </select>
        <div className="flex items-center">
          <RefreshCcw className="mr-2" />
          <span>{amount} {fromCurrency} = {convertCurrency()} {toCurrency}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;