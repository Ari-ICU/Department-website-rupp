import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ResearchProjectsSection = () => {

    const researchProjects = [
        {
            title: "Grant (KKU + PSU + CMU) (2024-present)",
        },
        {
            title: "Grant from the Department of Computer Science, College of Computing, Khon Kaen University (2024-present)",
            details: "Deep Learning Applications for Future Wireless Communication Optimization",
        },
        {
            title: "Grant from Research Industry (2021-present)",
            details: "A Study and Performance Optimization of Wireless Sensor Network/ Internet of Thing Management Systems (Cont.)",
            additionalDetails: '"Throughput Optimization for NOMA Energy Harvesting Cognitive Radio with Multi-UAV-Assisted Relaying under Security Constraints," IEEE Transactions on Cognitive Communications and Networking, Nov. 2022. (IF=6.359)',
        },
    ];
    return (
        <div className='my-16 bg-white rounded-xl shadow-md p-6 m-5'>
            <div className='max-w-4xl mx-auto'>
                <div className="">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800">
                        Research Projects
                    </h2>

                    {researchProjects.map((project, index) => (
                       <div key={index} className="mb-4 flex gap-4 items-start"> 

                            {/* Icon container with fixed size and border */}
                            <div className='flex items-center justify-center border border-red-600 p-2 rounded-full'>
                                <FaExternalLinkAlt className="text-red-600 text-md" />
                            </div>

                            <div>
                                <strong className="text-gray-700">{project.title}</strong>

                                <ul className="ml-6 mt-1 text-gray-600">
                                    {project.details && <li>{project.details}</li>}
                                    {project.additionalDetails && <li>{project.additionalDetails}</li>}
                                </ul>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ResearchProjectsSection;
