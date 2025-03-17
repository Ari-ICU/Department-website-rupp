import React, { useState } from 'react';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import image1 from '../../assets/new/3.jpg';
import image2 from '../../assets/new/4.jpg';
import image3 from '../../assets/new/5.jpg';

const UpcomingEvents = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const events = [
        { id: 1, title: 'Guest Lecture on Artificial Intelligence', imageUrl: image1, description: 'Annual university tournament for basketball teams. Come cheer...', date: '22 Aug 2025', category: 'Hackathons' },
        { id: 2, title: 'AI in Healthcare Symposium', imageUrl: image2, description: 'Exploring the latest advancements in AI for medical applications.', date: '15 Sep 2025', category: 'Conferences' },
        { id: 3, title: 'Web Development Workshop', imageUrl: image3, description: 'Hands-on workshop on building responsive web applications.', date: '05 Oct 2025', category: 'Workshops' },
        { id: 4, title: 'Data Science Meetup', imageUrl: image1, description: 'Networking event for data science enthusiasts and professionals.', date: '20 Oct 2025', category: 'Meetups' },
    ];

    // Extract unique categories for the dropdown
    const categories = [...new Set(events.map(event => event.category))];

    // Filtered events based on search and selected category
    const filteredEvents = events.filter(event =>
        (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === '' || event.category === selectedCategory)
    );

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-between items-center mb-8">
                    <div className="mb-6 xl:mb-0">
                        <h2 className={`text-3xl font-normal mb-4 ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`} lang={currentLanguage}>
                            Current & Upcoming Events
                        </h2>
                        <p className="text-gray-600 mt-6 max-w-3xl">
                            Engage in insightful discussions, network with industry experts, and explore career opportunities through our upcoming academic and professional events.
                        </p>
                    </div>
                    <div className='flex gap-4 p-2'>
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>

                        {/* Filter Dropdown */}
                        <div className="relative">
                            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-50" />
                            <select
                                className="border rounded-full py-2 pl-10 pr-4 bg-red-800 text-gray-50 focus:outline-none focus:ring focus:border-blue-300 appearance-none"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredEvents.map((event) => (
                            <Link key={event.id} to={`/news&events/${event.id}`} className="block">
                                <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col xl:flex-row justify-center items-center hover:shadow-lg">
                                    <div className="mx-auto xl:w-1/2 flex justify-center items-center">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-56 object-cover rounded-2xl"
                                        />
                                    </div>

                                    <div className="p-6 w-full md:w-1/2">
                                        {event.category && (
                                            <span className="text-xs font-semibold text-red-600 uppercase bg-indigo-100 px-2 py-1 rounded-full">
                                                {event.category}
                                            </span>
                                        )}
                                        <h5 className={`text-lg font-normal mb-4 ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`} lang={currentLanguage}>
                                            {event.title}
                                        </h5>
                                        <p className="mt-2 text-sm text-gray-800">
                                            {event.description}
                                        </p>
                                        <span className="text-sm text-gray-800 flex items-center gap-2 mt-4">
                                            <FaCalendarAlt />
                                            {event.date}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
