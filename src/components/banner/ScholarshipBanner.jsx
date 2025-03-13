import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import scholar from "../../assets/icon/2.png";

const ScholarshipBanner = () => {
  const title = "Scholarship Opportunity";
  const subtitle =
    "Find the right scholarship for you—whether based on academic achievement, financial need, or location.";
  const backgroundImage = scholar;

  return (
    <motion.div
      className="relative w-full h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8 }} // Animation duration
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
    >
      {/* Fixed Overlay using RGBA */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity
      ></div>

      <div className="relative z-10 max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-4xl font-bold drop-shadow-md"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 text-lg sm:text-xl text-gray-50 drop-shadow-md"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ScholarshipBanner;