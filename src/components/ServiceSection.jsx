import React from 'react';
import { motion } from 'framer-motion';
import { MdSchool, MdWork, MdEvent } from 'react-icons/md';

const services = [
  {
    title: 'About Program',
    description: 'Balanced curriculum with theory and hands-on learning.',
    icon: <MdSchool />,
  },
  {
    title: 'Job Opportunities',
    description: 'Launch your career in tech and innovation.',
    icon: <MdWork />,
  },
  {
    title: 'Events',
    description: 'Workshops, hackathons, and networking opportunities.',
    icon: <MdEvent />,
  },
];

const ServiceSection = () => {
  return (
    <motion.section
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">

                 {/* Icon column (after title and description) */}
              <div className="text-5xl w-16 h-16 flex items-center justify-center bg-red-100 text-red-900 rounded-full">
                {service.icon}
              </div>
              {/* Title and Description column */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>

             
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServiceSection;
