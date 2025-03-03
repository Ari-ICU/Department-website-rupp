import React from "react";
import { motion } from "framer-motion"
import CSAboutSection from "../components/about/CSAboutSection";
import RUPPIntroduction from "../components/about/RUPPIntroduction";
import InnovationSection from "../components/about/InnovationSection";
import EducationSection from "../components/about/EducationSection";
import FacultyCarousel from "../components/home/FacultyCarousel";
import StrategicPillarsSection from "../components/about/StrategicPillarsSection";
import FAQSection from "../components/about/FAQSection";
import DepartmentHeader from "../components/home/DepartmentHeader";
import StatisticsSection from "../components/home/StatisticsSection"


const About = () => {
  return (
    <div>
      {/* CSAboutSection (Background Section) */}
      {/* <div className="relative h-[539px]"> */}
      <CSAboutSection />
      {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" bottom-0 relative"
        >
            <StatisticsSection />
        </motion.div> */}
      {/* </div> */}
      <div className="*:py-16">
        <StatisticsSection />
      
          <RUPPIntroduction />
          <InnovationSection />
      
        <EducationSection />

        <StrategicPillarsSection />
        <FacultyCarousel />
        <FAQSection />
        
      </div>
      <DepartmentHeader />
    </div>
  );
};

export default About;
