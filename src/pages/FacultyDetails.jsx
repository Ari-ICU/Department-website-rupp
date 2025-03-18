import React from 'react'
import ProfileSection from '../components/facultyDetails/ProfileSection'
import AboutSection from '../components/facultyDetails/AboutSection'
import ResearchProjectsSection from '../components/facultyDetails/ResearchProjectsSection'
import SelectedPublicationsSection from '../components/facultyDetails/SelectedPublicationsSection'
import BackgroundSection from '../components/facultyDetails/BackgroundSection'
import CourseProjectsSection from '../components/facultyDetails/CourseProjectsSection'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet'

const FacultyDetails = () => {
  return (
    <div>
      <Helmet>
      <title>Faculty Details - Department of Computer Science</title>
      </Helmet>
      <div  className=''>
        <ProfileSection />
        <div className='container mx-auto flex justify-center px-4 '>
          <div className=''>
            <AboutSection />
            <ResearchProjectsSection />
            <SelectedPublicationsSection />
          </div>
          <div className=''>
            <BackgroundSection />
            <CourseProjectsSection />
          </div>
        </div>
        <DepartmentHeader />
      </div>
    </div>
  )
}

export default FacultyDetails