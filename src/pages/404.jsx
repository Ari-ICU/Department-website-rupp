import React from 'react';
import { FaHome } from 'react-icons/fa';
import logo from '../assets/img/rupp.png'; // Adjust the path as necessary
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">

      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
        <link rel="canonical" href="/404" />
        <meta property="og:title" content="404 Not Found" />
        <meta property="og:description" content="Page not found" />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="/404" />
        <meta name="twitter:title" content="404 Not Found" />
        <meta name="twitter:description" content="Page not found" />
        <meta name="twitter:image" content={logo} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> 
      <div className="flex justify-center items-center gap-2 lg:gap-6 mb-4 lg:mb-8"> 
        <span className="text-7xl md:text-9xl font-extrabold text-red-900">4</span>
        <div className="w-20 h-20 md:w-32 md:h-32">
          <img 
            src={logo}
            alt="Royal University of Phnom Penh Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
        <span className="text-7xl md:text-9xl font-extrabold text-red-900">4</span>
      </div>
      <div className="text-xl text-red-900 lg:text-2xl font-semibold mb-2 lg:mb-4">Opp! This Page is Not Found.</div>
      <div className="text-base lg:text-lg text-gray-600 mb-4 lg:mb-8">Please Return Back to Home Page</div>
      <button 
      onClick={() => window.location.href = '/'}
      className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
        <FaHome className="inline-block mr-2" /> 
        Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;