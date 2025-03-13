import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom'; // Import useLocation
import banner from "../../assets/img/univ2.jpg";
import BreadcrumbSection from '../BreadcrumbSection';

const CSAboutSection = () => {
  const location = useLocation();

  const isContactPage = location.pathname.includes("contact");

  return (
    <motion.div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8 }} // Animation duration
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="xl:text-4xl text-2xl font-bold mb-4"
        >
          {isContactPage ? "Get in Touch: Contact Our CS Department" : "Innovate, Learn, Succeed: About Our CS Department"}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <BreadcrumbSection />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CSAboutSection;