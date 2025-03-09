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
            What Our Department Offers
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm xl:text-lg text-gray-600 leading-relaxed max-w-2xl"
          >
            We provide a balanced education with classroom sessions for theoretical learning and computer lab activities for hands-on practice. Our fully equipped labs feature desktop computers for student use, ensuring practical exposure to programming, research, and technical skills. Additionally, free Wi-Fi is available across campus, allowing students to stay connected and access learning resources anytime.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
