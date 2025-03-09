import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const QuoteSection = () => {
  const quotes = [
    {
      text: "Don't assume you won't qualify! RUPP accepts nearly 200 students each year. You can be one of them!",
    },
    // Add more quotes here if needed
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        {quotes.map((quote, index) => (
          <div key={index} className="inline-block bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <FaQuoteLeft className="text-red-500 text-2xl mr-2" />
              <p className="text-lg font-semibold">{quote.text}</p>
              <FaQuoteRight className="text-red-500 text-2xl ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteSection;