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
    <div>
      {/* Hero Section (SlideShow) */}
      <div className="relative lg:h-screen">
        <SlideShowSection />
      </div>

      {/* Service Section for Large Screens */}
      <div className="container mx-auto px-4 py-8 absolute inset-x-0 bottom-0 transform translate-y-1/1 hidden lg:block">
        <ServiceSection />
      </div>

      {/* Service Section for Small Screens (Mobile/Tablet) */}
      <div className="xl:hidden lg:hidden py-6 ">
        <h1 className="text-center text-2xl">Our Serivice</h1>
        <ServiceSection />
      </div>
      <div className="py-16">
        <AboutSection />
      </div>
      <div>
        <AcademicSection />
      </div>
      <div>
        <StatisticsSection />
      </div>
      <div>
        <ContactSection />
        <Research />
      </div>
      <div className="*:py-10">
        <FacultyCarousel />
        <EventsNews />
        <PartnershipSection />
        <DepartmentHeader />
      </div>


    </div>
  );
};

export default Homepages;
