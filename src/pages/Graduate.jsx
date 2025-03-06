import React from 'react'
import GraduateProgramSlider from '../components/graduate/GraduateSlider'
import Overview from '../components/graduate/Overview'
import StudyOverview from '../components/graduate/StudyOverview'
import TuitionSection from '../components/graduate/TuitionSection'
import CareerPaths from '../components/undergraduate/career/CareerPaths'
import DepartmentHeander from '../components/home/DepartmentHeader'

const Graduate = () => {
  return (
    <div>
        <div>
            <GraduateProgramSlider />
            <div className=''>
            <Overview />
            <StudyOverview />
            <TuitionSection />
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