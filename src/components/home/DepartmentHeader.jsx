import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaFacebookF, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for client-side routing
import logo from "../../assets/img/rupp.png";

const DepartmentHeader = () => {
  return (
    <div className="bg-red-900 py-4">
      <div className="bg-maroon py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left section with logo and text */}
          <div className="flex items-center mb-4 md:mb-0">
            <motion.img
              src={logo} // Replace with your logo path
              alt="Department Logo"
              className="h-16 w-16 mr-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <motion.h2
                className="text-white text-xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Faculty of Science Department of <br /> Computer Science
              </motion.h2>
            </div>
          </div>

          {/* Right section with social media icons */}
          <div className="flex space-x-2 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.2 }}
              className='bg-white px-2 py-2 rounded-xl'
            >
              <Link to="#" className="text-red rounded">
                <FaTelegram className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.2 }}
               className='bg-white px-2 py-2 rounded-xl'
            >
              <Link to="#" className="text-red rounded">
                <FaFacebookF className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.2 }}
               className='bg-white px-2 py-2 rounded-xl'
            >
              <Link to="#" className=" text-red rounded">
                <FaTimes className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHeader;
