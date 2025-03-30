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
      <title>Scholarships - Department of Computer Science</title>
      <meta name="description" content="Scholarship information for the Department of Computer Science at RUPP" />
      <link rel="canonical" href="/scholarship" />
      <meta property="og:title" content="Scholarships - Department of Computer Science" />
      <meta property="og:description" content="Scholarship information for the Department of Computer Science at RUPP" />
      <meta name="twitter:title" content="Scholarships - Department of Computer Science" />
      <meta name="twitter:description" content="Scholarship information for the Department of Computer Science at RUPP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="RUPP, Computer Science, Scholarships, Department of Computer Science" />
      <meta name="author" content="Department of Computer Science, RUPP" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RUPP Scholarships" />
      
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