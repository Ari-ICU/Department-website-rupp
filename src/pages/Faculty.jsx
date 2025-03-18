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
              <title>Faculty Page - Department of Computer Science</title>
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