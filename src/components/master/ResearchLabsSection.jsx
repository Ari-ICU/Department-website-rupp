import React from 'react';
import { FaFlask, FaUsers, FaDollarSign, FaUserGraduate } from 'react-icons/fa';
import p1 from '../../assets/master/1.png';

const ResearchLabsSection = () => {
  const researchLabs = [
    {
      icon: <FaFlask className="text-red-600 text-xl" />,
      title: 'Cutting-Edge Research Labs',
      description: 'Access state-of-the-art labs and high-performance computing to explore AI, cybersecurity, data science, and more.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: <FaUsers className="text-red-600 text-xl" />,
      title: 'Collaborative Research Opportunities',
      description: 'Engage in research collaborations with leading tech companies and universities worldwide, solving real-world challenges.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: <FaDollarSign className="text-red-600 text-xl" />,
      title: 'Research Grants and Funding',
      description: 'Access research grants, scholarships, and funding opportunities to support your projects and publications.',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: <FaUserGraduate className="text-red-600 text-xl" />,
      title: 'Dedicated Mentorship & Guidance',
      description: 'Receive tailored guidance from faculty experts to navigate and excel in your research journey.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="lg:w-[330px] h-[552px] mb-8 md:mb-0">
            <img 
              src={p1}
              alt="Research Labs" 
              className="rounded-lg object-cover shadow-lg h-full w-full" 
            />
          </div>

          {/* Text and Features Section */}
          <div className="w-[950px] md:pl-8">
            <h2 className="text-3xl font-semibold mb-6">
              Research & Labs: Unlock Your Potential in Research & Technology
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchLabs.map((lab, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-3 ${lab.bgColor} rounded-full mr-4`}>
                    {lab.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{lab.title}</h3>
                    <p className="text-gray-600">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchLabsSection;
