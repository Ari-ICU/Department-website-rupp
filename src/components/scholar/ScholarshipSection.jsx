import React from 'react';
import { FaFilter, FaCalendarAlt } from 'react-icons/fa'; 

const ScholarshipSection = () => {
    const scholarships = [
        {
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: 'YOUR_IMAGE_URL_HERE',
        },
        {
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: 'YOUR_IMAGE_URL_HERE',
        },
        {
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: 'YOUR_IMAGE_URL_HERE',
        },
        {
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: 'YOUR_IMAGE_URL_HERE',
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Available Scholarship</h2>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-l-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md">
                            {/* Add search icon here */}
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md ml-2">
                            <FaFilter /> {/* Add the filter icon here */}
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {scholarships.map((scholarship, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={scholarship.imageUrl}
                                alt="Scholarship"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{scholarship.title}</h3>
                                <p className="text-gray-600 mb-2">{scholarship.description}</p>
                                <p className="text-sm text-gray-500 mb-2 flex items-center">
                                    <FaCalendarAlt className="mr-2" /> {/* Add the calendar icon */}
                                    Deadline: {scholarship.deadline}
                                </p>
                                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                                    View Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScholarshipSection;