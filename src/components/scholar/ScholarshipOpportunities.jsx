import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/undergraduate/bank/b1.png';

const ScholarshipOpportunities = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    let scrollInterval;

    const events = [
        {
            id: 1,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 2,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 3,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 4,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 5,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
    ];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let currentScroll = 0;
        const scrollSpeed = 1.5; // Smooth scroll speed

        const autoScroll = () => {
            currentScroll += scrollSpeed;
            if (currentScroll > scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                currentScroll = 0; // Reset scrolling when reaching the end
            }
            scrollContainer.scrollTo({ left: currentScroll, behavior: 'smooth' });
        };

        scrollInterval = setInterval(autoScroll, 30);

        // Pause scrolling on hover
        scrollContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        scrollContainer.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col xl:flex-row justify-between items-center mb-8"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="xl:text-3xl text-xl font-semibold text-gray-900"
                    >
                        Check Out Scholarship Opportunities
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-4 xl:mt-0"
                    >
                        <Link to="/scholars" className="flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1">
                            <span className="mr-2 xl:text-sm text-[12px]">View All</span>
                            <FaArrowRight className="text-red-800" />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto py-2"
                >
                    <div ref={scrollContainerRef} className="flex space-x-6">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-md overflow-hidden flex justify-center items-center flex-shrink-0 max-w-xl "
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-full h-full p-2 flex justify-center items-center">
                                    <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover rounded-2xl" />
                                </div>

                                <div className="p-6 w-full">
                                    {event.category && (
                                        <span className="text-xs font-semibold text-red-600 uppercase bg-indigo-100 px-2 py-1 rounded-full">
                                            {event.category}
                                        </span>
                                    )}
                                    <h3 className="mt-2 text-lg font-semibold text-gray-900">{event.title}</h3>
                                    <p className="mt-2 text-sm text-gray-800">{event.description}</p>
                                    <span className="text-sm text-gray-800">{event.date}</span>
                                    <div className="mt-4">
                                        <button
                                            className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-xl"
                                            onClick={() => navigate(`/scholars/${event.id}`)}
                                        >
                                            View Detail
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScholarshipOpportunities;