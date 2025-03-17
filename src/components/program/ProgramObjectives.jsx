import React from 'react';
import { motion } from 'framer-motion';
import { MdVerified } from 'react-icons/md';
import { BsPeople } from "react-icons/bs";
import { PiGraduationCapDuotone } from "react-icons/pi";
import p3 from '../../assets/admission/6.png';
import p4 from '../../assets/admission/7.png';

const ProgramObjectives = () => {
    const programData = {
        programTitle: "Computer Science Degree",
        description: "Empower your career with a degree in computer science. Master the latest technologies in programming, AI, and cybersecurity.",
        keyMetrics: {
            count: "2000+",
            description: "Student Enrollments"
        },
        objectives: [
            {
                title: "Robust Technical Foundation",
                description: "Gain expertise in computing theories, programming, software development, AI, cybersecurity, web development, and cloud computing.",
                icon: PiGraduationCapDuotone
            },
            {
                title: "Professional and Ethical Growth",
                description: "Develop problem-solving, teamwork, leadership, and ethical awareness to excel in industry, research, and entrepreneurship.",
                icon: BsPeople
            }
        ],
        images: [
            { src: p3, alt: "Image 1" },
            { src: p4, alt: "Image 2" }
        ]
    };
    const { programTitle, description, keyMetrics, objectives, images } = programData;

    return (
     <div className="my-16">
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
        >
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Right Column - Key Metrics (Image First in Mobile) */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="xl:w-1/2 w-full flex flex-col items-center relative order-1 xl:order-2"
                >
                   {/* Image Flex Layout */}
                <div className='flex flex-col lg:flex-row  justify-center items-center gap-4'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`w-full sm:w-auto ${index === 0 ? 'w-[325px] h-[211px] rounded-tl-[50px] sm:rounded-tl-[100px]' : index === 1 ? 'w-[309px] h-[418px] rounded-tr-[50px] sm:rounded-tr-[100px]' : 'w-[309px] h-[418px]'} overflow-hidden rounded-xl shadow-lg`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </div>


                    <div className='absolute bottom-4 sm:bottom-0 z-10 bg-white p-4 rounded-lg shadow-md w-11/12 sm:w-52 sm:h-42 text-center'>
                        <h2 className="text-md sm:text-lg font-bold flex items-center justify-center mb-4">
                            <MdVerified className="mr-2 text-xl sm:text-2xl text-red-700" />
                            Key Metrics
                        </h2>
                        <div className="text-lg sm:text-xl font-bold text-red-700">{keyMetrics.count}</div>
                        <p className="text-sm sm:text-md mt-2">{keyMetrics.description}</p>
                    </div>
                </motion.div>

                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="xl:w-1/2 w-full order-2 xl:order-1"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{programTitle}</h2>
                    <p className="text-base sm:text-lg mb-6">{description}</p>

                    <div className="space-y-6">
                        {objectives.map((objective, index) => (
                            <div key={index} className="flex items-start gap-4">
                               <div className="border border-red-800 rounded-full p-2">
                                    <objective.icon size={24} className="text-red-800  " />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{objective.title}</h3>
                                    <p className="text-sm sm:text-base">{objective.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
     </div>
    );
};

export default ProgramObjectives;
