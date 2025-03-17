import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SelectedPublicationsSection = () => {
    const selectedPublications = [
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
        <div className="bg-white my-16 rounded-xl shadow-md">
            <div className='max-w-4xl mx-auto p-4'>
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                    Selected Publications
                </h2>

                {selectedPublications.map((project, index) => (
                   <div key={index} className="mb-4 flex gap-4 items-start"> 

                        {/* Icon container with fixed size and border */}
                        <div className='flex items-center justify-center border border-red-600 p-2 rounded-full'>
                            <FaExternalLinkAlt className="text-red-600 text-md" />
                        </div>

                        <div>
                            <strong className="text-gray-700">{project.title}</strong>

                            <ul className="ml-6 mt-1 text-gray-600 text-justify">
                                {project.details && <li>{project.details}</li>}
                                {project.additionalDetails && <li>{project.additionalDetails}</li>}
                            </ul>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default SelectedPublicationsSection;