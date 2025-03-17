import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { PiGraduationCapDuotone } from "react-icons/pi";
import rupp from "../../assets/about/2.png";

const InnovationSection = () => {
    return (

     <div className='my-16'>
           <div className="container mx-auto px-4">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
                {/* Left Section with Text and Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    className="max-w-full xl:max-w-[679px] p-6 rounded-lg order-2 xl:order-1"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg lg:text-3xl font-bold text-gray-800 mb-4"
                    >
                        Driving Innovation, Education & Impact
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-gray-600 mb-4 text-[12px] xl:text-[14px]"
                    >
                        To be Cambodia’s flagship university with regional standing in teaching and learning, research and innovation, and social engagement.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-gray-600 mb-4 text-[12px] xl:text-[14px]"
                    >
                        To contribute to national, regional, and global sustainable development and the preservation of national cultural and natural heritage by:
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="space-y-4 text-gray-600 mb-6 text-[12px] xl:text-[14px]"
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

                    <div className='grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 mb-6 text-[12px] xl:text-[14px]'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='flex gap-4 border border-red-800 p-4 rounded-xl items-center'
                        >
                            <div className='border border-red-800 rounded-full p-2'>
                                <PiGraduationCapDuotone size={25} className='text-red-800' />
                            </div>
                            <p>We strive to enhance teaching and learning while fostering research and innovation to drive technological advancement.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className='flex gap-4 border border-red-800 p-4 rounded-xl items-center'
                        >
                            <div className='border border-red-800 rounded-full p-2'>
                                <SlPeople size={25} className='text-red-800' />
                            </div>
                            <p>Beyond academics, we develop leaders, uphold sustainability, preserve heritage, and expand social engagement.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Section with Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='container mx-auto w-full xl:w-[600px] h-auto xl:h-[510px] md:h-[350px] order-1 xl:order-2'
                >
                    <img
                        src={rupp}
                        alt="rupp"
                        className='w-full h-full object-cover rounded-3xl'
                    />
                </motion.div>
            </div>
        </div>
     </div>
    );
};

export default InnovationSection;