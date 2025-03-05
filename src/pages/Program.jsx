import React from 'react'
import ProgramBanner from '../components/program/ProgramBanner'
import Overview from '../components/program/Overview'
import Programs from '../components/program/Programs'
import ProgramObjectives from '../components/program/ProgramObjectives'
import MastersPromotion from '../components/undergraduate/introduction/MastersPromotion'
import WhyChooseProgram from '../components/undergraduate/why/WhyChooseProgram'
import ContactAdmissions from '../components/undergraduate/introduction/ContactAdmissions'
import DepartmentHeader from '../components/home/DepartmentHeader'

const Program = () => {
  return (
    <div>
      <div>
        <ProgramBanner />
        <div className='*:py-16 *:px-10'>
          <Overview />
          <Programs />
          <ProgramObjectives />
          <MastersPromotion />
          <WhyChooseProgram />
          <ContactAdmissions />
        </div>

        <div className='pt-16'>
          <DepartmentHeader />
        </div>


      </div>
    </div>
  )
}

export default Program