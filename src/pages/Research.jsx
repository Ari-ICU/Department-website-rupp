import React from 'react'
import SlideShowSection from '../components/research/SlidShow'
import ResearchCategories from '../components/research/ResearchCategories'
import ResearchSection from '../components/home/ResearchSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import StudentResearch from '../components/research/StudentResearch'
import ResearchArea from '../components/research/ResearchArea'
import StudentFeedback from '../components/research/StudentFeedback'

const Research = () => {
  return (
    <div>
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