import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DegreeSlider from '../components/degree/slider/SliderDegree';
import CareerPaths from '../components/career/CareerPaths';
import DepartmentHeader from '../components/home/DepartmentHeader';
import TuitionSection from '../components/degree/Bachelor/TuitionSection';
import AdmissionRequirements from '../components/requirements/AdmissionRequirements';
import UniversityPartnerships from '../components/degree/Bachelor/UniversityPartnerships'
import ComputerScienceDegreeBenefits from '../components/degree/Bachelor/ComputerScienceDegreeBenefits';
import ResearchLabsSection from '../components/degree/master/ResearchLabsSection';
import ResearchSections from '../components/degree/master/ResearchSection';
import StudyOverview from '../components/degree/overview/StudyOverview';
import Overview from '../components/degree/overview/Overview';

const degreeComponents = {
  bachelor: [
    { component: <DegreeSlider /> },
    { component: <Overview /> },
    { component: <StudyOverview /> },
    { component: <TuitionSection /> },
    { component: <AdmissionRequirements /> },
    { component: <UniversityPartnerships /> },
    { component: <ComputerScienceDegreeBenefits /> },
    { component: <CareerPaths /> },
  ],
  master: [
    { component: <DegreeSlider /> },
    { component: <Overview /> },
    { component: <StudyOverview /> },
    { component: <TuitionSection /> },
    { component: <AdmissionRequirements /> },
    { component: <ResearchLabsSection /> },
    { component: <CareerPaths /> },
    { component: <ResearchSections /> },
  ],
  doctoral: [
    { component: <DegreeSlider /> },
    { component: <Overview /> },
    { component: <StudyOverview /> },
    { component: <TuitionSection /> },
    { component: <AdmissionRequirements /> },
    { component: <ResearchLabsSection /> },
    { component: <CareerPaths /> },
    { component: <ResearchSections /> },
  ],
  diploma: [
    { component: <DegreeSlider /> },
    { component: <Overview /> },
    { component: <StudyOverview /> },
    { component: <TuitionSection /> },
    { component: <AdmissionRequirements /> },
    { component: <CareerPaths /> },
  ], 
};

const DegreePage = () => {
  const { degree } = useParams();

  const selectedComponents = degreeComponents[degree] || [];

  useEffect(() => {
    // Set the document title based on the degree type
    document.title = degree ? `${degree.charAt(0).toUpperCase() + degree.slice(1)} Degree - Department of Computer Science`   : 'Degree Page';

    // Clean up function to reset the title when the component unmounts
    return () => {
      document.title = 'Degree Page'; // Or your default title
    };
  }, [degree]); // Re-run effect when degree changes

  return (
    <div>
      <div >
        {selectedComponents.length === 0 ? (
          <p>No information available for this program.</p>
        ) : (
          selectedComponents.map((item, index) => (
            <div key={index}>
              {item.component}
            </div>
          ))
        )}
        <div className="mt-16">
          <DepartmentHeader />
        </div>
      </div>
    </div>
  );
};

export default DegreePage;