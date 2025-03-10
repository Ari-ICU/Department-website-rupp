import React from 'react'
import NewBanner from '../components/banner/NewBanner';
import LatestNews from '../components/news/LatestNews';
import UpcomingEvents from '../components/news/UpcomingEvents';
import DepartmentHeader from '../components/home/DepartmentHeader';

const News = () => {
  return (
    <div>
        <div>
            <NewBanner />
            <LatestNews />
            <UpcomingEvents />
        </div>
        <DepartmentHeader />
    </div>
  )
}

export default News;