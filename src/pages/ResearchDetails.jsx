import React from 'react'
import ResearchBanner from '../components/banner/ResearchBanner'
import SocialIcon from '../components/social/SocialIcon'
import ResearchSection from '../components/researchDetails/ResearchSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import RelatedArtical from '../components/researchDetails/RelatedArtical'
import Overview from '../components/researchDetails/Overview'
import RecentResearch from '../components/researchDetails/RecentResearch'
import FocusAreas from '../components/researchDetails/FocusAreas'
import ProjectReq from '../components/requirements/ProjectRequirements'
import ProfessorSection from '../components/research/ProfessorSection'

const ResearchDetails = () => {
  return (
    <div>
        <div>
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