import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaDollarSign, FaUserGraduate } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md'
import p1 from "../../../assets/program/banner.png";
import { useTranslation } from 'react-i18next';



const ResearchLabsSection = () => {
   const { t, i18n } = useTranslation();
              const currentLanguage = i18n.language;
  const researchLabs = [
    {
      icon: <MdSchool className="text-red-800 text-xl" />,
      title: 'Cutting-Edge Research Labs',
      description: 'Access state-of-the-art labs and high-performance computing to explore AI, cybersecurity, data science, and more.',
    
    },
    {
      icon: <FaUsers className="text-red-800 text-xl" />,
      title: 'Collaborative Research Opportunities',
      description: 'Engage in research collaborations with leading tech companies and universities worldwide, solving real-world challenges.',
    
    },
    {
      icon: <FaDollarSign className="text-red-800 text-xl" />,
      title: 'Research Grants and Funding',
      description: 'Access research grants, scholarships, and funding opportunities to support your projects and publications.',
    
    },
    {
      icon: <FaUserGraduate className="text-red-800 text-xl" />,
      title: 'Dedicated Mentorship & Guidance',
      description: 'Receive tailored guidance from faculty experts to navigate and excel in your research journey.',
    
    },
  ];

  return (
    <motion.div 
      className="bg-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col xl:flex-row items-center gap-10"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <motion.div 
            className="lg:w-[330px] xl:w-[400px] h-[552px] mb-8 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={p1}
              alt="Research Labs" 
              className="rounded-lg object-cover shadow-lg h-full w-full" 
            />
          </motion.div>

          {/* Text and Features Section */}
          <div className="w-full xl:w-[950px] md:pl-8">
            <motion.h2 
               className={`text-3xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
               lang={currentLanguage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Research & Labs: Unlock Your Potential in Research & Technology
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {researchLabs.map((lab, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`border border-red-800 rounded-full p-2 mr-4`}>
                    {lab.icon}
                  </div>
                  <div>
                    <h3 className="text-lg xl:text-xl font-semibold mb-1">{lab.title}</h3>
                    <p className="text-gray-800 xl:text-lg">{lab.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResearchLabsSection;