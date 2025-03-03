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
        <div className="bg-white ">
            <div className="max-w-7xl mx-auto ">
                {/* Header Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between"
                >
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl font-extrabold text-gray-900"
                        >
                            Events & News
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-1 text-base text-gray-500"
                        >
                            Engage with cutting-edge workshops, conferences, and networking opportunities.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto mt-4 md:mt-0"
                    >
                        <Link to='' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                            <span className="mr-2">View All</span>
                            <FaArrowRight className="text-red-800" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Horizontal Scrolling Container with Motion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto py-2"
                >
                    <div className="grid grid-flow-col auto-cols-max gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl px-2 shadow-md overflow-hidden flex flex-col md:flex-row w-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Image Column with Motion */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="w-full md:w-1/2 mx-auto flex justify-center items-center"
                                >
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-56 object-cover rounded-2xl"
                                    />
                                </motion.div>

                                {/* Content Column with Motion */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="p-6 w-full md:w-1/2"
                                >
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
                                        <Link
                                            to={event.registerLink}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full text-sm"
                                        >
                                            Register Now
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EventsNews;