import React from 'react'
import LabSection from '../components/labdetails/LabSection'
import ProjectDetails from '../components/labdetails/ProjectDetails'

const LabDetails = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <LabSection />
            <ProjectDetails />
        </div>
    </div>
  )
}

export default LabDetails