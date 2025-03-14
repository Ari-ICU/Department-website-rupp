import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import news from "../../assets/banner/faculty.png";

const DeveloperTeamBanner = () => {
  const title = "Faculty";
  const subtitle =
    "With a strong emphasis on research, hands-on learning, and industry collaboration, we prepare students to tackle real-world challenges and drive technological advancements.";
  const backgroundImage = news;

  return (
    <motion.div
      className="relative w-full h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }} 
    >
      {/* Fixed Overlay using RGBA */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} // 50% opacity
      ></div>

      <div className="relative z-10 lg:max-w-5xl max-w-full px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-xl sm:text-4xl font-bold drop-shadow-md"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 text-[12px] sm:text-xl text-gray-50 drop-shadow-md"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DeveloperTeamBanner;