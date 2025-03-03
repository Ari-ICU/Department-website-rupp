import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import banner from "../../assets/img/univ2.jpg"; 
import StatisticsSection from "../home/StatisticsSection";
import BreadcrumbSection from '../BreadcrumbSection';

const CSAboutSection = () => {
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
          Innovate, Learn, Succeed: <br /> About Our CS Department
        </motion.h1>

       <BreadcrumbSection />
       
      </div>
    </div>
  );
};

export default CSAboutSection;
