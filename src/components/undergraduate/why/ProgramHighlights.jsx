import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa'; // Import graduation cap icon

const ProgramHighlights = () => {
  const highlights = [
    {
      title: 'Experienced Faculty',
      description: 'Learn from industry experts, researchers, and professors with vast experience.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access modern computer labs, research centers, and collaborative spaces.',
    },
    {
      title: 'Industry Partnerships',
      description: 'Gain job opportunities through collaborations with leading tech companies.',
    },
    {
      title: 'Global Perspective',
      description: 'A curriculum aligned with international standards and current industry trends.',
    },
    {
      title: 'Research Opportunities',
      description: 'Engage in cutting-edge research in AI, cybersecurity, data science, and more.',
    },
    {
      title: 'Hackathons',
      description: 'Participate in coding competitions, innovation challenges, and tech meetups.',
    },
  ];

  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg p-6 shadow-md text-center"
          variants={itemVariants}
        >
          <div className="flex justify-center mb-4">
            <FaGraduationCap className="text-3xl text-red-700" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
          <p className="text-gray-600">{highlight.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProgramHighlights;