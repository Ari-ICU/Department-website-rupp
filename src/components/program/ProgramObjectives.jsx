import React from 'react';
import { motion } from 'framer-motion';
import { MdSchool, MdPeople, MdVerified } from 'react-icons/md';
import p3 from '../../assets/program/p3.png';
import p4 from '../../assets/program/p4.png';

const ProgramObjectives = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
        >
            <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* Right Column - Key Metrics (Image First in Mobile) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="xl:w-1/2 w-full flex flex-col items-center relative order-1 xl:order-2"
                >
                    <div className='flex flex-col sm:flex-row gap-4 items-center'>
                        <div className='w-full sm:w-[325px] sm:h-[211px]'>
                            <img src={p3} alt="" className='w-full h-full object-cover rounded-tr-[50px] sm:rounded-tr-[100px]' />
                        </div>
                        <div className='w-full sm:w-[309px] sm:h-[418px]'>
                            <img src={p4} alt="" className='w-full h-full object-cover rounded-tr-[50px] sm:rounded-tr-[100px]' />
                        </div>
                    </div>

                    <div className='absolute bottom-4 sm:bottom-0 z-10 bg-white p-4 rounded-lg shadow-md w-11/12 sm:w-52 sm:h-34 text-center'>
                        <h2 className="text-md sm:text-lg font-bold flex items-center justify-center mb-4">
                            <MdVerified className="mr-2 text-xl sm:text-2xl text-green-500" />
                            Key Metrics
                        </h2>
                        <div className="text-lg sm:text-xl font-bold text-blue-500">2000+</div>
                        <p className="text-sm sm:text-md mt-2">Student Enrollments</p>
                    </div>
                </motion.div>

                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="xl:w-1/2 w-full order-2 xl:order-1"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Program Objectives</h2>
                    <p className="text-base sm:text-lg mb-6">
                        Empowering Students with Cutting-Edge Knowledge and Industry-Ready Skills
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MdSchool size={44} className="text-blue-500" />
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">Robust Technical Foundation:</h3>
                                <p className="text-sm sm:text-base">Gain expertise in computing theories, programming, software development, AI, cybersecurity, web development, and cloud computing.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <MdPeople size={44} className="text-blue-500" />
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">Professional and Ethical Growth:</h3>
                                <p className="text-sm sm:text-base">Develop problem-solving, teamwork, leadership, and ethical awareness to excel in industry, research, and entrepreneurship.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProgramObjectives;