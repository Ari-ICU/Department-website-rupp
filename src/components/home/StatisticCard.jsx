import React from "react";

const StatisticCard = ({ value, rank }) => {
  return (
    <div className=" p-4 shadow-md text-center ">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm font-normal text-gray-500 mt-2">{rank}</div>
    </div>
  );
};

export default StatisticCard;
