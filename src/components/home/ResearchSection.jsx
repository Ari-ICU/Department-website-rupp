import React from "react";
import { MdComputer, MdExplore } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; 
import image from "../../assets/research/2.png";
import image1 from "../../assets/research/3.png";
import image2 from "../../assets/research/4.png";
import { useTranslation } from "react-i18next";



const researchData = [
  {
    id: 1,
    title: "Advancing Computer Repair Frontiers:",
    subtitle:
      "Innovations and Challenges in Modern Technology Maintenance",
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
    const { t,i18n } = useTranslation();
             const currentLanguage = i18n.language; 
       

  return (
    <div className="my-16">
      <div className="container mx-auto px-4 ">
      <h1  className={`text-3xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                            lang={currentLanguage}>
       {t("Research.Research & Innovations")}
        </h1>

        {researchData.map((item) => (
          <motion.div
            key={item.id}
            id={`research-item-${item.id}`}
            className="bg-black space-y-0 max-w-8xl rounded-4xl w-full flex flex-col xl:flex-row justify-center items-center mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8 }} // Animation duration
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
          >
            <div className="h-full flex flex-col xl:flex-row gap-10 px-4 py-4 items-center justify-between w-full">
              <div className="xl:max-w-3xl  w-full flex items-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>

              <div className="flex justify-center items-center xl:max-w-3xl w-full text-left">
                <div className="text-white mx-auto">
                  <motion.h1
                    className={`text-lg font-normal mb-4 uppercase ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                    lang={currentLanguage}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                  {t(`Research.${item.title}`)}
                  </motion.h1>
                  <motion.h3
                    className={`text-2xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                    lang={currentLanguage}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {t(`Research.${item.subtitle}`)}
                  </motion.h3>
                  <motion.p
                     className={`text-lg font-normal mb-4 lg:text-justify  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                     lang={currentLanguage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {t(`Research.${item.description}`)}
                  </motion.p>

                  <div className="flex flex-col xl:flex-row justify-start items-start gap-4">
                    {item.buttons.map((btn, btnIndex) => (
                      <motion.button
                        key={btnIndex}
                        className={`text-md flex items-center bg-gray-900/50 px-4 py-2 rounded-3xl gap-1 font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                        lang={currentLanguage}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 * btnIndex }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {btn.icon}
                        {t(`Research.${btn.text}`)}
                      </motion.button>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-start">
                    <motion.button
                      id={`${item.id}`}
                      className={`text-lg bg-red-900 hover:bg-red-800  text-white  py-2 px-6 rounded-4xl flex items-center font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                      lang={currentLanguage}
                      onClick={() => navigate(`research/${item.id}`)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <MdExplore className="mr-2" />
                      {t(`Academics.${item.exploreText}`)}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {bottomSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="h-full bg-white rounded-lg shadow-md overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="flex flex-col justify-center gap-2 items-end">
                  {buttons.map((button, btnIndex) => (
                    <motion.button
                      key={btnIndex}
                      className={`sm:text-md text-sm flex items-center bg-gray-900/50 px-4 py-2 rounded-3xl font-normal  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                        lang={currentLanguage}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * btnIndex }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {button.icon}
                     {t(`Research.${button.label}`)}
                    </motion.button>
                  ))}
                </div>
                <div>
                  <motion.h3
                   className={`text-xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                   lang={currentLanguage}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {t(`Research.${section.title}`)}
                  </motion.h3>
                  <motion.p
                     className={`sm:text-lg text-sm font-normal mb-4 lg:text-justify  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                     lang={currentLanguage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {t(`Research.${section.description}`)}
                  </motion.p>
                  <motion.button
                    onClick={() => navigate(`research/${section.id}`)}
                    className={`text-lg bg-red-900 hover:bg-red-800  text-white  py-2 px-6 rounded-4xl flex items-center font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                    lang={currentLanguage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
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