import React from 'react'
import SocialIcon from '../components/social/SocialIcon'
import DepartmentHeader from '../components/home/DepartmentHeader'
import CareerSection from '../components/careerDetails/CareerSection'
import CareerBanner from '../components/banner/CareerBanner'
import RelatedArtical from '../components/careerDetails/RelatedArtical'

const CareerDetails = () => {
  return (
    <div>
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