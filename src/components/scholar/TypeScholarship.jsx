import React from 'react';
import { motion } from 'framer-motion';
import { FaSquareCheck } from "react-icons/fa6";

const TypeScholar = () => {
  // Scholarship data with different colors for each type
  const scholarships = [
    {
      type: 'Full-Funded Scholarships',
      coverage: 'Tuition fees, living expenses, accommodation, travel costs, and sometimes study materials.',
      eligibility: 'High academic performance, leadership skills, community involvement, or financial need.',
      provider: 'Government-funded scholarships (e.g., Fulbright, Chevening, DAAD), ASEAN, or university partnerships.',
      bgColor: 'bg-white border-gray-300', // White with gray border
      textColor: 'text-gray-800',
      iconColor: 'text-red-500' // Icon color
    },
    {
      type: 'Merit-Based Scholarships',
      coverage: 'Can be full or partial; usually focused on tuition fees.',
      eligibility: 'Awarded to students with excellent academic records, achievements, or leadership experience.',
      provider: 'High-achiever scholarships from universities or private foundations.',
      bgColor: 'bg-red-800 text-white', // Dark red background
      textColor: 'text-white',
      iconColor: 'text-white' // White icons for contrast
    },
    {
      type: 'Partial Scholarships',
      coverage: 'Covers part of the tuition fee or provides a stipend for living expenses.',
      eligibility: 'Often awarded based on merit or financial need.',
      provider: 'Some university discounts, NGO scholarships, or industry-sponsored programs.',
      bgColor: 'bg-white border-gray-300', // White with blue border
      textColor: 'text-gray-800',
      iconColor: 'text-red-500'
    },
    {
      type: 'Tuition Fee Scholarships',
      coverage: 'Only tuition fees; students must cover living expenses, books, and other costs.',
      eligibility: 'Based on academic merit, financial need, or specific fields of study.',
      provider: 'RUPP internal scholarships or private organization sponsorships.',
      bgColor: 'bg-red-800 text-white', // Dark red background
      textColor: 'text-white',
      iconColor: 'text-white' // White icons for contrast
    },
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
    <div className='my-16'>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="mb-8 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6">
          {/* Title */}
          <h2 className="text-3xl font-bold">Types of Scholarships & Eligibility</h2>

          {/* Description */}
          <p className="text-gray-800 max-w-2xl">
            Empowering Students Through Scholarships: Rewarding Excellence & Supporting Those in Need. Our school is committed to making education accessible to all. Whether you excel in academics, face financial challenges, or come from a remote area, we offer scholarships to help you achieve your dreams.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4"
          variants={containerVariants}
        >
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              className={`rounded-lg p-6 shadow-lg border ${scholarship.bgColor} ${scholarship.textColor}`}
              variants={itemVariants}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{scholarship.type}</h3>

              {/* Content Section */}
              <div className="space-y-6">
                {/* Coverage */}
                <div className="flex items-start space-x-3">
                <div>
                    <FaSquareCheck className={`${scholarship.iconColor} mt-1 text-xl`} />

                  </div>
                  <p className='text-lg'>
                    <strong>Provided by:</strong> {scholarship.provider}
                  </p>
                </div>

                {/* Eligibility */}
                <div className="flex items-start space-x-3">
                <div>
                    <FaSquareCheck className={`${scholarship.iconColor} mt-1 text-xl`} />

                  </div>
                  <p className='text-lg'>
                    <strong>Provided by:</strong> {scholarship.provider}
                  </p>
                </div>

                {/* Provider */}
                <div className="flex items-start space-x-3">
                  <div>
                    <FaSquareCheck className={`${scholarship.iconColor} mt-1 text-xl`} />

                  </div>
                  <p className='text-lg'>
                    <strong>Provided by:</strong> {scholarship.provider}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TypeScholar;
