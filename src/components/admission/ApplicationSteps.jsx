import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaListAlt, FaStepForward, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const ApplicationSteps = () => {
  const steps = [
    {
      icon: <FaListAlt className="mr-2 text-xl" />,
      text: 'General Requirements',
      target: 'basic-requirements', // Target section ID for scrolling
    },
    {
      icon: <FaStepForward className="mr-2 text-xl" />,
      text: 'Step By Step to Apply',
      target: 'apply-now',
    },
    {
      icon: <FaDollarSign className="mr-2 text-xl" />,
      text: 'Scholarship Opportunity',
      target: 'scholarships',
    },
    {
      icon: <FaCalendarAlt className="mr-2 text-xl" />,
      text: 'Important Dates & Deadlines',
      target: 'important-dates',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      className=" my-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <Link
              key={index}
              to={step.target} // Scroll to the section based on the 'target' key
              smooth={true} // Smooth scrolling
              duration={500} // Duration of the scroll
              className="bg-red-800 text-white p-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-red-900 transition duration-300"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-center"
              >
                {step.icon}
                <span className="text-lg font-semibold">{step.text}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationSteps;