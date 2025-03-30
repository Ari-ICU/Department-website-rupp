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
      <meta name="description" content="Faculty Details information for the Department of Computer Science at RUPP" />
      <link rel="canonical" href="/faculty-details" />
      <meta property="og:title" content="Faculty Details - Department of Computer Science" />
      <meta property="og:description" content="Faculty Details information for the Department of Computer Science at RUPP" />
      <meta name="twitter:title" content="Faculty Details - Department of Computer Science" />
      <meta name="twitter:description" content="Faculty Details information for the Department of Computer Science at RUPP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="RUPP, Computer Science, Faculty Details, Department of Computer Science" />
      <meta name="author" content="Department of Computer Science, RUPP" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RUPP Faculty Details" />
     
      </Helmet>
      <div  className=''>
        <ProfileSection />
        <div className='container mx-auto flex flex-col md:flex-row justify-center px-4 '>
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