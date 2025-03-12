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

const Homepages = () => {
  return (
    <div className="">
      <SlideShowSection />
      <div className=" *:mb-16 lg:px-20 px-4 ">
        <ServiceSection />
        <LatestNews />
        <EventsNews />
        <AboutSection />
        <AcademicSection />
        <StatisticsSection />
        <ContactSection />
       
      </div>
      <div className=" *:mb-16">
         <Research />
      </div>
      <div className="*:mb-16 lg:px-20 px-4 ">
        <FacultyCarousel />
        <EventsNews />
        <PartnershipSection />
        </div>
     
      <div className="">
        <DepartmentHeader />
      </div>
      

    </div>
  );
};

export default Homepages;
