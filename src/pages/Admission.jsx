import React from 'react';
import { Link } from 'react-router-dom';
import AdmissionBanner from '../components/banner/AdmissionBanner';
import ApplicationSteps from '../components/admission/ApplicationSteps';
import BasicRequirements from '../components/requirements/BasicReq';
import ApplySection from '../components/admission/ApplySection';
import ImportantDates from '../components/admission/ImportantDates';
import ScholarshipOpportunities from '../components/scholar/ScholarshipOpportunities';
import { Helmet } from 'react-helmet';


const Admission = () => {
  console.log("Rendering Admission Page");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start ">
      {/* Admission Banner */}
      <Helmet>
        <title>Admission - Department of Computer Science</title>
        <meta name="description" content="Admission information for the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/admission" />
        <meta property="og:title" content="Admission - Department of Computer Science" />
        <meta property="og:description" content="Admission information for the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="Admission - Department of Computer Science" />
        <meta name="twitter:description" content="Admission information for the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, Admission, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RUPP Admission" />
      </Helmet>
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
