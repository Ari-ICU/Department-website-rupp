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

const Homepages = () => {
  return (
    <div className="">
      <Helmet>
      <title>Home Page - Department of Computer Science</title>
      </Helmet>
      <SlideShowSection />
      <div className="  ">
        <ServiceSection />
        <LatestNews />
        <EventsNews />
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
