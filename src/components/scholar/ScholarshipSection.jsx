import React, { useState } from 'react';
import { FaFilter, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/img/undergraduate/bank/b1.png';
import aba from '../../assets/bank/aba.png';
import canadia from '../../assets/bank/canadia.png';




const ScholarshipSection = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

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
            tag: "ABA Bank",
            title: 'ABA Bank Scholarship Program',
            description: 'Financial aid for outstanding students in business and finance.',
            deadline: '15 Apr 2025',
            imageUrl: aba,
        },
        {
            id: 3,
            tag: "Woori Bank",
            title: 'Exclusive Woori Bank Scholarship',
            description: 'Helping students achieve their academic dreams at RUPP.',
            deadline: '10 May 2025',
            imageUrl: image1,
        },
        {
            id: 4,
            tag: "Canadia Bank",
            title: 'Canadia Bank Education Grant',
            description: 'A scholarship supporting talented students in economics.',
            deadline: '30 Jun 2025',
            imageUrl: canadia,
        },
    ];

    // Extract unique tags for filtering
    const tags = [...new Set(scholarships.map(scholarship => scholarship.tag))];

    // Apply search filter
    const searchResults = scholarships.filter(scholarship =>
        scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply category filter
    const filteredResults = selectedTag
        ? scholarships.filter(scholarship => scholarship.tag === selectedTag)
        : scholarships;

    // Combine results
    const finalScholarships = selectedTag ? filteredResults : searchResults;

    return (
        <div className="my-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-8 mb-6">
                    <h2 className="text-2xl font-semibold">Available Scholarships</h2>
                    <div className='flex flex-col sm:flex-row gap-6 sm:gap-4 '>
                        {/* Search Input */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>

                        {/* Filter Dropdown with React Icon */}
                        <div className="relative w-full">
                            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-50" />
                            <select
                                className="border rounded-full py-2 pl-10   bg-red-800 text-gray-50 focus:outline-none focus:ring focus:border-blue-300 appearance-none"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                <option value="">All</option>
                                {tags.map((tag, index) => (
                                    <option key={index} value={tag}>{tag}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Scholarships List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {finalScholarships.length > 0 ? (
                        finalScholarships.map((scholarship) => (
                            <div key={scholarship.id} className="bg-white flex flex-col xl:flex-row rounded-lg shadow-md p-4 items-center overflow-hidden">
                                <img
                                    src={scholarship.imageUrl}
                                    alt="Scholarship"
                                    className="w-78 h-68 mx-auto rounded-2xl object-cover"
                                />
                                <div className="p-4">
                                    <p className='text-red-800 mb-4'>{scholarship.tag}</p>
                                    <h3 className="text-lg font-semibold mb-2">{scholarship.title}</h3>
                                    <p className="text-gray-800 mb-2">{scholarship.description}</p>
                                    <p className="text-md py-4 text-gray-800 mb-2 flex items-center">
                                        <FaCalendarAlt className="mr-2" />
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
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No scholarships found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScholarshipSection;
