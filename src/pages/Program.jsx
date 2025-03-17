import React from 'react'
import ProgramBanner from '../components/banner/ProgramBanner'
import Overview from '../components/program/Overview'
import Programs from '../components/program/Programs'
import ProgramObjectives from '../components/program/ProgramObjectives'
import MastersPromotion from '../components/introduction/MastersPromotion'
import WhyChooseProgram from '../components/why/WhyChooseProgram'
import ContactAdmissions from '../components/introduction/ContactAdmissions'
import DepartmentHeader from '../components/home/DepartmentHeader'

const Program = () => {
  return (
    <div>
      <div>
        <ProgramBanner />
        <div className=' '>
          <Overview />
          <Programs />
          <ProgramObjectives />
          <MastersPromotion />
          <WhyChooseProgram />
          <ContactAdmissions />
        </div>

        <div className=''>
          <DepartmentHeader />
        </div>


      </div>
    </div>
  )
}

export default Program