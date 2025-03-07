import React from 'react'
import BachelorSlider from '../components/Bachelor/BachelorSlider'
import Overview from '../components/doctoral/Overview'
import TuitionSection from '../components/Bachelor/TuitionSection'
import CareerPaths from '../components/undergraduate/career/CareerPaths'
import DepartmentHeander from '../components/home/DepartmentHeader'
import AdmissionRequirements from '../components/Bachelor/AdmissionRequirements'
import StudyOverview from '../components/doctoral/StudyOverview'
import ResearchLabsSection from '../components/master/ResearchLabsSection'
import ResearchSection from '../components/master/ResearchSection'

const Graduate = () => {
  return (
    <div>
        <div>
            <BachelorSlider />
            <div className=''>
            <Overview />
            <StudyOverview />
            <TuitionSection />
            <AdmissionRequirements />
            <ResearchLabsSection />
            <CareerPaths />
            <ResearchSection />
            </div>
            <div className='mt-16'>
            <DepartmentHeander />
            </div>
        </div>
    </div>
  )
}


export default Graduate