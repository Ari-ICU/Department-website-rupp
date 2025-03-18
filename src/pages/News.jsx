import React from 'react'
import NewBanner from '../components/banner/NewBanner';
import LatestNews from '../components/news/LatestNews';
import UpcomingEvents from '../components/news/UpcomingEvents';
import DepartmentHeader from '../components/home/DepartmentHeader';
import { Helmet } from 'react-helmet';

const News = () => {
  return (
    <div>
      <Helmet>
      <title>News&Events Page - Department of Computer Science</title>
      </Helmet>
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