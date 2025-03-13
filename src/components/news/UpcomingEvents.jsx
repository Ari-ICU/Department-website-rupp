import React, { useRef } from 'react';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import p1 from '../../assets/new/2.png';

const UpcomingEvents = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    const events = [
        {
            id: 'event-1',
            title: 'Jobify Career Fair 2025',
            description: 'Jobify proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
        {
            id: 'event-2',
            title: 'Tech Innovation Summit 2025',
            description: 'Join us for an exciting event showcasing the latest tech trends...',
            date: '15 Sep 2025',
            imageUrl: p1,
        },
        {
            id: 'event-3',
            title: 'AI & Data Science Conference',
            description: 'Engage with top AI experts and data scientists at this conference...',
            date: '10 Oct 2025',
            imageUrl: p1,
        },
        {
            id: 'event-3',
            title: 'AI & Data Science Conference',
            description: 'Engage with top AI experts and data scientists at this conference...',
            date: '10 Oct 2025',
            imageUrl: p1,
        },
        {
            id: 'event-3',
            title: 'AI & Data Science Conference',
            description: 'Engage with top AI experts and data scientists at this conference...',
            date: '10 Oct 2025',
            imageUrl: p1,
        },
        {
            id: 'event-3',
            title: 'AI & Data Science Conference',
            description: 'Engage with top AI experts and data scientists at this conference...',
            date: '10 Oct 2025',
            imageUrl: p1,
        }
    ];

    const handleEventClick = (eventId) => {
        navigate(`/events&news/${eventId}`);
    };

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
                                className="border rounded-full py-2 xl:px-4 px-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
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
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="py-2"
                >
                    <div ref={scrollContainerRef} className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col xl:flex-row cursor-pointer hover:shadow-lg transition duration-300"
                                onClick={() => handleEventClick(event.id)}
                            >
                                {/* Image Section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="w-full xl:w-1/2 flex justify-center items-center"
                                >
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-56 object-cover rounded-2xl"
                                    />
                                </motion.div>

                                {/* Event Details */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="p-6 w-full xl:w-1/2"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{event.description}</p>
                                    <span className="text-sm text-gray-500 flex items-center gap-2 mt-4">
                                        <FaCalendarAlt />
                                        {event.date}
                                    </span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
