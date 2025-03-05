// ScholarshipsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseProgram = () => {
    // Variants for the animation
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="container mx-auto p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
        >
            <motion.div
                className=""
                variants={containerVariants}
            >
                {/* Full-Funded Scholarships */}
                <motion.div
                    className="bg-white text-red-900 rounded-lg p-6 shadow-md border border-blue-100"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold mb-4">Why Choose Our Program </h3>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[12px] xl:text-[16px] text-gray-500">
                        We offer a world-class Computer Science education with experienced faculty, state-of-the-art facilities, and strong industry partnerships that provide internships and job opportunities. Our globally aligned curriculum keeps pace with industry trends, while research opportunities in AI, cybersecurity, and data science allow you to innovate. Plus, our student organizations and hackathons foster collaboration, creativity, and networking. Join us and take your career to the next level!
                    </motion.p>
                   
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WhyChooseProgram;