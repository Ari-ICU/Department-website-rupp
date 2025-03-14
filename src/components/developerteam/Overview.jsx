import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <div className="my-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between space-y-6 xl:space-y-0 xl:space-x-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl xl:text-4xl font-extrabold text-gray-900 border-l-4 border-red-700 pl-4"
          >
           Our Commitment & Vision
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm xl:text-lg text-gray-800 leading-relaxed max-w-2xl"
          >
            We are honored and thrilled to have the opportunity to develop this website. Our hope is that it serves as a valuable resource for juniors and anyone interested in the Computer Science department at RUPP. We aim to make it more convenient for students to find the information they seek while also allowing them to explore and learn more about this dynamic and ever-evolving field.
            </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
