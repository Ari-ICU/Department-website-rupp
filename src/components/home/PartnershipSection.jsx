import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import fortinet from "../../assets/img/fortinet.png";
import Fauna from "../../assets/img/Fauna.png";
import cisco from "../../assets/img/cisco.png";
import aws from "../../assets/img/aws.png";

const PartnershipSection = () => {
  const partners = [
    { src: Fauna, alt: "Fauna & Flora International" },
    { src: fortinet, alt: "Fortinet" },
    { src: cisco, alt: "Cisco" },
    { src: aws, alt: "AWS" },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Title and "View All" Link */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Partnerships</h2>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-auto mt-4 md:mt-0"
            >
              <Link to='' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                <span className="mr-2">View All</span>
                <FaArrowRight className="text-red-800" />
              </Link>
            </motion.div>
          </div>

          {/* Vertical Divider (hidden on smaller screens) */}
          <span className="border-r h-10 hidden lg:block"></span>

          {/* Partner Logos with Animation */}
          <motion.div
            className="flex flex-wrap justify-center xl:justify-start items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {partners.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto"
                  aria-label={logo.alt}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;