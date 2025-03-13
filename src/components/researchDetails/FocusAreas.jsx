import React from 'react';
import { motion } from 'framer-motion';

const focusData = {
    title: 'Area of Focuses',
    description:
        'Our research delves into real-time device control, automation, and secure communication protocols to ensure a smooth and safe user experience. Key areas of study include:',
    focusItems: [
        'IoT-Enabled Smart Home Systems',
        'Cloud & Edge Computing Integration',
        'Weather-Based Home Automation',
        'Cybersecurity in IoT',
    ],
};

const FocusAreas = () => {
    return (
        <div className='my-16 '>
            <div className='container mx-auto px-4 py-4'>
                <section className=" font-sans">
                    <div className="">
                        <div className='flex flex-col gap-4 xl:flex-row justify-between'>
                            <div className=" w-full mx-auto">
                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="xl:text-3xl w-full text-2xl font-extrabold text-gray-900"
                                >
                                    {focusData.title}
                                </motion.h2>
                            </div>
                            <div className="w-full mx-auto">
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-sm w-full xl:text-lg text-gray-500"
                                >
                                    {focusData.description}
                                </motion.p>
                                <div className=' mt-10'>
                                    <ul className="space-y-4">
                                        {focusData.focusItems.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center border-b border-gray-300 pb-4"
                                            >
                                                <span className="text-2xl font-semibold mr-8 w-10 text-right">
                                                    {index + 1}
                                                </span>
                                                <span className="text-lg text-gray-800">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default FocusAreas;
