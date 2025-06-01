import React from "react";
import SlideShowSection from "../components/home/Sildeshow";
import ServiceSection from "../components/home/ServiceSection";
import AboutSection from "../components/home/AboutSection";
import AcademicSection from "../components/home/AcademicSection";
import StatisticsSection from "../components/home/StatisticsSection";
import ContactSection from "../components/home/ContactSection";
import Research from "../components/home/ResearchSection";
import FacultyCarousel from "../components/home/FacultyCarousel";
import EventsNews from "../components/home/EventsNews";
import LatestNews from '../components/news/LatestNews'
import PartnershipSection from  "../components/home/PartnershipSection";
import DepartmentHeader from "../components/home/DepartmentHeader";
import { Helmet } from "react-helmet";
import News from "../components/home/News";

const Homepages = () => {
  return (
    <div className="">
      <Helmet>
      <title>Home - Department of Computer Science</title>
        <meta name="description" content="Home page of the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Home - Department of Computer Science" />
        <meta property="og:description" content="Home page of the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="Home - Department of Computer Science" />
        <meta name="twitter:description" content="Home page of the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, Home, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RUPP Home" />
      </Helmet>
      <SlideShowSection />
      <div className="  ">
        <ServiceSection />
       <News />
        <AboutSection />
        <AcademicSection />
        <StatisticsSection />
        <ContactSection />
       
      </div>
      <div className="">
         <Research />
      </div>
      <div className=" ">
        <FacultyCarousel />
        <PartnershipSection />
        </div>
     
      <div className="">
        <DepartmentHeader />
      </div>
      

    </div>
  );
};

export default Homepages;
