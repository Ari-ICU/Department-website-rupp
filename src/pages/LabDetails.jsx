import React from 'react'
import LabSection from '../components/labdetails/LabSection'
import ProjectDetails from '../components/labdetails/ProjectDetails'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet'

const LabDetails = () => {
  return (
    <div  className='text-justify'> 
    <Helmet >
    <title>Lab Details Page - Department of Computer Science</title>
    </Helmet>
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <LabSection />
            <ProjectDetails />
        </div>
       
    </div>
    <DepartmentHeader />
    </div>
  )
}

export default LabDetails