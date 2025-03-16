import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaCheck } from "react-icons/fa";
import model from "../../../assets/model/1.png";

const ComputerScienceDegreeBenefits = () => {
    const benefitsData = [
        {
            title: "In-Demand Skills & Job",
            description:
                "Graduates gain expertise in programming and problem-solving, leading to stable, high-paying tech careers.",
        },
        {
            title: "Innovation & Impact",
            description:
                "With AI and emerging tech skills, graduates drive digital transformation and create advanced solutions.",
        },
        {
            title: "Career Growth & Flexibility",
            description:
                "The degree offers diverse career paths, entrepreneurship opportunities, and continuous advancement.",
        },
    ];

    const [selectedBenefitIndex, setSelectedBenefitIndex] = useState(1);

    const handleBenefitClick = (index) => {
        setSelectedBenefitIndex(index === selectedBenefitIndex ? null : index);
    };

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
        <div className="my-12 bg-white">
            <div className="container mx-auto py-12 px-6 xl:px-12">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8">
                    {/* Left Section - Text */}
                    <motion.div
                        className="w-full p-2 xl:w-1/2 text-start"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                    >
                        <motion.h2
                            className="text-3xl xl:text-4xl font-semibold mb-6 text-red-900"
                            variants={itemVariants}
                        >
                            Unlock Your Future with a Computer Science Degree
                        </motion.h2>
                        <motion.p
                            className="text-md xl:text-lg text-gray-700"
                            variants={itemVariants}
                        >
                            Gain in-demand skills, high-paying jobs, and career flexibility in tech.
                            Whether in AI, cybersecurity, or software development, a Computer Science
                            degree opens doors to innovation, entrepreneurship, and long-term success.
                        </motion.p>
                    </motion.div>

                    {/* Middle Section - Image */}
                    <motion.div
                        className="w-full mx-auto p-2 xl:w-1/2 flex"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.img
                            src={model}
                            alt="Computer Science"
                            className="w-full h-full mx-auto object-contain"
                            variants={itemVariants}
                        />
                    </motion.div>

                    {/* Right Section - Benefits */}
                    <motion.div
                        className="w-full xl:w-1/2 p-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {benefitsData.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={`text-left mb-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col xl:flex-row items-center gap-6 ${
                                    selectedBenefitIndex === index
                                        ? "bg-red-900 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                                onClick={() => handleBenefitClick(index)}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }} // Add hover effect
                            >
                                <div
                                    className={`p-4 rounded-full flex items-center justify-center border ${
                                        selectedBenefitIndex === index ? "border-white" : "border-red-900"
                                    }`}
                                >
                                    <FaCheck
                                        className={`text-lg ${
                                            selectedBenefitIndex === index ? "text-white" : "text-red-900"
                                        }`}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                    <p className="text-md">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ComputerScienceDegreeBenefits;