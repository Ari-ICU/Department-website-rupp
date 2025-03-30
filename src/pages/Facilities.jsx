import React from 'react'
import DepartmentHeader from '../components/home/DepartmentHeader'
import FacilitiesBanner from '../components/banner/FacilitiesBanner';
import Overview from '../components/facilities/Overview';
import AcademicFacilities from '../components/facilities/AcademicFacilities';
import TechnologyResearchCenters from '../components/facilities/TechnologyResearchCenters';
import StudentLife from '../components/facilities/StudentLife';
import { Helmet } from 'react-helmet'


const Faculty = () => {
  return (
    <div>
       <Helmet>
        <title>Facilities - Department of Computer Science</title>
        <meta name="description" content="Facilities information for the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/facilities" />
        <meta property="og:title" content="Facilities - Department of Computer Science" />
        <meta property="og:description" content="Facilities information for the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="Facilities - Department of Computer Science" />
        <meta name="twitter:description" content="Facilities information for the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, Facilities, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RUPP Facilities" />
        
      </Helmet>
      <div>
        <FacilitiesBanner />
        <Overview />
        <AcademicFacilities />
        <TechnologyResearchCenters />
        <StudentLife />
      </div>  
      <DepartmentHeader />
    </div>
  )
}

export default Faculty;