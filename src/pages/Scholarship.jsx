import React from 'react'
import ScholarshipBanner from '../components/banner/ScholarshipBanner'
import TypeScholarship from '../components/scholar/TypeScholarship'
import GeneralCriteria from '../components/requirements/GeneralCriteria'
import ScholarshipSection from '../components/scholar/ScholarshipSection'
import DepartmentHeader from '../components/home/DepartmentHeader'

const Scholarship = () => {
  return (
    <div>
      <div>
        <ScholarshipBanner />
        <TypeScholarship />
        <GeneralCriteria />
        <ScholarshipSection />
      </div>
      <DepartmentHeader />
    </div>
  )
}

export default Scholarship