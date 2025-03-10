import React from 'react'
import ResearchBanner from '../components/banner/ResearchBanner'
import SocialIcon from '../components/social/SocialIcon'
import ResearchSection from '../components/researchDetails/ResearchSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import RelatedArtical from '../components/researchDetails/RelatedArtical'

const ResearchDetails = () => {
  return (
    <div>
        <div>
            <ResearchBanner />
            <SocialIcon />
            <ResearchSection />
            <RelatedArtical />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default ResearchDetails;