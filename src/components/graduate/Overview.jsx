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
                            Bachelor Degree in Computer Science
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
                            Providing a Comprehensive Foundation in Software Development, Algorithms, Data Structures, Networking, and Computer Systems, Equipping Graduates with Critical Problem-Solving, Analytical, and Technical Skills to Thrive in a Broad Range of Industries, Including Software Engineering, Cybersecurity, Data Science, and Emerging Technologies, Leading to Lucrative Career Opportunities and the Ability to Innovate in the Evolving Digital World.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;