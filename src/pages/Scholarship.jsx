import React from 'react'
import ScholarshipBanner from '../components/banner/ScholarshipBanner'
import QuoteSection from '../components/quoteSection/QuoteSection'
import TypeScholarship from '../components/scholar/TypeScholarship'
import GeneralCriteria from '../components/requirements/GeneralCriteria'
import ScholarshipSection from '../components/scholar/ScholarshipSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet'

const Scholarship = () => {
  return (
    <div>
      <Helmet>
      <title>Scholarships Page - Department of Computer Science</title>
      </Helmet>
      <div className=''>
        <ScholarshipBanner />
        <QuoteSection />
        <TypeScholarship />
        <GeneralCriteria />
        <ScholarshipSection />
      </div>
      <DepartmentHeader />
    </div>
  )
}

export default Scholarship