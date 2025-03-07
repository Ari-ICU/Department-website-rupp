import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import b1 from '../../../assets/bachelor/b1.png'

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

  const careerPaths = [
    {
      title: 'Software Development',
      image: b1,
    },
    {
      title: 'Data Science and Analytics',
      image: b1,
    },
    {
      title: 'Cybersecurity',
      image: b1,
    },
    {
      title: 'Cloud Computing',
      image: b1,
    },
    {
      title: 'Artificial Intelligence',
      image: b1,
    },
    // Add more career paths here
  ];

  return (
    <div className="my-16 py-4">
    <motion.div
      className="container mx-auto px-4 " // Added padding for smaller screens
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className='flex flex-col xl:flex-row gap-8'>
        {/* Text content */}
        <motion.div
          className="w-full xl:w-1/2 text-center xl:text-left" // Added text-center for smaller screens
          variants={itemVariants}
        >
          <div className="flex flex-col xl:flex-row items-center xl:items-start mb-8"> {/* Adjusted flex direction and item alignment */}
            <div className="mr-6">
              <h2 className="text-2xl xl:text-3xl font-semibold mb-2">Career Paths in</h2> {/* Adjusted font size */}
              <h2 className="text-2xl xl:text-3xl font-semibold">Computer Science</h2> {/* Adjusted font size */}
              <p className="mt-4 text-gray-600">
                Graduates of the Computer Science Undergraduate Program can pursue careers in various fields such as
              </p>
            </div>
            <div className="bg-red-700 text-white p-3 rounded-lg flex items-center justify-center flex-shrink-0 mt-4 xl:mt-0"> {/* Added margin-top for smaller screens */}
              <FaArrowRight className="h-6 w-6" />
            </div>
          </div>
        </motion.div>

        {/* Career paths cards */}
        <motion.div
          className="flex space-x-4 w-full xl:w-1/2 overflow-x-auto snap-x snap-mandatory"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {careerPaths.map((path, index) => (
            <motion.div
              key={index}
              className="snap-start relative w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
            >
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{path.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default CareerPaths;