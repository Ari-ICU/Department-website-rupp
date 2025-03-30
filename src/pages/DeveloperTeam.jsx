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
        <title>Developer - Department of Computer Science</title>
        <meta name="description" content="Developer information for the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/developer-team" />
        <meta property="og:title" content="Developer - Department of Computer Science" />
        <meta property="og:description" content="Developer information for the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="Developer - Department of Computer Science" />
        <meta name="twitter:description" content="Developer information for the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, Developer, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RUPP Developer" />
        
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