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