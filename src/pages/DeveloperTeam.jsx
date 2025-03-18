import React from 'react'
import DeveloperTeamBanner from '../components/banner/DeveloperTeamBanner'
import Overview from '../components/developerteam/Overview'
import MemberTeam from '../components/developerteam/MemberTeam'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet';


const DeveloperTeam = () => {
  return (
    <div>
      <Helmet>
        <title>Developer Page - Department of Computer Science</title>
      </Helmet>
      <div className='text-justify'>
        <DeveloperTeamBanner />
        <Overview />
        {/* <TeamLeader /> */}
        <MemberTeam />
      </div>
      <DepartmentHeader />
    </div>
  )
}

export default DeveloperTeam