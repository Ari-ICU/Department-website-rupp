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
      <title>Research Details Page - Department of Computer Science</title>
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