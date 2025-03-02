import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for animation
import fortinet from "../../assets/img/fortinet.png"
import Fauna from "../../assets/img/Fauna.png"
import cisco from "../../assets/img/cisco.png"
import aws from "../../assets/img/aws.png"

const PartnershipSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className=''>
            <h2 className="text-2xl font-semibold text-gray-900">Our Partnerships</h2>
            <Link to="#" className="text-sm text-red-600 hover:underline">view all →</Link>
          </div>
         <span className='border-r py-10 hidden lg:block'></span>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start  items-center space-y-4 space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={Fauna}
              alt="Fauna & Flora International"
              className="h-22"
              whileHover={{ scale: 1.1 }} // Slight hover effect
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={fortinet}
              alt="Fortinet"
              className="h-22"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={cisco}
              alt="Cisco"
              className="h-22"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={aws}
              alt="AWS"
              className="h-22"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
