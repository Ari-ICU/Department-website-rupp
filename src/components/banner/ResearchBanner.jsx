import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { MdComputer } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import image1 from "../../assets/banner/research.png";

const ResearchBanner = () => {
    const bottomSections = [
        {
            title: "IoT - Smart Home",
            description: "Revolutionizing Modern Living: Developing Secure, Scalable, and Intelligent Smart Home Systems that Enhance Comfort, Efficiency, and Safety through Advanced IoT Technologies.",
            image: image1,
        }
    ];

    const buttons = [
        { icon: <MdComputer className="mr-2" />, label: "Led By Asst. Prof. Dr. Heng Sovannarith" },
    ];

    return (
        <div className=''>
            <div className=''>
                <div>
                    {bottomSections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                            className="h-full overflow-hidden relative group"
                        >
                            <div className='h-[600px]'>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full bg-cover bg-center"
                                />
                            </div>

                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="container mx-auto absolute inset-0 p-6 flex flex-col justify-between text-white">
                                <div className="flex flex-col justify-center items-end py-4">
                                    {buttons.map((button, index) => (
                                        <motion.button
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"
                                        >
                                            {button.icon}
                                            {button.label}
                                        </motion.button>
                                    ))}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    className='max-w-xl *:mb-6'
                                >
                                    <h3 className="xl:text-3xl text-lg font-semibold mb-2">
                                        {section.title}
                                    </h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="mb-4 xl:text-[14px] text-gray-50 text-[12px] flex gap-2"
                                    >
                                      {section.description}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchBanner;