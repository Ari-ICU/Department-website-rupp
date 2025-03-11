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
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
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
          className="flex flex-wrap justify-center gap-8" // Changed to flex-wrap and gap for better responsiveness
          variants={itemVariants}
        >
          <motion.img
            src="/fauna-flora-logo.png"
            alt="Fauna & Flora International"
            className="h-16"
            variants={itemVariants}
          />
          <motion.img
            src="/aws-logo.png"
            alt="AWS"
            className="h-16"
            variants={itemVariants}
          />
          <motion.img
            src="/cisco-logo.png"
            alt="Cisco"
            className="h-16"
            variants={itemVariants}
          />
          <motion.img
            src="/fortinet-logo.png"
            alt="Fortinet"
            className="h-16"
            variants={itemVariants}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PartnershipSection;