import React from "react";
import SlideShowSection from "../components/Sildeshow";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import AcademicSection from "../components/AcademicSection"
import StatisticsSection from "../components/StatisticsSection";
import ContactSection from "../components/ContactSection"
import Research from "../components/ResearchSection";

const Homepages = () => {
  return (
    <div>
      {/* Hero Section (SlideShow) */}
      <div className="relative lg:h-screen">
        <SlideShowSection />
      </div>

      {/* Service Section for Large Screens */}
      <div className="container mx-auto px-4 py-8 absolute inset-x-0 bottom-0 transform translate-y-1/3 hidden lg:block">
        <ServiceSection />
      </div>

      {/* Service Section for Small Screens (Mobile/Tablet) */}
      <div className="xl:hidden lg:hidden py-6 ">
        <h1 className="text-center text-2xl">Our Serivice</h1>
        <ServiceSection />
      </div>
      <div>
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
    </div>
  );
};

export default Homepages;
