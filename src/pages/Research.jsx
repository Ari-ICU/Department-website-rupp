import React from 'react'
import SlideShowSection from '../components/research/SlidShow'
import ResearchCategories from '../components/research/ResearchCategories'
import ResearchSection from '../components/home/ResearchSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import StudentResearch from '../components/research/StudentResearch'
import ResearchArea from '../components/research/ResearchArea'
import StudentFeedback from '../components/research/StudentFeedback'
import { Helmet } from 'react-helmet'

const Research = () => {
  return (
    <div>
      <Helmet>
      <title>Research - Department of Computer Science</title>
      <meta name="description" content="Research information for the Department of Computer Science at RUPP" />
      <link rel="canonical" href="/research" />
      <meta property="og:title" content="Research - Department of Computer Science" />
      <meta property="og:description" content="Research information for the Department of Computer Science at RUPP" />
      <meta name="twitter:title" content="Research - Department of Computer Science" />
      <meta name="twitter:description" content="Research information for the Department of Computer Science at RUPP" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="keywords" content="RUPP, Computer Science, Research, Department of Computer Science" />
      <meta name="author" content="Department of Computer Science, RUPP" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RUPP Research" />
      
      </Helmet>
      <div>
        <SlideShowSection />
        <ResearchArea />
       <StudentFeedback />
        <StudentResearch />
      </div>
      <DepartmentHeader />
    </div>
  )
}

export default Research