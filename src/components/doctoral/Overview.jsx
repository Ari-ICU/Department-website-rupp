import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
    return (
        <div className=" my-16 py-4"> 
            <div className='container mx-auto px-4'> {/* Added px-4 for horizontal padding */}
                <div className='space-y-4 flex flex-col xl:flex-row gap-10'>
                    <div className='xl:max-w-[462px] w-full mx-auto'>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="xl:text-3xl w-full text-2xl font-extrabold text-gray-900" // Increased base font size
                        >
                            Doctoral Degree in Computer Science
                        </motion.h2>
                    </div>
                    <div className='xl:max-w-[769px] w-full mx-auto'>
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-sm w-full xl:text-lg text-gray-500" // Adjusted font sizes
                        >
                            A Master’s in Computer Science is designed for students who want to deepen their expertise in advanced computing concepts, AI, cybersecurity, and software engineering. It prepares graduates for specialized careers and leadership roles in the tech industry.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;