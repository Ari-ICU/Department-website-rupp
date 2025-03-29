import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoConstructOutline } from "react-icons/io5";
import { GiCrane } from "react-icons/gi";

const UnderConstructionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="items-center flex border-b-4 border-red-800 justify-center gap-2 lg:gap-6 mb-4 lg:mb-8">
        <IoConstructOutline className="text-xl text-red-800 mr-4" /> {/* Build icon */}
        <div className="flex justify-center items-center gap-2 lg:gap-6">
            <span className="text-6xl font-bold ">WEBSITE</span>
       
        </div>
        <GiCrane className="text-9xl text-red-800" /> {/* Crane icon */}
      </div>
      <div className="text-2xl font-semibold mb-4 text-center">Opp! This Page is Under Construction.</div>
      <div className="text-lg text-gray-600 mb-8 text-center">Please Come Back Again Later</div>
      <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
        <FaHome className="inline-block mr-2" />
        Back Home
      </button>
    </div>
  );
};

export default UnderConstructionPage;