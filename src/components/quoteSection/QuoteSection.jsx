import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const QuoteSection = () => {
  const quotes = [
    {
      text: "Don't assume you won't qualify! RUPP accepts nearly 200 students each year. You can be one of them!",
    },
  ];

  return (
    <div className="my-16 ">
      <div className='container mx-auto px-4'>
        <div className='p-8'>
          <div className="max-w-2xl text-center relative">
            {/* Top Quote Icon */}
            <FaQuoteLeft className="text-red-500 text-4xl md:text-5xl absolute -top-6 left-4 transform -translate-x-1/2" />

            {/* Quote Text */}
            <p className="text-xl lg:text-3xl ml-14 text-start font-semibold leading-relaxed text-gray-800 ">
              {quotes[0].text}
            </p>

            {/* Bottom Quote Icon */}
            <FaQuoteRight className="text-red-500 text-4xl md:text-5xl absolute -bottom-6 right-0 transform -translate-x-1/2" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuoteSection;
