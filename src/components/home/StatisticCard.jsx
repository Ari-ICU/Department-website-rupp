import React from "react";

const StatisticCard = ({ value, rank }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-2xl font-normal text-gray-300 mt-2">{rank}</div>
    </div>
  );
};

export default StatisticCard;