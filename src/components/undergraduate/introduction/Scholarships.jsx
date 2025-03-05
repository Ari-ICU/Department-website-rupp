// ScholarshipsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ScholarshipsSection = () => {
  // Variants for the animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <h2 className="text-3xl font-bold mb-8">Scholarships</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {/* Full-Funded Scholarships */}
        <motion.div
          className="bg-white text-red-900 rounded-lg p-6 shadow-md border border-blue-100"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold mb-4">Full-Funded Scholarships</h3>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>
                <strong>Coverage:</strong> Tuition fees, living expenses, accommodation,
                travel costs, and sometimes study materials.
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>
                <strong>Eligibility:</strong> High academic performance, leadership skills,
                community involvement, or financial need.
              </p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>
                <strong>Provided by:</strong> Government-funded scholarships (e.g.,
                Fulbright, Chevening, DAAD), ASEAN, or university partnerships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tuition Fee Scholarships */}
        <motion.div
          className="bg-red-100 rounded-lg p-6 shadow-md border border-red-200"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold mb-4">Tuition Fee Scholarships</h3>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>
                <strong>Coverage:</strong> Only tuition fees; students must cover living
                expenses, books, and other costs.
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>
                <strong>Eligibility:</strong> Based on academic merit, financial need, or
                specific fields of study.
              </p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>
                <strong>Provided by:</strong> RUPP internal scholarships or private
                organization sponsorships.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default ScholarshipsSection;