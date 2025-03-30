import React from 'react'
import LabSection from '../components/labdetails/LabSection'
import ProjectDetails from '../components/labdetails/ProjectDetails'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet'

const LabDetails = () => {
  return (
    <div  className='text-justify'> 
    <Helmet >
    <title>Lab Details - Department of Computer Science</title>
    <meta name="description" content="Lab Details information for the Department of Computer Science at RUPP" />
    <link rel="canonical" href="/lab-details" />
    <meta property="og:title" content="Lab Details - Department of Computer Science" />
    <meta property="og:description" content="Lab Details information for the Department of Computer Science at RUPP" />
    <meta name="twitter:title" content="Lab Details - Department of Computer Science" />  
    <meta name="twitter:description" content="Lab Details information for the Department of Computer Science at RUPP" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="keywords" content="RUPP, Computer Science, Lab Details, Department of Computer Science" />
    <meta name="author" content="Department of Computer Science, RUPP" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="RUPP Lab Details" />
    </Helmet>
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <LabSection />
            <ProjectDetails />
        </div>
       
    </div>
    <DepartmentHeader />
    </div>
  )
}

export default LabDetails