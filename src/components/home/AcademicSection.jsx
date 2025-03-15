import React from "react";
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { MdExplore } from 'react-icons/md'
import { MdSchool } from "react-icons/md";
import image1 from "../../assets/academic/1.png"; 

const AcademicSection = () => {
  const academicsData = {
    title: "Academics",
    description: [
      "The Computer Science Department offers a comprehensive undergraduate program designed to provide students with a strong foundation in computing principles, programming, and modern technologies.",
      "Our curriculum emphasizes both theoretical and practical aspects of computer science, equipping graduates with the skills needed for a successful career in the ever-evolving tech industry."
    ],
    image: image1,
    programs: ["Undergraduate Program", "Graduate Program"],
    buttonLabel: "Explore",
  };

  const navigate = useNavigate();

  const handleBtn = () =>{
    navigate('/programs')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="container mx-auto px-4">
        <section className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section - Appears first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <img
              src={academicsData.image}
              alt={academicsData.title}
              className="w-[90%] max-w-[600px] h-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Left Text Section - Appears second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold mb-4">{academicsData.title}</h2>
            {academicsData.description.map((text, index) => (
              <p key={index} className="text-sm md:text-base text-gray-800 mb-4">
                {text}
              </p>
            ))}

            {/* Program Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-base">
              {academicsData.programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 border border-red-800 p-4 rounded-xl"
                >
                  <div className="border border-red-800 rounded-full p-2">
                    <MdSchool size={25} className="text-red-800" />
                  </div>
                  <p className="text-sm md:text-base text-red-800 font-medium">{program}</p>
                </motion.div>
              ))}
            </div>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button 
              onClick={handleBtn}
              className="bg-red-800 cursor-pointer text-white rounded-4xl py-2 px-6 flex items-center hover:bg-red-600 transition duration-300">
                Explore
                <MdExplore className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default AcademicSection;
