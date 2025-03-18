import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import b1 from '../../assets/bachelor/b1.png';

const CareerPaths = () => {
  const navigate = useNavigate();

  // Variants for animations
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
      id: 1,
      title: 'Software Development',
      description: "Software engineering is one of the most sought-after careers",
      date: "22 Aug 2025",
      image: b1,
    },
    {
      id: 2,
      title: 'Data Science and Analytics',
      description: "Software engineering is one of the most sought-after careers",
      date: "22 Aug 2025",
      image: b1,
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: "Software engineering is one of the most sought-after careers",
      date: "22 Aug 2025",
      image: b1,
    },
    {
      id: 4,
      title: 'Cloud Computing',
      description: "Software engineering is one of the most sought-after careers",
      date: "22 Aug 2025",
      image: b1,
    },
    {
      id: 5,
      title: 'Artificial Intelligence',
      description: "Software engineering is one of the most sought-after careers",
      date: "22 Aug 2025",
      image: b1,
    },
    // Add more career paths here
  ];

  return (
    <div className="my-16 py-4">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      >
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Text content */}
          <motion.div
            className="w-full xl:w-1/2 text-center"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row items-start mb-8">
              <div className="mr-6 text-left">
                <h2 className="text-3xl font-semibold mb-2">Career Paths in</h2>
                <h2 className="text-3xl font-semibold">Computer Science</h2>
                <p className="mt-4 text-gray-800">
                  Graduates of the Computer Science Undergraduate Program can pursue careers in various fields such as
                </p>
              </div>
              <button
                onClick={() => navigate(`/career/${careerPaths[0].id}`)} // Navigate to the first career path
                className="bg-red-700 text-white cursor-pointer p-3 rounded-lg flex items-center justify-center flex-shrink-0 mt-4 xl:mt-0 hover:bg-red-800 transition duration-300"
              >
                <FaArrowRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>

          {/* Career paths cards */}
          <motion.div
            className="flex space-x-4 w-full xl:w-1/2 overflow-x-auto snap-x snap-mandatory"
            variants={containerVariants}
          >
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.id}
                onClick={() => navigate(`/career/${path.id}`)}
                className="snap-start cursor-pointer relative w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }} // Add hover effect
              >
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-52 object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 w-full text-white p-4 space-y-2"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <h3 className="text-lg font-semibold">{path.title}</h3>
                  <p className="text-gray-200">{path.description}</p>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <p className="text-gray-200">{path.date}</p>
                  </div>
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