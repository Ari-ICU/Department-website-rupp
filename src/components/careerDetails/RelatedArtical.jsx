import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import b1 from '../../assets/bachelor/b1.png'; // Ensure your image is correctly imported

const careerPaths = [
  {
    id: 1,
    title: 'Software Development',
    description: "Software engineering is one of the most sought-after careers",
    data: "22 Aug 2025",
    image: b1,
  },
  {
    id: 2,
    title: 'Data Science and Analytics',
    description: "Data Science is rapidly growing, offering promising opportunities.",
    data: "22 Aug 2025",
    image: b1,
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: "Cybersecurity professionals are in high demand to secure digital infrastructures.",
    data: "22 Aug 2025",
    image: b1,
  },
  {
    id: 4,
    title: 'Cloud Computing',
    description: "Cloud computing has become an integral part of modern IT infrastructure.",
    data: "22 Aug 2025",
    image: b1,
  },
  {
    id: 5,
    title: 'Artificial Intelligence',
    description: "AI is transforming industries, creating intelligent systems and applications.",
    data: "22 Aug 2025",
    image: b1,
  },
  // Add more career paths here
];

const RelatedArtical = () => {
  const navigate = useNavigate(); // To navigate to the career detail page

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        {/* Heading with animation */}
        <motion.h2
          className="text-4xl mb-6 font-semibold"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        >
          Related Articles
        </motion.h2>

        {/* Career paths cards */}
        <motion.div
          className="flex space-x-4 w-full overflow-x-auto snap-x snap-mandatory"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        >
          {careerPaths.map((path) => (
            <motion.div
              key={path.id}
              onClick={() => navigate(`/career/${path.id}`)} // Navigate to the detailed page
              className="snap-start cursor-pointer relative w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-52 object-cover"
              />
              <div
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                className="absolute bottom-0 left-0 w-full text-white p-4 space-y-2"
              >
                <h3 className="text-lg font-semibold">{path.title}</h3>
                <p className=" text-gray-200">{path.description}</p>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
                  <p className=" text-gray-200">{path.data}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RelatedArtical;