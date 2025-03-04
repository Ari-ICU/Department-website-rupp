import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Image imports
import image1 from '../../assets/img/a1.png';
import image2 from '../../assets/img/a2.png';


const AboutSection = () => {
    return (
        <div className=''>
            <div className='container mx-auto  '>
                <section className="flex flex-col xl:flex-row items-center justify-center">
                    {/* Text Section with animation */}
                    <motion.div
                        className="text-[16px] h-auto p-4 order-1 lg:order-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            Department of Computer Science
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-gray-500">
                            Offers the first Computer Science degree program, designed to provide students with a strong foundation in both theory and practical skills. We ensure that our curriculum aligns with industry standards, equipping graduates with the knowledge needed to succeed in the competitive job market. With a team of highly skilled professors who bring both academic expertise and real-world experience, we prepare students for careers in technology and innovation. We offer:
                        </p>
                        <ul className="list-none space-y-4 mt-4">
                            {[
                                'Programming (Desktop, Mobile, and Web Application)',
                                'System Analysis & Design and Development',
                                'Software Engineering and IT Project Management',
                                'Database Management',
                                'Computer Networks, Cloud Computing & Cybersecurity',
                                'Artificial Intelligence',
                                'Computer Architecture and Embedded Systems',
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-base sm:text-lg md:text-xl">
                                    <div className="border border-red-800 p-2 rounded-4xl mr-2">
                                        <FaCheck className="text-red-800" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className='px-4 py-4'
                        >
                            <button className="bg-red-800 text-white rounded-4xl py-2 px-6 flex items-center hover:bg-red-600 transition duration-300">
                                
                                Explore
                                <FaArrowRight className="ml-2" />
                            </button>

                        </motion.div>

                    </motion.div>

                    {/* Image Section with animation */}
                    <motion.div
                        className="container flex items-center gap-6 lg:order-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Image 1 */}
                        <motion.div
                            className="p-4 xl:w-[320px] xl:h-[550px] h-auto  mx-auto flex justify-center items-center"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={image1}
                                alt="About Us"
                                className="w-full h-full rounded-lg shadow-lg object-cover"
                            />
                        </motion.div>
                        {/* Image 2 - Hidden on small screens */}
                        <motion.div
                            className="p-4 xl:w-[320px] xl:h-[655px] w-auto h-auto  justify-center items-center"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={image2}
                                alt="About Us"
                                className="w-full h-full rounded-lg shadow-lg object-cover"
                            />
                        </motion.div>
                    </motion.div>

                </section>
            </div>
        </div>
    );
};

export default AboutSection;
