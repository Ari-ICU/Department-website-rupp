// Importing necessary modules
import React from 'react'
import ResultTable from '../components/newsDetails/ResultTables'
import DepartmentHeader from '../components/home/DepartmentHeader'
import { Helmet } from 'react-helmet'

const NewsDetails = () => {
  return (
    <div>
      <Helmet>
        <title>News Details - Department of Computer Science</title>
        <meta name="description" content="News Details information for the Department of Computer Science at RUPP" />
        <link rel="canonical" href="/news-details" />
        <meta property="og:title" content="News Details - Department of Computer Science" />
        <meta property="og:description" content="News Details information for the Department of Computer Science at RUPP" />
        <meta name="twitter:title" content="News Details - Department of Computer Science" />
        <meta name="twitter:description" content="News Details information for the Department of Computer Science at RUPP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="RUPP, Computer Science, News Details, Department of Computer Science" />
        <meta name="author" content="Department of Computer Science, RUPP" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RUPP News Details" />
      </Helmet>
        <ResultTable />
        <DepartmentHeader />
    </div>
  )
}

export default NewsDetails