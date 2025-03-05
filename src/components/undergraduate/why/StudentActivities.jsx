import React from 'react';
import { motion } from 'framer-motion';

const StudentActivities = () => {
  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }, // Added a slight delay
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2
        className="text-3xl font-semibold mb-6"
        variants={itemVariants}
      >
        Student Activities
      </motion.h2>
      <motion.div
        className="flex justify-center"
        variants={itemVariants}
      >
        <img
          src="/aeon-logo.png"
          alt="Aeon 1% Club Foundation"
          className="h-24"
        />
      </motion.div>
    </motion.div>
  );
};

export default StudentActivities;