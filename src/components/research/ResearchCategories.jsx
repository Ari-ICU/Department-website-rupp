import React from 'react';
import { FaRobot, FaNetworkWired, FaGlobe, FaMicrochip } from 'react-icons/fa'; // Import icons

const categories = [
  { name: 'Robotic', icon: <FaRobot className="text-3xl text-gray-700 mb-2" /> },
  { name: 'Networking', icon: <FaNetworkWired className="text-3xl text-gray-700 mb-2" /> },
  { name: 'Web', icon: <FaGlobe className="text-3xl text-gray-700 mb-2" /> },
  { name: 'IoT', icon: <FaMicrochip className="text-3xl text-gray-700 mb-2" /> },
];

const ResearchCategories = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-900">Research links & Categories</h2>
            <p className="text-sm text-gray-500">Click here to find the category you like</p>
          </div>

            <div className='border-l p-6 lg:block hidden'></div>
          <div className="flex items-center space-x-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md transition duration-300">
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCategories;