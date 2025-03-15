import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from "../../assets/img/rupp.png";

const DepartmentHeader = () => {
  return (
    <motion.div
      className="bg-red-900 p-4  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col xl:flex-row py-4 items-center justify-between ">
        {/* Left Section with Logo and Text */}
        <Link to='' className=' cursor-pointer'>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <motion.img
              src={logo}
              alt="Department Logo"
              className="h-16 w-16 mr-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <motion.h2
              className="text-white xl:text-xl text-sm font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Faculty of Science <br className='xl:block hidden' /> Department of Computer Science
            </motion.h2>

          </motion.div>
        </Link>

        {/* Right Section with Social Media Icons */}
        <div className='flex justify-end'>
          <motion.div
            className="flex  space-x-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[FaTelegramPlane, FaFacebookF, FaXTwitter].map((Icon, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-white p-2 rounded-xl shadow-md cursor-pointer"
                aria-label={`Social Media Icon ${index + 1}`}
              >
                <Link to="/" className="text-red-800">
                  <Icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentHeader;