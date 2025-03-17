import React from 'react'
import EventsDetailsBanner from '../components/banner/EventsDetails'
import SocialIcon from '../components/social/SocialIcon'
import EventsNewSetion from '../components/events&news/EventsNewSection'
import RelatedArtical from '../components/events&news/RelatedArtical'
import DepartmentHeader from '../components/home/DepartmentHeader'

const EventsNewDetails = () => {
  return (
    <div>
        <div>
            <EventsDetailsBanner />
            <SocialIcon />
            <EventsNewSetion />
            <RelatedArtical />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default EventsNewDetails