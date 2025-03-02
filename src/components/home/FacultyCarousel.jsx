import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/dr-heng-sovanrith.jpg';

const facultyMembers = [
    { name: 'John Doe', position: 'Professor', image: image1 },
    { name: 'Jane Smith', position: 'Assistant Professor', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },
    { name: 'Albert Lee', position: 'Lecturer', image: image1 },

    // Add more faculty members as needed
];

const FacultyCarousel = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <div className="relative max-w-7xl mx-auto py-10 px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-2/3"> {/* Adjust width for text */}
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-semibold tracking-wide uppercase"
                            >
                                Meet With Our Faculty
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-2 text-gray-900"
                            >
                                Professor: Inspiring Minds, Nurturing Curiosity, and Shaping the Future of Knowledge and Innovation
                            </motion.p>
                        </div>
                        <div className="w-full md:w-auto mt-4 md:mt-0">
                            <Link to='' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                                <span className="mr-2">View All</span>
                                <FaArrowRight className="text-red-800" />
                            </Link>
                        </div>
                    </div>


                    <motion.div
                        className="overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex space-x-8 overflow-x-auto py-6">
                            {facultyMembers.map((faculty, index) => (
                                <motion.div
                                    key={index}
                                    className="w-96 h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative w-72 h-72 mb-4">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full rounded-2xl object-cover"
                                        />
                                        {/* Social Media Icons */}
                                        <motion.div
                                            className="absolute top-2 right-2 space-x-2 space-y-4 text-center bg-gray-400/50 py-6 px-2 rounded-2xl flex flex-col justify-center items-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {/* Facebook Link */}
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.3 }}
                                                className="bg-black p-2 rounded-lg text-center"
                                            >
                                                <Link to="#" className="text-white text-2xl hover:text-blue-600">
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
        </div>
    );
};

export default FacultyCarousel;
