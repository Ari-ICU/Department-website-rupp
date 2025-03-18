import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadcrumbSection from '../../BreadcrumbSection';

// Image imports for different programs
import s1 from "../../../assets/graduate.png";
import s2 from "../../../assets/graduate.png";
import s3 from "../../../assets/graduate.png";
import { useTranslation } from 'react-i18next';


// Program data
const programData = {
    bachelor: {
        title: "Bachelor Degree",
        description: "Explore the foundational curriculum of our Bachelor's degree program in Computer Science. Gain the skills to kickstart your career in tech.",
        image: s1
    },
    master: {
        title: "Master's Degree",
        description: "Our Master's degree offers an advanced curriculum to deepen your expertise in fields like AI, cybersecurity, and software engineering.",
        image: s2
    },
    doctoral: {
        title: "Doctoral Degree",
        description: "Dive deep into research with our Doctoral program. Focus on areas like AI, machine learning, and cybersecurity to lead innovation.",
        image: s3
    },
    diploma: {
        title: "Diploma Degree",
        description: "Our Diploma program provides focused training on key topics in computer science to give you industry-ready skills in a shorter time frame.",
        image: s1
    }
};

function DegreeProgramBanner() {
     const { t, i18n } = useTranslation();
              const currentLanguage = i18n.language;
    const location = useLocation();
    const programType = location.pathname.split("/").pop();
    const currentProgram = programData[programType] || programData.bachelor;

    return (
        <div className="relative bg-white shadow-md overflow-hidden">
            {/* Background Image */}
            <div 
                className="relative w-full h-[550px] bg-cover bg-center" 
                style={{ backgroundImage: `url(${currentProgram.image})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
                    <h2  className={`text-5xl font-normal mb-8  ${currentLanguage === 'km' ? "" : ""}`}
                            lang={currentLanguage}>{currentProgram.title}</h2>
                    <p className="text-md xl:text-xl text-gray-200 drop-shadow-md max-w-2xl">{currentProgram.description}</p>
                    <div className="mt-4">
                        <BreadcrumbSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DegreeProgramBanner;