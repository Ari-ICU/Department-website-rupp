import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/dr-heng-sovanrith.jpg';

const EventsNews = () => {
    const events = [
        {
            id: 1,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            registerLink: '#',
            category: 'Hackathons',
        },
        {
            id: 2,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            registerLink: '#',
            category: 'Hackathons',
        },
        {
            id: 3,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            registerLink: '#',
            category: 'Hackathons',
        },
        {
            id: 4,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            registerLink: '#',
            category: 'Hackathons',
        },
        {
            id: 5,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            registerLink: '#',
            category: 'Hackathons',
        },
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-extrabold text-gray-900"
                        >
                            Events & News
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-1 text-base text-gray-500"
                        >
                            Engage with cutting-edge workshops, conferences, and networking opportunities.
                        </motion.p>
                    </div>
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <Link to='' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                            <span className="mr-2">View All</span>
                            <FaArrowRight className="text-red-800" />
                        </Link>
                    </div>
                </div>

                {/* Horizontal Scrolling Container */}
                <div className="overflow-x-auto py-2">
                    <div className="grid grid-flow-col auto-cols-max gap-8">
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Image Column */}
                                <div className="w-full md:w-1/2 mx-auto flex justify-center items-center">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>


                                {/* Content Column */}
                                <div className="p-6 w-full md:w-1/2">
                                    {event.category && (
                                        <span className="text-xs font-semibold text-indigo-600 uppercase bg-indigo-100 px-2 py-1 rounded-full">
                                            {event.category}
                                        </span>
                                    )}
                                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                        {event.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {event.description}
                                    </p>
                                    <span className="text-sm text-gray-500">{event.date}</span>
                                    <div className="mt-4 flex items-center justify-between">
                                        <a
                                            href={event.registerLink}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full text-sm"
                                        >
                                            Register Now
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsNews;
