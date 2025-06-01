import React from "react";
import { MdComputer, MdExplore } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../../assets/research/2.png";
import image1 from "../../assets/research/3.png";
import image2 from "../../assets/research/4.png";
import { useTranslation } from "react-i18next";

const researchData = [
  {
    id: 1,
    title: "Advancing Computer Repair Frontiers:",
    subtitle: "Innovations and Challenges in Modern Technology Maintenance",
    description:
      "Exploring Innovative Diagnostic Techniques, Emerging Repair Technologies, and Advanced Troubleshooting Methods to Enhance Efficiency, Reliability, and Longevity in Modern Digital Devices.",
    image: image,
    buttons: [
      { icon: <MdComputer className="mr-2" />, text: "Computational Advancements" },
      { icon: <AiOutlineRobot className="mr-2" />, text: "AI & Systems Optimization" },
    ],
    exploreText: "Explore",
  },
];

const bottomSections = [
  {
    id: 2,
    title: "Revolutionizing Digital Infrastructure Maintenance",
    description:
      "Investigating the Role of Network Diagnostics, Cloud-Based Repair Tools, and Remote Assistance in Shaping the Future of Efficient Computer Repair, Data Recovery, and System Optimization.",
    image: image1,
  },
  {
    id: 3,
    title: "Exploring the Intersection of Data, Systems, and Smart Technologies",
    description:
      "Investigating the Role of Network Diagnostics, Cloud-Based Repair Tools, and Remote Assistance in Shaping the Future of Efficient Computer Repair, Data Recovery, and System Optimization.",
    image: image2,
  },
];

const buttons = [
  { icon: <MdComputer className="mr-2" />, label: "Computational Advancements" },
  { icon: <AiOutlineRobot className="mr-2" />, label: "AI & Systems Optimization" },
];

const ResearchInnovations = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="my-8 sm:my-12 lg:my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 sm:mb-8 ${
            currentLanguage === "km" ? "font-khmer" : "font-semibold"
          }`}
          lang={currentLanguage}
        >
          {t("Research.Research & Innovations")}
        </h1>

        {researchData.map((item) => (
          <motion.div
            key={item.id}
            id={`research-item-${item.id}`}
            className="bg-black rounded-3xl w-full flex flex-col lg:flex-row items-center mx-auto overflow-hidden mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 px-4 py-6 sm:p-8 w-full items-center justify-between">
              <div className="w-full lg:w-1/2 flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-xl shadow-md aspect-[4/3] sm:aspect-[16/9]"
                />
              </div>

              <div className="w-full lg:w-1/2 text-left text-white">
                <motion.h1
                  className={`text-base sm:text-lg lg:text-xl font-normal mb-3 sm:mb-4 uppercase ${
                    currentLanguage === "km" ? "font-khmer" : "font-semibold"
                  }`}
                  lang={currentLanguage}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t(`Research.${item.title}`)}
                </motion.h1>
                <motion.h3
                  className={`text-lg sm:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 ${
                    currentLanguage === "km" ? "font-khmer" : "font-semibold"
                  }`}
                  lang={currentLanguage}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t(`Research.${item.subtitle}`)}
                </motion.h3>
                <motion.p
                  className={`text-sm sm:text-base lg:text-lg font-normal mb-4 lg:text-justify ${
                    currentLanguage === "km" ? "font-khmer" : ""
                  }`}
                  lang={currentLanguage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t(`Research.${item.description}`)}
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {item.buttons.map((btn, btnIndex) => (
                    <motion.button
                      key={btnIndex}
                      className={`text-sm sm:text-base flex items-center bg-gray-900/50 px-3 sm:px-4 py-2 rounded-3xl gap-1 font-normal ${
                        currentLanguage === "km" ? "font-khmer" : ""
                      }`}
                      lang={currentLanguage}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * btnIndex }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {btn.icon}
                      {t(`Research.${btn.text}`)}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-4">
                  <motion.button
                    id={`${item.id}`}
                    className={`text-sm sm:text-base bg-red-900 hover:bg-red-800 text-white py-2 px-4 sm:px-6 rounded-3xl flex items-center font-normal ${
                      currentLanguage === "km" ? "font-khmer" : ""
                    }`}
                    lang={currentLanguage}
                    onClick={() => navigate(`research/${item.id}`)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <MdExplore className="mr-2" />
                    {t(`Academics.${item.exploreText}`)}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {bottomSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group h-[400px] sm:h-[450px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white">
                <div className="flex flex-col gap-2 items-end">
                  {buttons.map((button, btnIndex) => (
                    <motion.button
                      key={btnIndex}
                      className={`text-xs sm:text-sm flex items-center bg-gray-900/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-3xl font-normal ${
                        currentLanguage === "km" ? "font-khmer" : ""
                      }`}
                      lang={currentLanguage}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * btnIndex }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {button.icon}
                      {t(`Research.${button.label}`)}
                    </motion.button>
                  ))}
                </div>
                <div>
                  <motion.h3
                    className={`text-base sm:text-lg lg:text-xl font-normal mb-3 sm:mb-4 ${
                      currentLanguage === "km" ? "font-khmer" : ""
                    }`}
                    lang={currentLanguage}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {t(`Research.${section.title}`)}
                  </motion.h3>
                  <motion.p
                    className={`text-xs sm:text-sm lg:text-base font-normal mb-4 sm:block hidden ${
                      currentLanguage === "km" ? "font-khmer" : ""
                    }`}
                    lang={currentLanguage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {t(`Research.${section.description}`)}
                  </motion.p>
                  <motion.button
                    onClick={() => navigate(`research/${section.id}`)}
                    className={`text-sm sm:text-base bg-red-900 hover:bg-red-800 text-white py-2 px-4 sm:px-6 rounded-3xl flex items-center font-normal ${
                      currentLanguage === "km" ? "font-khmer" : ""
                    }`}
                    lang={currentLanguage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <MdExplore className="mr-2" />
                    {t(`Academics.Explore`)}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchInnovations;