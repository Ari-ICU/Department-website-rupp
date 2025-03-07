import React from 'react';

// Import your university logos here
import faunaFloraLogo from '../../assets/partner/fauna-flora-logo.png'; 
import tsinghuaLogo from '../../assets/partner/tsinghua-logo.png';
import dongseoLogo from '../../assets/partner/dongseo-logo.png';
import hongkongPolyLogo from '../../assets/partner/hongkong-poly-logo.png';
import southernTechLogo from '../../assets/partner/southern-tech-logo.png';

const UniversityPartnerships = () => {
  return (
    <div className="bg-white my-16"> 
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Partnerships With Universities</h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          <div className="flex flex-col items-center">
            <img src={faunaFloraLogo} alt="Fauna & Flora International" className="h-20" /> 
          </div>
          <div className="flex flex-col items-center">
            <img src={tsinghuaLogo} alt="Tsinghua University" className="h-20" />
            <span className="mt-2 text-sm sr-only text-gray-600">Tsinghua University</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={dongseoLogo} alt="Dongseo University" className="h-20" />
            <span className="mt-2 text-sm sr-only text-gray-600">Dongseo University</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={hongkongPolyLogo} alt="The Hong Kong Polytechnic University" className="h-20" />
            <span className="mt-2 text-sm sr-only text-gray-600">The Hong Kong Polytechnic University</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={southernTechLogo} alt="Southern University of Science and Technology" className="h-20" />
            <span className="mt-2 text-sm sr-only text-gray-600">Southern University of Science and Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartnerships;