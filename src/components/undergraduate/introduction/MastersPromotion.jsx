import React from "react";
import { motion } from "framer-motion";

const MastersPromotion = () => {
  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-blue-500 text-white p-12 rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <h2 className="text-3xl font-bold mb-4">
        Unlock Your Future with a Master's Degree
      </h2>
      <p className="mb-6">
        Gain advanced skills in AI, cybersecurity, and software engineering. A
        master's degree in Computer Science opens doors to high-paying jobs,
        leadership roles, and groundbreaking innovation. Take your expertise to
        the next level!
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-white text-red-900 font-bold py-2 px-4 rounded-lg"
      >
        View Detail
      </motion.button>
    </motion.div>
  );
};

export default MastersPromotion;