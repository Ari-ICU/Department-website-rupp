import React from "react";

const StatisticCard = ({ value, rank }) => {
  return (
    <div className=" xl:block justify-center gap-10 text-center text-3xl  ">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="font-normal text-2xl text-gray-300 mt-2">{rank}</div>
    </div>
  );
};

export default StatisticCard;
