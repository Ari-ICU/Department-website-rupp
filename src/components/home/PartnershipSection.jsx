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
    <div className="my-16">
      <div className="container mx-auto  px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Title and "View All" Link */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Partnerships</h2>
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