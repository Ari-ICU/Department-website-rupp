import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa";
import { MdSchool } from "react-icons/md"
import rupp from "../../assets/img/rupp1.png";

const InnovationSection = () => {
    return (
        <div className='container  mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 py-2 px-6 lg:px-12"
                >
                    <div className="max-w-7xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-gray-800 mb-6"
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

                        {/* Updated List with React Icons */}
                        <motion.ul
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-4 text-gray-600 mb-6"
                        >
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                equipping our students with the essential knowledge, skills, values, and attitudes required by the information- and knowledge-based society;
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                providing high quality research and innovation; and being actively engaged with society.
                            </li>

                        </motion.ul>
                        {/* Program Info */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                            <div className='flex flex-wrap gap-4 border border-red-800 p-2 rounded-xl justify-center items-center'>
                                <div className='border border-red-800 rounded-4xl p-2'>
                                    <MdSchool size={25} className='text-red-800' />
                                </div>
                                <p className="text-[16px]">We strive to enhance teaching and learning while fostering research and innovation to drive technological advancement.</p>
                            </div>
                            <div className='flex flex-wrap gap-4 border border-red-800 p-2 rounded-xl justify-center items-center'>
                                <div className='border border-red-800 rounded-4xl p-2'>
                                    <MdSchool size={25} className='text-red-800' />
                                </div>
                                <p className="text-[16px] ">Beyond academics, we develop leaders, uphold sustainability, preserve heritage, and expand social engagement.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={rupp}
                        alt="rupp"
                        className='w-full has-full object-cover rounded-3xl'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default InnovationSection;
