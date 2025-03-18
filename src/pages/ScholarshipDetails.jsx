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
      <title>Scholarships Details Page - Department of Computer Science</title>
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