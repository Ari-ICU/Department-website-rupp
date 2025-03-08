import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const TypeScholar = () => {
  // Scholarship data with different colors for each type
  const scholarships = [
    {
      type: 'Full-Funded Scholarships',
      coverage: 'Tuition fees, living expenses, accommodation, travel costs, and sometimes study materials.',
      eligibility: 'High academic performance, leadership skills, community involvement, or financial need.',
      provider: 'Government-funded scholarships (e.g., Fulbright, Chevening, DAAD), ASEAN, or university partnerships.',
      bgColor: 'bg-gray-50 text-white', // Red background for this scholarship
    },
    {
      type: 'Tuition Fee Scholarships',
      coverage: 'Only tuition fees; students must cover living expenses, books, and other costs.',
      eligibility: 'Based on academic merit, financial need, or specific fields of study.',
      provider: 'RUPP internal scholarships or private organization sponsorships.',
      bgColor: 'bg-red-900 text-white', // Blue background for this scholarship
    },
    {
      type: 'Merit-Based Scholarships',
      coverage: 'Only tuition fees; students must cover living expenses, books, and other costs.',
      eligibility: 'Based on academic merit, financial need, or specific fields of study.',
      provider: 'RUPP internal scholarships or private organization sponsorships.',
      bgColor: 'bg-gray-50 text-white', // Green background for this scholarship
    },
    {
      type: 'Partial Scholarships',
      coverage: 'Tuition fees, living expenses, accommodation, travel costs, and sometimes study materials.',
      eligibility: 'High academic performance, leadership skills, community involvement, or financial need.',
      provider: 'Government-funded scholarships (e.g., Fulbright, Chevening, DAAD), ASEAN, or university partnerships.',
      bgColor: 'bg-red-900 text-white', // Yellow background for this scholarship
    }
  ];

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
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={index}
            className={`rounded-lg p-6 shadow-md border ${scholarship.bgColor}`}
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4">{scholarship.type}</h3>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                <p>
                  <strong>Coverage:</strong> {scholarship.coverage}
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                <p>
                  <strong>Eligibility:</strong> {scholarship.eligibility}
                </p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <p>
                  <strong>Provided by:</strong> {scholarship.provider}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TypeScholar;
