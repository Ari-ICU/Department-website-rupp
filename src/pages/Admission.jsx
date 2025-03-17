import React from 'react';
import { Link } from 'react-router-dom';
import AdmissionBanner from '../components/banner/AdmissionBanner';
import ApplicationSteps from '../components/admission/ApplicationSteps';
import BasicRequirements from '../components/requirements/BasicReq';
import ApplySection from '../components/admission/ApplySection';
import ImportantDates from '../components/admission/ImportantDates';
import ScholarshipOpportunities from '../components/scholar/ScholarshipOpportunities';

const Admission = () => {
  console.log("Rendering Admission Page");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-justify">
      {/* Admission Banner */}
      <div className="w-full">
        <AdmissionBanner />
      </div>

      {/* Application Steps Section */}
      <section id="application-steps">
        <ApplicationSteps />
      </section>

      {/* Basic Requirements Section */}
      <section id="basic-requirements" className="w-full ">
        <BasicRequirements />
      </section>

      {/* Apply Section */}
      <section id="apply-now">
        <ApplySection />
      </section>

      {/* Important Dates Section */}
      <section id="important-dates">
        <ImportantDates />
      </section>

      {/* Scholarship Opportunities Section */}
      <section id="scholarships">
        <ScholarshipOpportunities />
      </section>

    
    </div>
  );
};

export default Admission;
