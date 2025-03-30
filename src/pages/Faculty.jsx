import React from 'react'
import FacultyBanner from '../components/banner/FacultyBanner'
import HeadDepartment from '../components/faculty/HeadDepartment'
import DeputyHeadofDepartment from '../components/faculty/DeputyHeadofDepartment:'
import FacultyMembers from '../components/faculty/FacultyMembers'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet'

const Faculty = () => {
  return (
    <div>
       <Helmet>
              <title>Faculty - Department of Computer Science</title>
              <meta name="description" content="Faculty information for the Department of Computer Science at RUPP" />
              <link rel="canonical" href="/faculty" />
              <meta property="og:title" content="Faculty - Department of Computer Science" />
              <meta property="og:description" content="Faculty information for the Department of Computer Science at RUPP" />
              <meta name="twitter:title" content="Faculty - Department of Computer Science" />
              <meta name="twitter:description" content="Faculty information for the Department of Computer Science at RUPP" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="keywords" content="RUPP, Computer Science, Faculty, Department of Computer Science" />
              <meta name="author" content="Department of Computer Science, RUPP" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="theme-color" content="#ffffff" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="default" />
              <meta name="apple-mobile-web-app-title" content="RUPP Faculty" />
            </Helmet>
        <div>
            <FacultyBanner />
            <HeadDepartment />
            <DeputyHeadofDepartment />
            <FacultyMembers />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default Faculty