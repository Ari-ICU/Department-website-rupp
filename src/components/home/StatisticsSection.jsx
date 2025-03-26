import React from "react";
import StatisticCard from "./StatisticCard";
import { useTranslation } from "react-i18next";

const StatisticsSection = () => {
    const { t } = useTranslation();

    const stats = [
        { value: "2,000", rank: t("Statistics.Students") },
        { value: 50, rank: t("Statistics.Increase Enrollment") },
        { value: "1<sup class='text-md'>st</sup>", rank: t("Statistics.University In Cambodia") },
    ];

    return (
      <div className="my-16">
          <div className="flex justify-center px-4">
            <div className="xl:h-[140px] flex p-6 items-center justify-center rounded-3xl bg-red-900 text-white">
                <div className="xl:max-w-6xl w-auto xl:h-[82px] h-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                    {stats.map((stat, index) => (
                        <StatisticCard
                            key={index}
                            value={<span dangerouslySetInnerHTML={{ __html: stat.value }} />} 
                            percentage={stat.percentage}
                            rank={stat.rank}
                            className="text-center text-lg font-semibold"
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
};

export default StatisticsSection;