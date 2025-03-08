import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom'; // Import useLocation
import banner from "../../assets/img/univ2.jpg"; 
import StatisticsSection from "../home/StatisticsSection";
import BreadcrumbSection from '../BreadcrumbSection';

const CSAboutSection = () => {
  const location = useLocation(); // Get current route

  const isContactPage = location.pathname.includes("contact"); // Check if on contact page

  return (
    <div
      className="relative w-full h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }} 
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          {isContactPage ? "Get in Touch: Contact Our CS Department" : "Innovate, Learn, Succeed: About Our CS Department"}
        </motion.h1>

        <BreadcrumbSection />
        
      </div>
    </div>
  );
};

export default CSAboutSection;
