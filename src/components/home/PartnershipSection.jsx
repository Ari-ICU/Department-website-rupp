import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import fortinet from "../../assets/img/fortinet.png";
import Fauna from "../../assets/img/Fauna.png";
import cisco from "../../assets/img/cisco.png";
import aws from "../../assets/img/aws.png";

const PartnershipSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-8xl flex justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Title and "View All" Link */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Partnerships</h2>
            <Link to="#" className="text-sm text-red-600 hover:underline">view all →</Link>
          </div>

          {/* Vertical Divider (hidden on smaller screens) */}
          <span className="border-r h-10 hidden lg:block"></span> 

          {/* Partner Logos with Animation */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center space-y-4 md:space-y-0 space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
          >
            {/* Partner Logos with Hover Effect */}
            {[
              { src: Fauna, alt: "Fauna & Flora International" },
              { src: fortinet, alt: "Fortinet" },
              { src: cisco, alt: "Cisco" },
              { src: aws, alt: "AWS" },
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-22"
                whileHover={{ scale: 1.1 }} // Scale up on hover
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;