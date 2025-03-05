import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; 

const CareerPaths = () => {
  // Motion variants for animation
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
      <div className="flex items-start mb-8">
        <motion.div
          className="flex-shrink-0 mr-6"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-2">Career Paths in</h2>
          <h2 className="text-3xl font-semibold">Computer Science</h2>
          <p className="mt-4 text-gray-600">
            Graduates of the Computer Science Undergraduate Program can pursue careers in various fields such as
          </p>
        </motion.div>
        <motion.div
          className="bg-red-700 text-white p-3 rounded-lg flex items-center justify-center flex-shrink-0"
          variants={itemVariants}
        >
          <FaArrowRight className="h-6 w-6" /> {/* Use FaArrowRight from react-icons */}
        </motion.div>
      </div>

      <motion.div
        className="flex space-x-4 overflow-x-auto"
        variants={containerVariants}
      >
        {/* Software Development Card */}
        <motion.div
          className="relative w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
          variants={itemVariants}
        >
          <img
            src="path/to/software-development-image.jpg"
            alt="Software Development"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-lg font-semibold">Software Development</h3>
          </div>
        </motion.div>

        {/* Data Science and Analytics Card */}
        <motion.div
          className="relative w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
          variants={itemVariants}
        >
          <img
            src="path/to/data-science-image.jpg"
            alt="Data Science and Analytics"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-lg font-semibold">Data Science and Analytics</h3>
          </div>
        </motion.div>

        {/* Add more cards here as needed */}
      </motion.div>
    </motion.div>
  );
};

export default CareerPaths;