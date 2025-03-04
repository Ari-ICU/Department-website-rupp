import React from "react";

const StatisticCard = ({ value, rank }) => {
  return (
    <div className=" xl:block justify-center gap-10 p-4 text-center text-3xl  ">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-md font-normal text-xl text-gray-300 mt-2">{rank}</div>
    </div>
  );
};

export default StatisticCard;
