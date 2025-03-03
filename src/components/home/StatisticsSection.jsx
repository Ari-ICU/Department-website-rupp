import React from "react";
import StatisticCard from "./StatisticCard";

const StatisticsSection = () => {
    const stats = [
        { value: "2,000", rank: "students" },
        { value: 50, rank: "increase enrollment" },
        { value: "No.1", rank: "university" },
    ];

    return (
        <div className="">
            <div className="max-w-[1,036px] h-[162px] flex items-center justify-center rounded-3xl bg-red-900">
                <div className="w-[767px] h-[82px] grid grid-cols-1 xl:grid-cols-3 items-center gap-6">
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
    );
};

export default StatisticsSection;
