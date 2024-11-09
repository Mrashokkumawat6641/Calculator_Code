// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-600 font-bold duration-500 transition-all">
      <div className='flex text-white text-2xl'>
      Calculator
      </div>
      <div className="bg-gray-900 bg-transparent/20 p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={input}
          placeholder='Use This Calculator'
          readOnly
          required
          className="w-full p-2 text-right border border-gray-300 bg-gray-700 text-white rounded mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((item) => (
            <button
              key={item}
              onClick={() => handleButtonClick(item)}
              className="bg-gray-500 text-white p-4 rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button
              key={item}
              onClick={() => handleButtonClick(item)}
              className="bg-gray-500 text-white p-4 rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button
              key={item}
              onClick={() => handleButtonClick(item)}
              className="bg-gray-500 text-white p-4 rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <button
              key={item}
              onClick={item === '=' ? handleCalculate : () => handleButtonClick(item)}
              className="bg-gray-500 text-white p-4 rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 text-2xl text-white p-4 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;