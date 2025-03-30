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
      <title>News&Events - Department of Computer Science</title>
      <meta name="description" content="News&Events information for the Department of Computer Science at RUPP" />
      <link rel="canonical" href="/news" />
      <meta property="og:title" content="News&Events - Department of Computer Science" />
      <meta property="og:description" content="News&Events information for the Department of Computer Science at RUPP" />
      <meta name="twitter:title" content="News&Events - Department of Computer Science" />
      <meta name="twitter:description" content="News&Events information for the Department of Computer Science at RUPP" />
      <meta name="twitter:card" content="summary_large_image" />        
      <meta name="keywords" content="RUPP, Computer Science, News&Events, Department of Computer Science" />
      <meta name="author" content="Department of Computer Science, RUPP" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />  
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RUPP News&Events" />
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