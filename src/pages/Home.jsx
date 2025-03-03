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
import PartnershipSection from  "../components/home/PartnershipSection";
import DepartmentHeader from "../components/home/DepartmentHeader";

const Homepages = () => {
  return (
    <div className="*:max-w-8xl mx-auto">
      <SlideShowSection />
      <div className="*:py-16 *:max-w-8xl *:justify-center *:flex lg:px-20 px-4 ">
        <ServiceSection />
        <AboutSection />
        <AcademicSection />
        <StatisticsSection />
        <ContactSection />
       
      </div>
      <div className="*:py-16 *:max-w-8xl *:justify-center *:flex">
         <Research />
      </div>
      <div className="*:py-16 *:max-w-8xl *:justify-center *:flex lg:px-20 px-4 ">
      <FacultyCarousel />
        <EventsNews />
        <PartnershipSection />
        </div>
     
      <div className="*:max-w-8xl *:justify-center *:flex pt-16">
        <DepartmentHeader />
      </div>
      

    </div>
  );
};

export default Homepages;
