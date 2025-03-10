import React from 'react'
import SocialIcon from '../components/social/SocialIcon'
import DepartmentHeader from '../components/home/DepartmentHeader'
import CareerSection from '../components/careerDetails/CareerSection'
import RelatedArtical from '../components/careerDetails/RelatedArtical'
import EventsBanner from '../components/banner/EventsBanner'

const CareerDetails = () => {
  return (
    <div>
        <div>
            <EventsBanner />
            <SocialIcon />
            <CareerSection />
            <RelatedArtical />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default CareerDetails