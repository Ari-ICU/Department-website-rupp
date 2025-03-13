import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const ProjectReq = () => {
  const requirements = [
    "Advancements in Quantum Computing: Improving quantum error correction and increasing qubit stability to enhance computational efficiency.",
    "Ethical AI Development: Creating unbiased datasets, improving model interpretability, and establishing ethical AI guidelines.",
    "Enhanced Cybersecurity MeasurRemote Control: Control lights, doors, temperature, and other devices directly from your phone.",
    "Weather Integration: Access live weather data through an API and adjust home settings based on the forecast (e.g., adjust the thermostat when it's cold outside).",
    "Automated Responses: Set up rules and triggers that automatically adjust the home environment based on specific conditions (e.g., turning off the lights when you leave the house).",
    "User-Friendly Interface: A simple, intuitive mobile interface for easy control of all connected devices"
  ];

  return (
   <div className="my-16">
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }} 
      className="container mx-auto px-4 "
    >
      <div className="xl:h-[479px] h-full flex flex-col xl:flex-row items-center gap-8 py-8 xl:py-0">
        {/* Left Column - Text Content */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, amount: 0.5 }} 
          className="w-full px-4 xl:px-0"
        >
          <h2 className="text-2xl xl:text-3xl font-bold mb-4">
            Project Requirements
          </h2>

          <div className="grid grid-cols-1">
            {/* Added grid for responsiveness */}
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="mb-4 flex gap-4"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-red-300 bg-opacity-35 rounded-full flex items-center justify-center">
                    <FaCheck size={34} className="text-red-900 p-2" />
                  </div>
                </div>
                <div>
                  <p className="text-sm xl:text-lg">{requirement}</p>
                </div>
              </div>
            ))}
          </div>
         
        </motion.div>
      </div>
    </motion.div>
   </div>
  );
};

export default ProjectReq;