import React from 'react';
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
    <div className="bg-gray-100 my-12">
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
              {step.icon}
              <span className="text-lg font-semibold">{step.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationSteps;
