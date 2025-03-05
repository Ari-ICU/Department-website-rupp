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
            className="container mx-auto"
        >
            <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="xl:order-1 order-2" // Added order-2 for large screens
                >
                    <h2 className="text-3xl font-bold mb-4">Program Objectives</h2>
                    <p className="text-lg mb-6">
                        Empowering Students with Cutting-Edge Knowledge and Industry-Ready Skills
                    </p>

                    <div className="mb-4 flex flex-col xl:flex-row  gap-4">
                        <div className="flex items-center justify-center">
                            <MdSchool size={34} className="mr-2 text-xl text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Robust Technical Foundation:
                            </h3>
                            <p>Gain expertise in computing theories, programming, software development, AI, cybersecurity, web development, and cloud computing.</p>
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col xl:flex-row  gap-4">
                    <div className="flex items-center justify-center">
                            <MdPeople size={34} className="mr-2 text-xl text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 flex items-center">
                                Professional and Ethical Growth:
                            </h3>

                            <p>Develop problem-solving, teamwork, leadership, and ethical awareness to excel in industry, research, and entrepreneurship.</p>

                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative flex flex-col items-center justify-center xl:order-2 order-1" // Added order-1 for large screens
                >
                    <div className='flex items-center justify-center'>
                        <div className='lg:h-[211px] lg:w-[325px] w-full h-full'>
                            <img src={p3} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='lg:w-[309px] lg:h-[418px]'>
                            <img src={p4} alt="" className='w-full h-full object-cover rounded-2xl' />
                        </div>
                    </div>

                    <div className='absolute bottom-0 z-10 bg-white p-4 rounded-lg shadow-md w-full xl:w-52 xl:h-34'>
                        <h2 className="text-lg font-bold text-center mb-4 flex items-center"> {/* Removed xl:text-2xl */}
                            <MdVerified className="mr-2 text-2xl text-green-500" />
                            Key Metrics
                        </h2>
                        <div className="text-xl text-center font-bold text-blue-500">2000+</div> {/* Removed xl:text-4xl */}
                        <p className="text-md text-center mt-2">Student Enrollments</p> {/* Removed xl:text-lg */}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProgramObjectives;