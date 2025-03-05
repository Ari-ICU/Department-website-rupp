import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import image1 from '../../assets/img/a3.png';

const AboutSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=''
        >
            <div className='container mx-auto '>
                <section className="flex flex-col lg:flex-row gap-8">
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="xl:w-[660px] w-full mx-auto order-2 lg:order-1" // Changed w-auto to w-full
                    >
                        <h2 className="text-3xl font-bold mb-4">Academics</h2>
                        <p className="text-sm md:text-base text-gray-500 mb-6"> {/* Adjusted text size */}
                            The Computer Science Department offers a comprehensive undergraduate program designed to provide students with a strong foundation in computing principles, programming, and modern technologies.
                        </p>
                        <p className="text-sm md:text-base text-gray-500 mb-6"> {/* Adjusted text size */}
                            Our curriculum emphasizes both theoretical and practical aspects of computer science, equipping graduates with the skills needed for a successful career in the ever-evolving tech industry.
                        </p>

                        {/* Program Info */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-base'>
                            {["Undergraduate Program", "Graduate Program"].map((program, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 * index }}
                                    viewport={{ once: true }}
                                    className='flex flex-wrap gap-4 border border-red-800 p-4 rounded-xl justify-center items-center'
                                >
                                    <div className='border border-red-800 rounded-4xl p-2'>
                                        <MdSchool size={25} className='text-red-800' />
                                    </div>
                                    <p className="text-sm md:text-base text-red-800 font-medium">{program}</p> {/* Adjusted text size */}
                                </motion.div>
                            ))}
                        </div>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className=''
                        >
                            <button className="bg-red-800 text-white rounded-4xl py-2 px-6 flex items-center hover:bg-red-600 transition duration-300">
                                Explore
                                <FaArrowRight className="ml-2" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 w-full xl:w-[613px] xl:h-[410px] h-full" // Removed container mx-auto and h-[300px] and xl:h-[410px]
                    >
                        <img
                            src={image1}
                            alt="About Us"
                            className="w-full h-full mx-auto rounded-lg shadow-lg"
                        />
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );
};

export default AboutSection;