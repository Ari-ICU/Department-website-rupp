import React from "react";
import { useTranslation } from "react-i18next";


const StatisticCard = ({ value, rank }) => {
  const { t,i18n } = useTranslation();
  const currentLanguage = i18n.language; 

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className={`text-2xl text-gray-50 font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                            lang={currentLanguage}>{value}</div>
      <div className={`text-lg text-gray-50 font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                            lang={currentLanguage}>{rank}</div>
    </div>
  );
};

export default StatisticCard;