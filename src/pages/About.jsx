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
        <meta name="description" content="About the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About - Department of Computer Science" />
        <meta property="og:description" content="About the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="About - Department of Computer Science" />
        <meta name="twitter:description" content="About the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, About Us, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
