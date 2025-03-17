import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import g from '../../../assets/admission/8.png';

const TuitionSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
    };

    return (
        <div className="my-16">
            <div className="container mx-auto px-4 py-24">
                <div className="flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0">
                    {/* Image Section */}
                    <motion.div
                        className="xl:order-2 order-1 w-full xl:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    >
                        <div className="relative flex justify-center items-center w-full h-full">
                            <div className="w-[300px] h-[400px] xl:w-[400px] xl:h-[500px] rounded-full">
                                <motion.img
                                    src={g}
                                    alt="Tuition Fee"
                                    className="w-full h-full object-contain"
                                    variants={itemVariants}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="xl:order-1 order-2 w-full xl:w-1/2 text-center xl:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.h2
                            className="text-3xl  font-semibold mb-4"
                            variants={itemVariants}
                        >
                            Tuition Fee & Payment Methods
                        </motion.h2>
                        <div className="max-w-2xl mx-auto xl:mx-0">
                            <motion.p
                                className="text-base xl:text-lg text-gray-800 mb-6"
                                variants={itemVariants}
                            >
                                The tuition fee for the Computer Science program is $500 per year, with an additional $5 exam fee.
                            </motion.p>
                            <motion.p
                                className="text-base xl:text-lg text-gray-800 mb-8"
                                variants={itemVariants}
                            >
                                We accept all types of payments, including cash (hand-to-hand payment) and online transfers via bank for convenience.
                            </motion.p>
                            <motion.div
                                className="flex flex-col xl:flex-row items-center justify-center xl:justify-start font-bold text-red-800 mb-4 gap-5"
                                variants={itemVariants}
                            >
                                <div className="p-2 bg-red-900 rounded-2xl">
                                    <HiOutlineCurrencyDollar size={50} className="text-white" />
                                </div>
                                <p >
                                   <span className="text-3xl xl:text-4xl">500$ </span> /<span className="text-sm text-gray-500">year</span>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TuitionSection;