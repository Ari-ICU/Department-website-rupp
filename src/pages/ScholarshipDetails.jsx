import React from 'react'
import ScholarDetailsBanner from '../components/banner/ScholarDetailsBanner';
import ScholarDetails from '../components/scholardetails/ScholarsDetails'
import ImageSection from '../components/scholardetails/ImageSection';
import DepartmentHeader from '../components/home/DepartmentHeader'
import ApplicationDetails from '../components/scholardetails/ApplicationDetails';
import { Helmet } from 'react-helmet';


const ScholarshipDetails = () => {
  return (
    <div>
      <Helmet>
      <title>Scholarships Details - Department of Computer Science</title>
      <meta name="description" content="Scholarship details for the Department of Computer Science at RUPP" />
      <link rel="canonical" href="/scholarship-details" />
      <meta property="og:title" content="Scholarship Details - Department of Computer Science" />
      <meta property="og:description" content="Scholarship details for the Department of Computer Science at RUPP" />
      <meta name="twitter:title" content="Scholarship Details - Department of Computer Science" />
      <meta name="twitter:description" content="Scholarship details for the Department of Computer Science at RUPP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="RUPP, Computer Science, Scholarship Details, Department of Computer Science" />
      <meta name="author" content="Department of Computer Science, RUPP" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RUPP Scholarship Details" />
      
      </Helmet>
      <div>
        <ScholarDetailsBanner />
        <ScholarDetails />
        <ImageSection />
        <ApplicationDetails />
      </div>
      <DepartmentHeader />
    </div>
  )
}
export default ScholarshipDetails;