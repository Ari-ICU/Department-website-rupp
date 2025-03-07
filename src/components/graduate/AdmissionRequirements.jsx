import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa'; // Changed icon to FaCheck
import p3 from '../../assets/program/p3.png';
import p4 from '../../assets/program/p4.png';

const AdmissionRequirements = () => {
    const requirements = [
        "High school diploma (or equivalent) with a strong background in mathematics and science.",
        "Proficiency in English (TOEFL/IELTS scores may be required for international students).",
        "Passing entrance exams (if applicable).",
        "Submission of an application, including a statement of purpose and recommendation letters."
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto"
        >
            <div className="flex flex-col xl:flex-row items-center gap-8 px-4">
                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative flex flex-col items-center justify-center"
                >
                    <div className='flex items-center justify-center gap-6'>
                        <div className='lg:h-[347px] lg:w-[265px] transition trans w-full h-full'>
                            <img src={p3} alt="" className='w-full h-full rounded-tl-[100px] object-cover' />
                        </div>
                        <div className='lg:w-[254px] lg:h-[381px]'>
                            <img src={p4} alt="" className='w-full h-full object-cover rounded-tr-[100px]' />
                        </div>
                    </div>

                    <div className='absolute bottom-0 z-10 bg-white p-4 rounded-full shadow-md w-full xl:w-52 xl:h-34'>
                        <h2 className="text-lg font-bold text-center mb-4 flex items-center">
                            <FaCheck className="mr-2 text-2xl text-green-500" /> {/* Changed icon to FaCheck */}
                            Key Metrics
                        </h2>
                        <div className="text-xl text-center font-bold text-blue-500">2000+</div>
                        <p className="text-md text-center mt-2">Student Enrollments</p>
                    </div>
                </motion.div>

                {/* Right Column - Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className=""
                >
                    <p>To apply for the Bachelor’s Degree in Computer Science, students must meet the following criteria:</p>
                    <h2 className="text-3xl font-bold mb-4">Admission Requirements</h2>

                    {requirements.map((requirement, index) => (
                        <div key={index} className="mb-4 flex flex-col xl:flex-row  gap-4">
                            <div className="flex items-center  justify-center">
                                <FaCheck size={22} className="mr-2 text-lg p-4 bg-red-950 rounded-full text-red-500" /> {/* Changed icon to FaCheck */}
                            </div>
                            <div>
                                <p>{requirement}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AdmissionRequirements;