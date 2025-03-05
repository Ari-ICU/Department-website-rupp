import React from 'react';
import { MdComputer, MdExplore } from 'react-icons/md';
import { AiOutlineRobot } from 'react-icons/ai';
import image from '../../assets/image.png';
import image1 from '../../assets/1.png';

const ResearchInnovations = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Research & Innovations
        </h2>

        {/* Top Section */}
        <div className="bg-black rounded-4xl w-full flex flex-col xl:flex-row justify-center items-center mx-auto overflow-hidden">
          <div className="xl:h-[505px] h-full flex flex-col xl:flex-row gap-10 px-4 py-6 items-center justify-center w-full">

            {/* Image Section */}
            <div className="xl:w-[615px] xl:h-[505px] w-full flex justify-center items-center">
              <img
                src={image}
                alt="Advancing Computer Repair Frontiers"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Content Section */}
            <div className="flex justify-center items-center xl:w-[580px] w-full text-left">
              <div className="text-white mx-auto">
                <h3 className="xl:text-2xl text-lg font-semibold mb-2">
                  Advancing Computer Repair Frontiers:
                </h3>
                <h3 className="xl:text-2xl text-lg font-semibold mb-4">
                  Innovations and Challenges in Modern Technology Maintenance
                </h3>
                <p className="mb-4 xl:text-lg text-[12px]">
                  Exploring Innovative Diagnostic Techniques, Emerging Repair Technologies, and Advanced Troubleshooting Methods to Enhance Efficiency, Reliability, and Longevity in Modern Digital Devices.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-col xl:flex-row justify-start items-start gap-3">
                  <button className="text-white xl:text-[16px] text-[12px] py-2 px-4 shadow-md rounded-4xl flex items-center bg-gray-700 hover:bg-gray-600">
                    <MdComputer className="mr-2" />
                    Computational Advancements
                  </button>
                  <button className="text-white xl:text-[16px] text-[12px] py-2 px-4 shadow-md rounded-4xl flex items-center bg-gray-700 hover:bg-gray-600">
                    <AiOutlineRobot className="mr-2" />
                    AI & Systems Optimization
                  </button>
                </div>

                {/* Explore Button */}
                <div className="mt-4 flex justify-start">
                  <button className="bg-red-900 hover:bg-red-800 text-white py-2 px-6 rounded-4xl flex items-center">
                    <MdExplore className="mr-2" />
                    Explore
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Bottom Left Section */}
          <div className="xl:h-[505px] h-full bg-white rounded-lg shadow-md overflow-hidden relative group">
            <img
              src={image1}
              alt="Revolutionizing Digital Infrastructure Maintenance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white"> {/* Changed to justify-between */}
              <div className="flex flex-col justify-center items-end py-4"> {/* Added padding */}
                <button className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"> {/* Added margin-bottom */}
                  <MdComputer className="mr-2" />
                  Computational Advancements
                </button>
                <button className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center">
                  <AiOutlineRobot className="mr-2" />
                  AI & Systems Optimization
                </button>
              </div>
              <div>
                <h3 className="xl:text-xl text-lg font-semibold mb-2">
                  Revolutionizing Digital Infrastructure Maintenance
                </h3>
                <p className="mb-4 xl:text-[16px] text-[12px]">
                  Investigating the Role of Network Diagnostics, Cloud-Based Repair Tools, and Remote Assistance in Shaping the Future of Efficient Computer Repair, Data Recovery, and System Optimization.
                </p>
                <button className="bg-red-900 hover:bg-red-800 text-white py-2 px-6 rounded-4xl flex items-center">
                  <MdExplore className="mr-2" />
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Right Section */}

          <div className="xl:h-[505px] h-full bg-white rounded-lg shadow-md overflow-hidden relative group">
            <img
              src={image1}
              alt="Revolutionizing Digital Infrastructure Maintenance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white"> {/* Changed to justify-between */}
              <div className="flex flex-col justify-center items-end py-4"> {/* Added padding */}
                <button className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"> {/* Added margin-bottom */}
                  <MdComputer className="mr-2" />
                  Computational Advancements
                </button>
                <button className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center">
                  <AiOutlineRobot className="mr-2" />
                  AI & Systems Optimization
                </button>
              </div>
              <div>
                <h3 className="xl:text-xl text-lg font-semibold mb-2">
                  Exploring the Intersection of Data, Systems, and Smart Technologies
                </h3>
                <p className="mb-4 xl:text-[16px] text-[12px]">
                  Investigating the Role of Network Diagnostics, Cloud-Based Repair Tools, and Remote Assistance in Shaping the Future of Efficient Computer Repair, Data Recovery, and System Optimization.
                </p>
                <button className="bg-red-900 hover:bg-red-800 text-white py-2 px-6 rounded-4xl flex items-center">
                  <MdExplore className="mr-2" />
                  Explore
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInnovations;