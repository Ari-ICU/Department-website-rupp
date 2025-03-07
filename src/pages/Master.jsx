import React from 'react'
import BachelorSlider from '../components/Bachelor/BachelorSlider'
import Overview from '../components/master/Overview'
import TuitionSection from '../components/Bachelor/TuitionSection'
import CareerPaths from '../components/undergraduate/career/CareerPaths'
import DepartmentHeander from '../components/home/DepartmentHeader'
import AdmissionRequirements from '../components/Bachelor/AdmissionRequirements'

const Graduate = () => {
  return (
    <div>
        <div>
            <BachelorSlider />
            <div className=''>
            <Overview />
           
            <TuitionSection />
            <AdmissionRequirements />

            <CareerPaths />
            </div>
            <div className='mt-16'>
            <DepartmentHeander />
            </div>
        </div>
    </div>
  )
}


export default Graduate