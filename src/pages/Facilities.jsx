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
        <title>Facilities Page - Department of Computer Science</title>
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