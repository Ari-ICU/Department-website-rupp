import React from 'react'
import SocialIcon from '../components/social/SocialIcon'
import DepartmentHeader from '../components/home/DepartmentHeader'
import CareerSection from '../components/careerDetails/CareerSection'
import CareerBanner from '../components/banner/CareerBanner'
import RelatedArtical from '../components/careerDetails/RelatedArtical'
import { Helmet } from 'react-helmet';


const CareerDetails = () => {
  return (
    <div  className='sm:text-justify'>
       <Helmet>
        <title>Career Details  - Department of Computer Science</title>
        <meta name="description" content="Career Details information for the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/career-details" />
        <meta property="og:title" content="Career Details - Department of Computer Science" />
        <meta property="og:description" content="Career Details information for the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="Career Details - Department of Computer Science" />
        <meta name="twitter:description" content="Career Details information for the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, Career Details, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RUPP Career Details" />
      </Helmet>
        <div>
            <CareerBanner />
            <SocialIcon />
            <CareerSection />
            <RelatedArtical />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default CareerDetails