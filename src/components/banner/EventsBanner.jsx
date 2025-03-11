import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaCalendarAlt } from "react-icons/fa";
import image1 from "../../assets/banner/research.png";

const EventsBanner = () => {
    const bottomSections = [
        {
            title: "Software Engineer: The Life of a Software Engineer: Challenges, Rewards, and Career Growth",
            date: "Post on : 22 Aug 2025",
            image: image1,
        }
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
                            <div className='h-[464px]'>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full bg-cover bg-center"
                                />
                            </div>

                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="container mx-auto absolute inset-0 p-6 flex flex-col justify-between text-white">
                                <div className="flex flex-col justify-center items-end py-4">
                                    {/* Buttons can be added here if needed */}
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
                                        className="mb-4 xl:text-[14px] text-[12px] text-gray-50 flex gap-2"
                                    >
                                        <FaCalendarAlt className="mr-2 text-lg" /> {section.date}
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

export default EventsBanner;