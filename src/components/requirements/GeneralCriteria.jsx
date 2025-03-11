import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import p3 from "../../assets/student-life/p1.png";
import p4 from "../../assets/student-life/p2.png";

const GeneralCriteria = () => {
  const requirements = [
    "High school diploma with Minimum C grade or higher in science subjects.",
    "Passing entrance exams.",
    "For students who apply Need-Based Scholarship, they have to be categorized as in financial needed with a certain certificate.",
    "Must reside in a remote area and demonstrate financial need.",
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
          className="w-full xl:w-1/2 px-4 xl:px-0"
        >
          <h2 className="text-2xl xl:text-3xl font-bold mb-4">
            General Criteria
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

        {/* Right Column - Image Content */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, amount: 0.5 }} 
          className="w-full xl:w-1/2 lg:h-[479px] mx-auto h-[360px]"
        >
          <div className="relative flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center gap-4 xl:gap-6 w-full">
              {/* Left Image */}
              <div className="h-[200px] w-[150px] lg:h-[347px] lg:w-[265px] transition transform -translate-y-2">
                <img
                  src={p3}
                  alt=""
                  className="w-full h-full rounded-tl-[100px] object-cover"
                />
              </div>
              {/* Right Image */}
              <div className="h-[250px] w-[150px] lg:w-[254px] lg:h-[381px] transition transform translate-y-22">
                <img
                  src={p4}
                  alt=""
                  className="w-full h-full object-cover rounded-tr-[100px]"
                />
              </div>
            </div>

            {/* SVG Circle */}
            <div className="absolute -bottom-8 xl:-bottom-8 w-[150px] h-[150px] xl:w-[200px] xl:h-[200px]">
              <svg width="100%" height="100%" viewBox="0 0 400 400">
                <defs>
                  <path
                    id="halfCirclePath"
                    d="M 50,200 a 150,150 0 0,1 300,0"
                  />
                </defs>
                <circle cx="200" cy="200" r="180" fill="#A52A2A" />
                <text
                  font-size="26"
                  fill="white"
                  text-anchor="middle"
                  dy={10}
                  letterSpacing={6}
                >
                  <textPath href="#halfCirclePath" startOffset="50%">
                    ADMISSION REQUIREMENTS
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
   </div>
  );
};

export default GeneralCriteria;