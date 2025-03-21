import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const CarreerOpportunities = () => {
    // Variants for the animation
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    };

    return (
        <motion.div
            className="container mx-auto p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        >
            <motion.div
                className=""
                variants={containerVariants}
            >
                {/* Career Opportunities Section */}
                <motion.div
                    className="bg-white text-red-900 rounded-lg p-6 shadow-md border border-blue-100"
                    variants={itemVariants}
                >
                    <motion.h3
                        variants={textVariants}
                        className="text-xl font-semibold mb-4"
                    >
                        Career Opportunities
                    </motion.h3>
                    <motion.p
                        variants={textVariants}
                        className="text-[12px] xl:text-[16px] text-gray-500"
                    >
                        A degree in Computer Science opens the door to a wide range of exciting and high-demand career opportunities across multiple industries. With the rapid growth of technology, companies worldwide seek skilled professionals to develop software, analyze data, enhance cybersecurity, and drive innovation.
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        className="text-[12px] xl:text-[16px] text-gray-500"
                    >
                        Graduates with a Computer Science degree can work in diverse fields, including software development, artificial intelligence, cybersecurity, cloud computing, data science, and IT management. Whether in tech startups, multinational corporations, research institutions, or government agencies, computer scientists play a vital role in shaping the future of technology.
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        className="text-[12px] xl:text-[16px] text-gray-500"
                    >
                        With continuous advancements in AI, blockchain, cybersecurity, and automation, the demand for skilled professionals is expected to grow, offering competitive salaries and career stability. A master’s degree in Computer Science can further enhance expertise, opening doors to specialized roles and leadership positions.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CarreerOpportunities;