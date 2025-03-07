import React from 'react'
import GraduateProgramSlider from '../components/Bachelor/BachelorSlider'
import Overview from '../components/Bachelor/Overview'
import StudyOverview from '../components/Bachelor/StudyOverview'
import TuitionSection from '../components/Bachelor/TuitionSection'
import CareerPaths from '../components/undergraduate/career/CareerPaths'
import DepartmentHeander from '../components/home/DepartmentHeader'
import UniverityPartnershups from '../components/Bachelor/UniversityPartnerships'
import AdmissionRequirements from '../components/Bachelor/AdmissionRequirements'
import ComputerScienceDegreeBenefits from '../components/Bachelor/ComputerScienceDegreeBenefits'

const Graduate = () => {
  return (
    <div>
        <div>
            <GraduateProgramSlider />
            <div className=''>
            <Overview />
            <StudyOverview />
            <TuitionSection />
            <AdmissionRequirements />
            <UniverityPartnershups />
            <ComputerScienceDegreeBenefits />x
           


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