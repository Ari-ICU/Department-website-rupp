import React from 'react'
import EventsDetailsBanner from '../components/banner/EventsDetails'
import SocialIcon from '../components/social/SocialIcon'
import EventsNewSetion from '../components/events&news/EventsNewSection'
import RelatedArtical from '../components/events&news/RelatedArtical'

const EventsNewDetails = () => {
  return (
    <div>
        <div>
            <EventsDetailsBanner />
            <SocialIcon />
            <EventsNewSetion />
            <RelatedArtical />
        </div>
    </div>
  )
}

export default EventsNewDetails