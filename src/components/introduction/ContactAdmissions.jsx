import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import p6 from '../../assets/program/7.png';

const ContactAdmissions = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.1 }, // Added delayChildren and staggerChildren
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container mx-auto  rounded-lg text-center relative"
      style={{
        backgroundImage: `url(${p6})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Overlay div to apply opacity correctly */}
      <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

      {/* Content inside the overlay */}
      <motion.div className="relative p-6 md:p-8 text-white" variants={textVariants}>
        <motion.p className="text-lg mb-4" variants={textVariants}>
          For more details, please visit our{' '}
          <Link
            to="/admissions"
            className=" hover:text-red-900 inline-block"
            aria-label="Admissions Page"
          >
            <strong>admissions page</strong>
          </Link>{' '}
         
          or
          contact the 
          {' '}
          <Link
            to="/contact"
            className="hover:text-red-900 inline-block"
            aria-label="Contact Computer Science Department"
          >
            <strong> Computer Science Department</strong>
          </Link>{' '}
          for further inquiries.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ContactAdmissions;