import React from 'react';
import { motion } from 'framer-motion';
import { PiGraduationCapDuotone } from "react-icons/pi";
import { BsCalendar4Event } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";


const services = [
  
  {
    title: 'Events',
    description: 'Workshops, hackathons, and networking opportunities.',
    icon: <BsCalendar4Event />,
  },
  {
    title: 'Job Opportunities',
    description: 'Launch your career in tech and innovation.',
    icon: <MdWorkOutline />,
  },
  
  {
    title: 'About Program',
    description: 'Balanced curriculum with theory and hands-on learning.',
    icon: <PiGraduationCapDuotone />,
  },
];

// Animation variants for the section
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for individual service cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceSection = () => {
  
  const { t,i18n } = useTranslation();
          const currentLanguage = i18n.language; 

  return (
    <div className='my-16'>
      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-full"
              variants={cardVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                {/* Icon Container - Fixed size and consistent styling */}
                <div
                  className="min-w-[64px] flex-shrink-0 text-[40px] w-16 h-16 flex items-center justify-center transition-colors text-red-900 rounded-full border-2 border-red-900/20"
                  aria-label={t(`service.${service.title}`)}
                >
                  {React.cloneElement(service.icon, {
                    className: "w-[1em] h-[1em]"
                  })}
                </div>

                {/* Title and Description */}
                <div className="text-center md:text-left">
                  <h3 className={`text-lg font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                            lang={currentLanguage}>{t(`service.${service.title}`)}</h3>
                  <p className="md:text-base text-gray-600">{t(`service.${service.description}`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ServiceSection;