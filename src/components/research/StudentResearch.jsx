import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import image1 from "../../assets/research/3.png";
import image2 from "../../assets/research/4.png";
import FilterComponent from './FilterComponent';

const bottomSections = [
    {
        id: 1,
        title: 'Software Development',
        description: 'Software engineering is one of the most sought-after careers.',
        image: image1,
    },
    {
        id: 2,
        title: 'Data Science and Analytics',
        description: 'Data Science is rapidly growing, offering promising opportunities.',
        image: image2,
    },
    {
        id: 3,
        title: 'Artificial Intelligence',
        description: 'AI is transforming industries and the world.',
        image: image1,
    },
    {
        id: 4,
        title: 'Machine Learning',
        description: 'Machine Learning is a subset of AI that is revolutionizing industries.',
        image: image1,
    },
    // Add more sections here
];

const buttons = [
    { icon: <MdComputer className="mr-2" />, label: "Led By Asst. Prof. Dr. Heng Sovannarith" },
    // Add more buttons here if necessary
];

const StudentResearch = () => {
    const navigate = useNavigate();

    // State for search and filter
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    // Filter sections based on search term and selected filter
    const filteredSections = bottomSections.filter((section) => {
        const matchesSearch =
            section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = selectedFilter
            ? section.title.toLowerCase().includes(selectedFilter.toLowerCase())
            : true;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-between items-center mb-8">
                    <div className="mb-6 xl:mb-0">
                        <h2 className="text-3xl font-semibold mb-2">Students Research</h2>
                        <p className="text-gray-600 mt-6 max-w-3xl">
                            A Deep Dive into Computer Science Research: From Fundamentals to Future Innovations
                        </p>
                    </div>
                    <div className="flex gap-4 p-2 items-center">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search for research..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-blue-300 w-full"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={() => setSelectedFilter(selectedFilter ? '' : 'Data Science')}
                            className="flex items-center gap-2 bg-red-800 text-white px-4 py-2 rounded-full shadow hover:bg-red-900 cursor-pointer transition"
                        >
                            <FaFilter className="xl:text-lg text-[12px]" />
                            <span className="text-[12px] xl:text-lg">Filter</span>
                        </button>
                    </div>
                </div>
                <FilterComponent />

                {/* Bottom Sections */}
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-10">
                        {filteredSections.map((section) => (
                            <div
                                key={section.id}
                                className="bg-white rounded-lg shadow-md relative"
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                                    <div className="flex flex-col justify-center items-end py-4">
                                        {buttons.map((button, buttonIndex) => (
                                            <button
                                                key={buttonIndex}
                                                className="text-black xl:text-[12px] text-[10px] bg-gray-300 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"
                                            >
                                                {button.icon}
                                                {button.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div>
                                        <h3 className="xl:text-xl text-lg font-semibold mb-2">
                                            {section.title}
                                        </h3>
                                        <p className="mb-4 xl:text-[16px] text-[12px]">
                                            {section.description}
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigate(`/research/${section.id}`);
                                            }}
                                            className="bg-red-900 hover:bg-red-800 xl:text-[14px] text-[12px] text-white py-2 px-6 rounded-4xl flex items-center"
                                        >
                                            <MdExplore className="mr-2" />
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentResearch;
