import React from 'react';
import { FaCalendarAlt, FaListUl } from 'react-icons/fa';

const ScholarsDetails = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        {/* Left Side: Title and Details */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">About Our Scholarship</h2>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaCalendarAlt className="text-xl mr-3" />
              <div>
                <p className="font-semibold">Deadline: 31 March 2025</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaListUl className="text-xl mr-3" />
              <div>
                <p className="font-semibold">Given Subjects: All</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg text-gray-700">
            Uri Bank is offering bachelor's degree scholarships for students currently studying at the Royal University of Phnom Penh (RUPP) for the 2024-2025 academic year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScholarsDetails;