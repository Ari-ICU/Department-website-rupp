import React from 'react';
import { FaFilter, FaCalendarAlt } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import image1 from '../../assets/img/undergraduate/bank/b1.png';

const ScholarshipSection = () => {
    const navigate = useNavigate();

    const scholarships = [
        {
            id: 1,
            tag: "Woori Bank",
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue a bachelor’s degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: image1,
        },
        {
            id: 2,
            tag: "Woori Bank",
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue a bachelor’s degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: image1,
        },
        {
            id: 3,
            tag: "Woori Bank",
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue a bachelor’s degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: image1,
        },
        {
            id: 4,
            tag: "Woori Bank",
            title: 'Scholarship Opportunity with Woori Bank',
            description: 'Woori offers scholarship for students who pursue a bachelor’s degree at Royal University of Phnom Penh.',
            deadline: '31 Mar 2025',
            imageUrl: image1,
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Available Scholarships</h2>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-l-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md ml-2">
                            <FaFilter /> {/* Filter icon */}
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {scholarships.map((scholarship) => (
                        <div key={scholarship.id} className="bg-white flex flex-col xl:flex-row rounded-lg shadow-md p-4 items-center overflow-hidden">
                            <img
                                src={scholarship.imageUrl}
                                alt="Scholarship"
                                className="w-78 h-68 mx-auto rounded-2xl object-cover"
                            />
                            <div className="p-4">
                                <p className='text-red-800 mb-4'>{scholarship.tag}</p>
                                <h3 className="text-lg font-semibold mb-2">{scholarship.title}</h3>
                                <p className="text-gray-600 mb-2">{scholarship.description}</p>
                                <p className="text-md py-4 text-gray-500 mb-2 flex items-center">
                                    <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
                                    Deadline: {scholarship.deadline}
                                </p>
                                <button 
                                    className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-xl cursor-pointer"
                                    onClick={() => navigate(`/scholars/${scholarship.id}`)} 
                                >
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
