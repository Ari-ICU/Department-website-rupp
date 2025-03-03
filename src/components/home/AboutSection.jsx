import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Image imports
import image1 from '../../assets/img/a1.png';
import image2 from '../../assets/img/a2.png';


const AboutSection = () => {
    return (
        <div className=''>
            <div className='max-w-[1340px] h-[655px] mx-auto'>
                <section className="flex flex-col lg:flex-row items-center justify-center">
                    {/* Text Section with animation */}
                    <motion.div
                        className="max-w-[621px] h-[599px] p-4 order-1 lg:order-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Department of Computer Science</h2>
                        <p className="text-sm text-gray-500">
                            Offers the first Computer Science degree program, designed to provide students with a strong foundation in both theory and practical skills. We ensure that our curriculum aligns with industry standards, equipping graduates with the knowledge needed to succeed in the competitive job market. With a team of highly skilled professors who bring both academic expertise and real-world experience, we prepare students for careers in technology and innovation. We offer:
                        </p>
                        <ul className="list-none space-y-4 mt-4">
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Programming (Desktop, Mobile, and Web Application)
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                System Analysis & Design and Development
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Software Engineering and IT Project Management
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Database Management
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Computer Networks, Cloud Computing & Cybersecurity
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Artificial Intelligence
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Computer Architecture and Embedded Systems
                            </li>
                        </ul>
                    </motion.div>

                    {/* Image Section with animation */}
                    <motion.div
                        className="max-w-[660px] h-[655px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6  p-4 lg:order-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Image 1 */}
                        <motion.div className="p-4 w-[320px] h-[516px] " initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
                            <img
                                src={image1}
                                alt="About Us"
                                className="w-full h-full rounded-lg shadow-lg"
                            />
                        </motion.div>
                        {/* Image 2 - Hidden on small screens */}
                        <motion.div className="p-4 w-[320px] h-[655px] lg:block hidden" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
                            <img
                                src={image2}
                                alt="About Us"
                                className="w-full h-full rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default AboutSection;
