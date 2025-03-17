import React from "react";
import { motion } from "framer-motion";
import m from '../../assets/program/3-Photoroom.png';

const MastersPromotion = () => {
  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black my-16"> {/* Added padding */}
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col xl:flex-row items-center justify-center gap-6"
          variants={containerVariants} // Added variants to the outer container
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Added viewport option
        >
          <div class="xl:w-[514px] w-full p-6 relative ">
            <div class="absolute inset-0 border p-2 bg-sky-600 rounded-full w-4 h-4 top-24 left-10"></div>
            <div class="absolute  border p-2 bg-red-300 rounded-full w-12 h-12 top-0 left-32"></div>
            <div class="absolute  border p-2 bg-red-800 rounded-full w-18 h-18 top-26 right-0"></div>
            <img src={m} alt="" class="w-full h-full mx-auto object-cover rounded-lg" />
          </div>
          <motion.div className="text-white p-6 rounded-lg shadow-lg xl:w-[641px] mx-auto"> {/* Added background color and padding */}
            <h2 className="text-3xl font-bold mb-4">
              Unlock Your Future with a Master's Degree
            </h2>
            <p className="mb-6">
              Gain advanced skills in AI, cybersecurity, and software engineering. A
              master's degree in Computer Science opens doors to high-paying jobs,
              leadership roles, and groundbreaking innovation. Take your expertise to
              the next level!
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-red-900 font-bold py-2 px-4 rounded-lg"
            >
              View Detail
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MastersPromotion;