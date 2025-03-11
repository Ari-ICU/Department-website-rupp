import React from 'react'
import SlideShowSection from '../components/research/SlidShow'
import ResearchCategories from '../components/research/ResearchCategories'
import ResearchSection from '../components/home/ResearchSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import StudentResearch from '../components/research/StudentResearch'

const Research = () => {
  return (
    <div>
      <div>
        <SlideShowSection />
        <ResearchCategories />
        <ResearchSection />
        <StudentResearch />
      </div>
      <DepartmentHeader />
    </div>
  )
}

export default Research