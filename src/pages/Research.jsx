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