import React from 'react';
import { motion } from 'framer-motion';

const PartnershipSection = () => {
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
      className="bg-white py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="container mx-auto text-center"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-semibold mb-8"
          variants={itemVariants}
        >
          Meet With Our Partnerships
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-12"
          variants={itemVariants}
        >
          <img
            src="/fauna-flora-logo.png"
            alt="Fauna & Flora International"
            className="h-16"
          />
          <img
            src="/aws-logo.png"
            alt="AWS"
            className="h-16"
          />
          <img
            src="/cisco-logo.png"
            alt="Cisco"
            className="h-16"
          />
          <img
            src="/fortinet-logo.png"
            alt="Fortinet"
            className="h-16"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PartnershipSection;