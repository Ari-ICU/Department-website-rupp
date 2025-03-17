import React from 'react'
import LabSection from '../components/labdetails/LabSection'
import ProjectDetails from '../components/labdetails/ProjectDetails'
import DepartmentHeader from '../components/home/DepartmentHeader'

const LabDetails = () => {
  return (
    <div  className='text-justify'> 
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