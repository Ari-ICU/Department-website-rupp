import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/dr-heng-sovanrith.png';

const facultyMembers = [
    { name: 'John Doe', position: 'Professor', image: image1 },
    { name: 'Jane Smith', position: 'Assistant Professor', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },
    { name: 'Emily White', position: 'Senior Lecturer', image: image1 },
    { name: 'David Brown', position: 'Associate Professor', image: image1 },
    { name: 'Sarah Green', position: 'Professor Emeritus', image: image1 },
    { name: 'Michael Black', position: 'Teaching Fellow', image: image1 },
    { name: 'Olivia Gray', position: 'Research Fellow', image: image1 },
];

const FacultyCarousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const cardWidth = 384; // 96 * 4

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
                const nextScroll = scrollPosition + cardWidth;
                if (nextScroll > maxScroll) {
                    setScrollPosition(0);
                } else {
                    setScrollPosition(nextScroll);
                }
            }
        }, 3000); 

        return () => clearInterval(interval);
    }, [scrollPosition]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [scrollPosition]);

    return (
        <div className='relative w-full mx-auto  bg-white'>
            <div className="container mx-auto px-4">
                {/* Header Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center mb-8"
                >
                    <div className="w-full md:w-2/3">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl font-semibold tracking-wide uppercase"
                        >
                            Meet With Our Faculty
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-2 text-gray-900"
                        >
                            Professor: Inspiring Minds, Nurturing Curiosity, and Shaping the Future <br /> of Knowledge and Innovation
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
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

                {/* Faculty Cards Section with Motion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden"
                >
                    <div ref={containerRef} className="flex space-x-8 overflow-x-auto py-6 scroll-smooth">
                        {facultyMembers.map((faculty, index) => (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-96 min-w-96 h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-72 h-72 mb-4 group">
                                    <img
                                        src={faculty.image}
                                        alt={faculty.name}
                                        className="w-full h-full rounded-2xl object-cover"
                                    />
                                    {/* Social Media Icons with Motion */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-2 right-2 space-x-2 space-y-4 text-center bg-gray-400/50 py-6 px-2 rounded-2xl flex flex-col justify-center items-center"
                                    >
                                        {/* Facebook Link */}
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-black p-2 rounded-lg text-center"
                                        >
                                            <Link to="#" className="text-white text-xl hover:text-blue-600">
                                                <FaFacebookF />
                                            </Link>
                                        </motion.div>

                                        {/* Telegram Link */}
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-black p-2 rounded-lg text-center"
                                        >
                                            <Link to="#" className="text-white text-xl hover:text-blue-400">
                                                <FaTelegramPlane />
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <h3 className="text-xl font-semibold">{faculty.name}</h3>
                                <p className="text-sm text-gray-500">{faculty.position}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FacultyCarousel;