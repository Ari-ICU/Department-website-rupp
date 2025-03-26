import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import p3 from "../../assets/admission/4.png";
import p4 from "../../assets/admission/7.png";
import { useTranslation } from 'react-i18next';


const AdmissionRequirements = () => {
   const { t, i18n } = useTranslation();
            const currentLanguage = i18n.language;
  const requirements = [
    "High school diploma (or equivalent) with a strong background in mathematics and science.",
    "Proficiency in English (TOEFL/IELTS scores may be required for international students).",
    "Passing entrance exams (if applicable).",
    "Submission of an application, including a statement of purpose and recommendation letters.",
  ];

  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container mx-auto px-4 "
      >
        <div className="xl:h-[479px] h-full flex flex-col xl:flex-row items-center gap-8 py-8 xl:py-0">
          {/* Left Column - Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full xl:w-1/2 lg:h-[479px] mx-auto h-[360px]"
          >
            <div className="relative flex flex-col items-center justify-center ">
              <div className="flex items-center justify-center gap-4 xl:gap-6 w-full">
                {/* Left Image */}
                <div className="h-[200px] w-[150px] lg:h-[347px] lg:w-[265px] transition transform -translate-y-2">
                  <img
                    src={p3}
                    alt=""
                    className="w-full h-full rounded-tl-[100px] object-cover"
                  />
                </div>
                {/* Right Image */}
                <div className="h-[250px] w-[150px] lg:w-[254px] lg:h-[381px] transition transform translate-y-22">
                  <img
                    src={p4}
                    alt=""
                    className="w-full h-full object-cover rounded-tr-[100px]"
                  />
                </div>
              </div>

              {/* SVG Circle */}
              <div className="absolute -bottom-8 xl:-bottom-8 w-[150px] h-[150px] xl:w-[200px] xl:h-[200px]">
                <svg width="100%" height="100%" viewBox="0 0 400 400">
                  <defs>
                    <path
                      id="halfCirclePath"
                      d="M 50,200 a 150,150 0 0,1 300,0"
                    />
                  </defs>
                  <circle cx="200" cy="200" r="180" fill="#A52A2A" />
                  <text
                    font-size="26"
                    fill="white"
                    text-anchor="middle"
                    dy={10}
                    letterSpacing={6}
                  >
                    <textPath href="#halfCirclePath" startOffset="50%">
                      ADMISSION REQUIREMENTS
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full xl:w-1/2 px-4 xl:px-0"
          >
            <p className="mb-4 text-sm xl:text-lg">
              To apply for the Bachelor’s Degree in Computer Science, students
              must meet the following criteria:
            </p>
            <h2  className={`text-3xl font-normal mb-4 py-2 ${currentLanguage === 'km' ? "" : ""}`}
              lang={currentLanguage}>
              Admission Requirements
            </h2>

            <div className="grid grid-cols-1">
              {/* Added grid for responsiveness */}
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="mb-4 flex gap-4 sm:text-justify"
                >
                  <div className="flex items-center justify-center">
                    <div className="border border-red-800 p-2 rounded-4xl mr-2">
                      <FaCheck className="text-red-800" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm xl:text-lg">{requirement}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <button className="bg-red-800 p-2 rounded-3xl px-6 text-white">View course curriculum</button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdmissionRequirements;