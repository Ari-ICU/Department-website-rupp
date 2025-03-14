import React, { useRef } from 'react';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../../assets/new/3.jpg';
import image2 from '../../assets/new/4.jpg';
import image3 from '../../assets/new/5.jpg';

const UpcomingEvents = () => {
    const scrollContainerRef = useRef(null);

    const events = [
        {
            id: 1,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            category: 'Hackathons',
        },
        {
            id: 2,
            title: 'AI in Healthcare Symposium',
            imageUrl: image2,
            description: 'Exploring the latest advancements in AI for medical applications.',
            date: '15 Sep 2025',
            category: 'Conferences',
        },
        {
            id: 3,
            title: 'Web Development Workshop',
            imageUrl: image3,
            description: 'Hands-on workshop on building responsive web applications.',
            date: '05 Oct 2025',
            category: 'Workshops',
        },
        {
            id: 4,
            title: 'Data Science Meetup',
            imageUrl: image1,
            description: 'Networking event for data science enthusiasts and professionals.',
            date: '20 Oct 2025',
            category: 'Meetups',
        },
    ];


    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-between items-center mb-8">
                    <div className="mb-6 xl:mb-0">
                        <h2 className="text-3xl font-semibold mb-2">Current & Upcoming Events</h2>
                        <p className="text-gray-600 mt-6 max-w-3xl">
                            Engage in insightful discussions, network with industry experts, and explore career opportunities through our upcoming academic and professional events.
                        </p>
                    </div>
                    <div className='flex gap-4 p-2'>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>

                        {/* Filter Button */}
                        <button className="flex items-center gap-2 bg-red-800 text-white xl:px-4 xl:py-2 px-2 rounded-full shadow hover:bg-red-900 transition">
                            <FaFilter className='xl:text-lg text-[12px]' />
                            <span className='text-[12px] xl:text-lg'>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Events Section */}
                <div className="py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <Link to={`/news&events/${event.id}`} key={event.id} className="block">
                                <div className="bg-white rounded-2xl shadow-md flex flex-col xl:flex-row justify-center min-w-96 hover:shadow-lg transition-shadow duration-300">
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
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {event.description}
                                        </p>
                                        <span className="text-sm text-gray-500 flex items-center gap-4 mt-4">
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
