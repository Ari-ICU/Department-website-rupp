import React from 'react'
import ResearchBanner from '../components/banner/ResearchBanner'
import DepartmentHeader from '../components/home/DepartmentHeader'
import RelatedArtical from '../components/researchDetails/RelatedArtical'
import Overview from '../components/researchDetails/Overview'
import RecentResearch from '../components/researchDetails/RecentResearch'
import FocusAreas from '../components/researchDetails/FocusAreas'
import ProjectReq from '../components/requirements/ProjectRequirements'
import ProfessorSection from '../components/research/ProfessorSection'
import { Helmet } from 'react-helmet'

const ResearchDetails = () => {
  return (
    <div>
      <Helmet>
      <title>Research Details - Department of Computer Science</title>
      <meta name="description" content="Research Details information for the Department of Computer Science at RUPP" />
      <link rel="canonical" href="/research-details" />
      <meta property="og:title" content="Research Details - Department of Computer Science" />
      <meta property="og:description" content="Research Details information for the Department of Computer Science at RUPP" />
      <meta name="twitter:title" content="Research Details - Department of Computer Science" />
      <meta name="twitter:description" content="Research Details information for the Department of Computer Science at RUPP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="RUPP, Computer Science, Research Details, Department of Computer Science" />
      <meta name="author" content="Department of Computer Science, RUPP" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RUPP Research Details" />
     

      </Helmet>
        <div className='lg:text-justify'>
            <ResearchBanner />
            <Overview />
            <FocusAreas />
            <ProjectReq />
            <ProfessorSection />
            <RelatedArtical />
            <RecentResearch />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default ResearchDetails;