import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { FaRegGrinBeam } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
// import icon from '../../../assets/icon/1.png';

const StudyOverview = () => {
    const { degree } = useParams();  // Get the selected degree (e.g., bachelor, doctoral, etc.)
    const [selectedYear, setSelectedYear] = useState(1);

    const studyPlans = {
        bachelor: [
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
            },
            {
                year: 4,
                title: 'Year 4',
                subtitle: 'Advanced Topics & Specialization',
                color: 'bg-green-600',
                courses: [
                    'AI & machine learning, web development, and mobile app development.',
                    'Cybersecurity, cloud computing (DevOps), and IoT/embedded systems.'
                ]
            }
        ],

        master: [
            {
                year: 1,
                title: 'Year 1',
                subtitle: 'Research Foundation',
                color: 'bg-purple-600',
                courses: [
                    'Advanced research methods and literature review techniques.',
                    'Data analysis and research tools.',
                    'Dissertation preparation and academic writing.'
                ]
            },
            {
                year: 2,
                title: 'Year 2',
                subtitle: 'Research and Development',
                color: 'bg-teal-600',
                courses: [
                    'In-depth research on selected topics.',
                    'Advanced topics in AI, machine learning, and data science.',
                    'Publications and conferences in related fields.'
                ]
            }
        ],
        doctoral: [
            {
                year: 1,
                title: 'Year 1',
                subtitle: 'Research Foundation',
                color: 'bg-purple-600',
                courses: [
                    'Advanced research methods and literature review techniques.',
                    'Data analysis and research tools.',
                    'Dissertation preparation and academic writing.'
                ]
            },
            {
                year: 2,
                title: 'Year 2',
                subtitle: 'Research and Development',
                color: 'bg-teal-600',
                courses: [
                    'In-depth research on selected topics.',
                    'Advanced topics in AI, machine learning, and data science.',
                    'Publications and conferences in related fields.'
                ]
            },
            {
                year: 3,
                title: 'Year 3',
                subtitle: 'Research and Development',
                color: 'bg-teal-600',
                courses: [
                    'In-depth research on selected topics.',
                    'Advanced topics in AI, machine learning, and data science.',
                    'Publications and conferences in related fields.'
                ]
            }
        ],
        diploma: [
            {
                year: 1,
                title: 'Year 1',
                subtitle: 'Core Diploma Courses',
                color: 'bg-yellow-600',
                courses: [
                    'Introduction to computing and programming.',
                    'Networking basics and introductory cybersecurity.',
                    'Database management and operating systems basics.'
                ]
            },
            {
                year: 2,
                title: 'Year 2',
                subtitle: 'Core Diploma Courses',
                color: 'bg-yellow-600',
                courses: [
                    'Introduction to computing and programming.',
                    'Networking basics and introductory cybersecurity.',
                    'Database management and operating systems basics.'
                ]
            }
        ]
    };

    const selectedStudyPlan = studyPlans[degree] || []; // Get the study plan based on degree

    useEffect(() => {
        // Ensure we set the first available year when the degree changes
        if (selectedStudyPlan.length > 0) {
            setSelectedYear(selectedStudyPlan[0].year);
        }
    }, [degree, selectedStudyPlan]);

    const getDynamicParagraphText = () => {
        switch (degree) {
            case 'bachelor':
                return 'From Core Computing Foundations to Advanced Specializations and Industry-Ready Skills.';
            case 'master':
                return 'Advanced Research and Development, with a Focus on Specialization.';
            case 'doctoral':
                return 'In-depth Research, Cutting-Edge Technologies, and Expert Knowledge.';
            case 'diploma':
                return 'Core Courses to Build a Strong Foundation in Computing and Networking.';
            default:
                return 'Explore Our Degree Programs and What You Will Learn.';
        }
    };

    return (
        <div className="my-16 py-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container mx-auto text-center px-4 "
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold mb-4"
                >
                    What We Will Study ({degree.charAt(0).toUpperCase() + degree.slice(1)})
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg xl:max-w-[743px] w-full mx-auto text-gray-600 mb-8"
                >
                    {getDynamicParagraphText()}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid justify-center gap-6"
                    style={{
                        gridTemplateColumns: selectedStudyPlan.length === 1 ? '1fr' :
                            selectedStudyPlan.length === 2 ? 'repeat(2, 1fr)' :
                                selectedStudyPlan.length === 3 ? 'repeat(3, 1fr)' :
                                    'repeat(4, 1fr)', // This sets the number of columns dynamically based on length

                        width: '100%', // Ensure it takes the full width available
                        margin: '0 auto' // Center the grid horizontally
                    }}
                >
                    {selectedStudyPlan.map((year, index) => (
                        <motion.div
                            key={year.year}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                            viewport={{ once: true }}
                            className={`rounded-xl p-6 shadow-md transition-all ${selectedYear === year.year ? 'bg-red-900' : 'bg-white'}`}
                            onClick={() => setSelectedYear(year.year)}
                          
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                                <FaRegGrinBeam size={32} className={`${selectedYear === year.year ? 'text-white' : 'text-black'}`} />
                            </div>
                            <h3 className={`text-2xl font-semibold mb-2 text-start ${selectedYear === year.year ? 'text-white' : 'text-black'}`}>
                                {year.title}
                            </h3>
                            <p className={`mb-4 text-start ${selectedYear === year.year ? 'text-gray-50' : 'text-black'}`}>
                                {year.subtitle}
                            </p>
                            <ul className={`text-left text-sm space-y-6 ${selectedYear === year.year ? 'text-gray-50' : 'text-gray-600'}`}>
                                {year.courses.map((course, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="flex mr-2 md:mr-4 mt-2">
                                            <FaCheck size={18} className={`${selectedYear === year.year ? 'text-gray-50' : 'text-red-900'}`} />
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
