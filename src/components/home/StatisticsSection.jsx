import React from "react";
import StatisticCard from "./StatisticCard";

const StatisticsSection = () => {
    const stats = [
        { value:  "2,000" , rank: "students" },
        { value: 50, rank: "increase enrollment" },
        { value: "No.1",  rank: "university" },
    ];

    return (
        <div className="py-10 px-10">
            <div className="max-w-[1000px] mx-auto rounded-3xl bg-red-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
