import React from 'react'
import DeveloperTeamBanner from '../components/banner/DeveloperTeamBanner'
import Overview from '../components/developerteam/Overview'
import TeamLeader from '../components/developerteam/TeamLeader'
import MemberTeam from '../components/developerteam/MemberTeam'
import DepartmentHeader from '../components/home/DepartmentHeader'

const DeveloperTeam = () => {
  return (
    <div>
        <div>
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