import React from "react";
import StatisticCard from "./StatisticCard";
import { useTranslation } from "react-i18next";

const StatisticsSection = () => {
    const { t } = useTranslation();

    const stats = [
        { value: "2,000", rank: t("Statistics.students") },
        { value: 50, rank: t("Statistics.increase enrollment") },
        { value: "1st", rank: t("Statistics.university in cambodia") },
    ];

    return (
      <div className="my-16">
          <div className="flex justify-center px-4">
            <div className=" xl:h-[140px] flex p-6 items-center justify-center rounded-3xl bg-red-900">
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
