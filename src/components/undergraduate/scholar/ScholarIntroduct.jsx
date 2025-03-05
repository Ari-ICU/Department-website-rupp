// ScholarshipsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const TypeScholar = () => {
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
            <h2 className="text-3xl font-bold mb-8">Scholarships</h2>

            <motion.div
                className=""
                variants={containerVariants}
            >
                {/* Full-Funded Scholarships */}
                <motion.div
                    className="bg-white text-red-900 rounded-lg p-6 shadow-md border border-blue-100"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold mb-4">Scholarships</h3>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[12px] xl:text-[16px] text-gray-500">
                        We believe that financial barriers should not stand in the way of academic success. Our scholarship programs provide financial assistance to deserving students based on merit, need, and special achievements. Whether you excel academically, require financial support, or demonstrate leadership and innovation, there are various scholarship opportunities available to help you achieve your educational goals.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[12px] xl:text-[16px] text-gray-500">
                      Explore full-funded, tuition-only, and partial scholarships offered by the university and external organizations. Invest in your future—apply for a scholarship today!
                       </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default TypeScholar;