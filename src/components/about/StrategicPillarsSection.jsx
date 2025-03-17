import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiSettings, FiHome, FiBookOpen } from 'react-icons/fi';


const strategicPillars = [
    {
        title: "Human Resources",
        description: "RUPP is committed to building a highly skilled and motivated workforce. We focus on capacity building, professional development, and implementing a professorship system. To enhance research output, we aim to reduce teaching loads while ensuring effective incentive systems for academic excellence.",
        icon: <FiUsers size={30} className="text-red-800" />,
        color: "border-red-800",
        delay: 0.2
    },
    {
        title: "Governance",
        description: "Good governance is key to efficient management and student success. RUPP prioritizes strategic, results-based leadership while reforming organizational structures for effectiveness. Strengthening coordination, collaboration, and communication ensures smooth operations, with a strong emphasis on financial transparency.",
        icon: <FiSettings size={30} className="text-red-800" />,
        color: "border-red-800",
        delay: 0.4
    },
    {
        title: "Infrastructure",
        description: "RUPP is dedicated to providing a high-quality learning environment. We invest in new infrastructure, enhance teaching facilities, and improve campus safety. A focus on sanitation and environmental sustainability ensures a better experience for students and faculty alike.",
        icon: <FiHome size={30} className="text-red-800" />,
        color: "border-red-800",
        delay: 0.6
    },
    {
        title: "Curriculum",
        description: "Our curriculum is continuously updated to meet industry demands. We emphasize outcomes-based, ICT-driven learning that fosters creativity, social responsibility, and entrepreneurship. A university-wide credit system, an active Academic Committee, and a robust quality assurance (QA) monitoring framework ensure academic excellence.",
        icon: <FiBookOpen size={30} className="text-red-800" />,
        color: "border-red-800",
        delay: 0.8
    }
];

const StrategicPillarsSection = () => {
    return (
    <div className='my-16'>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
            className=""
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-xl lg:text-3xl font-bold text-gray-800 mb-6"
                >
                    RUPP Strategic Pillars for Growth & Excellence
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-gray-600 xl:text-lg text-[12px] mb-12 text-justify"
                >
                    Strengthening Human Resources, Governance, Curriculum, and Infrastructure to Drive Innovation and Quality Education.
                </motion.p>
                <div className="max-w-[1330px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {strategicPillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: pillar.delay }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row justify-center items-start gap-4"
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1, rotate: 360 }}
                                transition={{ duration: 0.6, delay: pillar.delay }}
                                viewport={{ once: true, amount: 0.5 }}
                                className={`border-2 ${pillar.color} rounded-full p-4 flex items-center justify-center`}
                            >
                                {pillar.icon}
                            </motion.div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-gray-800 mb-2">{pillar.title}</h3>
                                <p className="text-gray-600 xl:text-md text-[12px] text-justify">{pillar.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
    );
};

export default StrategicPillarsSection;