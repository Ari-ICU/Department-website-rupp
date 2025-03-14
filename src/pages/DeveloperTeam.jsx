import React from 'react'
import DeveloperTeamBanner from '../components/banner/DeveloperTeamBanner'
import Overview from '../components/developerteam/Overview'
import TeamLeader from '../components/developerteam/TeamLeader'
import MemberTeam from '../components/developerteam/MemberTeam'

const DeveloperTeam = () => {
  return (
    <div>
        <div>
            <DeveloperTeamBanner />
            <Overview />
            <TeamLeader />
            <MemberTeam />
        </div>
    </div>
  )
}

export default DeveloperTeam