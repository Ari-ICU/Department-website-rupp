import React from "react";
import { motion } from "framer-motion"
import CSAboutSection from "../components/banner/CSAboutSection";
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
      
      <CSAboutSection />
      <div className="*:py-16 *:max-w-8xl lg:px-20 px-4 ">
        <StatisticsSection />

        <RUPPIntroduction />
        <InnovationSection />





      </div>
      <div className="*:py-16 *:max-w-8xl ">
        <EducationSection />
      </div>

      <div className="*:py-16 *:max-w-8xl lg:px-20 px-4 ">
        <StrategicPillarsSection />
        <FacultyCarousel />
        <FAQSection />
      </div>
    
      <DepartmentHeader />
    </div>
  );
};

export default About;
