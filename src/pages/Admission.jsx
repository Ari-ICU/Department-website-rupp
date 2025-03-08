import React from 'react';
import { Link } from 'react-router-dom';
import AdmissionBanner from '../components/banner/AdmissionBanner';
import ApplicationSteps from '../components/admission/ApplicationSteps';
import BasicRequirements from '../components/admission/BasicReq';
import ApplySection from '../components/admission/ApplySection';
import ImportantDates from '../components/admission/ImportantDates';
import ScholarshipOpportunities from '../components/undergraduate/introduction/ScholarshipOpportunities';

const Admission = () => {
  console.log("Rendering Admission Page");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* Admission Banner */}
      <div className="w-full">
        <AdmissionBanner />
      </div>

      {/* Application Steps Section */}
      <section id="application-steps" className="w-full ">
        <ApplicationSteps />
      </section>

      {/* Basic Requirements Section */}
      <section id="basic-requirements" className="w-full ">
        <BasicRequirements />
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="w-full ">
        <ApplySection />
      </section>

      {/* Important Dates Section */}
      <section id="important-dates" className="w-full ">
        <ImportantDates />
      </section>

      {/* Scholarship Opportunities Section */}
      <section id="scholarships" className="w-full ">
        <ScholarshipOpportunities />
      </section>

    
    </div>
  );
};

export default Admission;
