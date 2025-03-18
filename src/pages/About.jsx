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
import { Helmet } from 'react-helmet';


const About = () => {

  return (
    <div  >
      <Helmet>
        <title>About - Department of Computer Science</title>
      </Helmet>
      <CSAboutSection />
      <div className=" ">
        <StatisticsSection />

        <RUPPIntroduction />
        <InnovationSection />





      </div>
      <div className=" ">
        <EducationSection />
      </div>

      <div className=" ">
        <StrategicPillarsSection />
        <FacultyCarousel />
        <FAQSection />
      </div>

      <DepartmentHeader />
    </div>
  );
};

export default About;
