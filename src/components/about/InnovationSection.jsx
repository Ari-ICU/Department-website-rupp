import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import rupp from "../../assets/img/rupp1.png";

const InnovationSection = () => {
    return (
        <div className="max-w-[1334px] mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Added py-8 for padding */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8"> {/* Adjusted flex direction for responsiveness */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[679px] h-auto lg:h-[414px] bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg" // Adjusted width and height for responsiveness
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl sm:text-4xl font-bold text-gray-800 mb-4"
                    >
                        Driving Innovation, Education & Impact
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mb-4 text-[16px]"
                    >
                        To be Cambodia’s flagship university with regional standing in teaching and learning, research and innovation, and social engagement.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mb-4 text-[16px]"
                    >
                        To contribute to national, regional, and global sustainable development and the preservation of national cultural and natural heritage by:
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4 text-gray-600 mb-6"
                    >
                        <li className="flex items-start">
                            <div className='border border-red-800 p-2 rounded-full mr-2'>
                                <FaCheck className="text-red-800" />
                            </div>
                            <span>equipping our students with the essential knowledge, skills, values, and attitudes required by the information- and knowledge-based society;</span>
                        </li>
                        <li className="flex items-start">
                            <div className='border border-red-800 p-2 rounded-full mr-2'>
                                <FaCheck className="text-red-800" />
                            </div>
                            <span>providing high quality research and innovation; and being actively engaged with society.</span>
                        </li>
                    </motion.ul>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                        <div className='flex gap-4 border border-red-800 p-4 rounded-xl items-start'>
                            <div className='border border-red-800 rounded-full p-2'>
                                <MdSchool size={25} className='text-red-800' />
                            </div>
                            <p className="text-[16px]">We strive to enhance teaching and learning while fostering research and innovation to drive technological advancement.</p>
                        </div>
                        <div className='flex gap-4 border border-red-800 p-4 rounded-xl items-start'>
                            <div className='border border-red-800 rounded-full p-2'>
                                <MdSchool size={25} className='text-red-800' />
                            </div>
                            <p className="text-[16px]">Beyond academics, we develop leaders, uphold sustainability, preserve heritage, and expand social engagement.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='w-full lg:w-[600px] h-auto lg:h-[510px]' // Adjusted width and height for responsiveness
                >
                    <img
                        src={rupp}
                        alt="rupp"
                        className='w-full h-full object-cover rounded-3xl'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default InnovationSection;