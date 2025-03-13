import React from 'react'
import EventsDetailsBanner from '../components/banner/EventsDetails'
import SocialIcon from '../components/social/SocialIcon'
import EventsNewSetion from '../components/events&news/EventsNewSection'

const EventsNewDetails = () => {
  return (
    <div>
        <div>
            <EventsDetailsBanner />
            <SocialIcon />
            <EventsNewSetion />
        </div>
    </div>
  )
}

export default EventsNewDetails