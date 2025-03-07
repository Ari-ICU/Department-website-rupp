import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { PiCodesandboxLogoDuotone } from "react-icons/pi";

const StudyOverview = () => {
    const [selectedYear, setSelectedYear] = useState(1);
    const studyPlan = [
        {
            year: 1,
            title: 'Year 1',
            subtitle: 'Foundational Courses',
            color: 'bg-red-600',
            courses: [
                'Introduction to computing, programming (Python, C++), and problem-solving.',
                'Basic mathematics (discrete math, logic, linear algebra).',
                'Understanding hardware, digital logic, and computer architecture.',
                'Cybersecurity fundamentals and communication skills.'
            ]
        },
        {
            year: 2,
            title: 'Year 2',
            subtitle: 'Core Computing Courses',
            color: 'bg-blue-600',
            courses: [
                'Advanced programming (Java, C#) and data structures & algorithms.',
                'Operating systems, database management (SQL, NoSQL), and networking.',
                'Software engineering principles and Agile methodologies.'
            ]
        },
        {
            year: 3,
            title: 'Year 3',
            subtitle: 'Advanced Topics & Specialization',
            color: 'bg-green-600',
            courses: [
                'AI & machine learning, web development, and mobile app development.',
                'Cybersecurity, cloud computing (DevOps), and IoT/embedded systems.'
            ]
        }
    ];

    return (
        <div className="my-16 py-4 bg-white"> {/* Added default background */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container mx-auto text-center px-4 cursor-pointer"
            >
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold mb-4"
                >
                    What We Will Study
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg xl:max-w-[743px] w-full mx-auto text-gray-600 mb-8"
                >
                    From Core Computing Foundations to Advanced Specializations and Industry-Ready Skills in AI, Cybersecurity, and Software Development.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {studyPlan.map((year, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                            viewport={{ once: true }}
                            className={`rounded-xl p-6 shadow-md ${selectedYear === year.year ? 'bg-red-900' : 'bg-white'}`}
                            onClick={() => setSelectedYear(year.year)}
                        >
                           <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                                <PiCodesandboxLogoDuotone size={44} className={`${selectedYear === year.year ? 'text-white' : 'text-black'}`} />
                            </div>
                            <h3 className={`text-2xl font-semibold mb-2 text-start ${selectedYear === year.year ? 'text-white' : 'text-black'}`}>
                                {year.title}
                            </h3>
                            <p className={`mb-4 text-start ${selectedYear === year.year ? 'text-gray-300' : 'text-black'}`}>
                                {year.subtitle}
                            </p>
                            <ul className={`text-left text-sm space-y-6 ${selectedYear === year.year ? 'text-gray-400' : 'text-gray-600'}`}>
                                {year.courses.map((course, i) => (
                                    <li key={i} className="flex">
                                        <div className="flex mr-2 md:mr-4 mt-2">
                                            <FaCheck size={18} className={`${selectedYear === year.year ? 'text-gray-300' : 'text-gray-500'}`} />
                                        </div>
                                        <span className="md:text-base">{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default StudyOverview;