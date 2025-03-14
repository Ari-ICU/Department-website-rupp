import React from 'react'
import FacultyBanner from '../components/banner/FacultyBanner'
import HeadDepartment from '../components/faculty/HeadDepartment'
import DeputyHeadofDepartment from '../components/faculty/DeputyHeadofDepartment:'
import FacultyMembers from '../components/faculty/FacultyMembers'
import DepartmentHeader from '../components/home/DepartmentHeader'

const Faculty = () => {
  return (
    <div>
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