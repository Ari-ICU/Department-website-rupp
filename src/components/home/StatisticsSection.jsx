import React from "react";
import StatisticCard from "./StatisticCard";

const StatisticsSection = () => {
    const stats = [
        { value: "2,000", rank: "students" },
        { value: 50, rank: "increase enrollment" },
        { value: "No.1", rank: "university" },
    ];

    return (
      <div className="my-16">
          <div className="flex justify-center px-4">
            <div className=" xl:h-[122px] flex p-4 items-center justify-center rounded-3xl bg-red-900">
                <div className="xl:w-[767px] w-auto xl:h-[82px] h-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-6">
                    {stats.map((stat, index) => (
                        <StatisticCard
                            key={index}
                            value={stat.value}
                            percentage={stat.percentage}
                            rank={stat.rank}
                        />
                    ))}
                </div>
            </div>

        </div>
      </div>
    );
};

export default StatisticsSection;
