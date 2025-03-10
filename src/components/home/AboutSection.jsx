import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md'
import { motion } from 'framer-motion';
import image1 from '../../assets/img/a1.png';
import image2 from '../../assets/img/a2.png';

// Dynamic content
const aboutData = {
    title: "Department of Computer Science",
    description: "Offers the first Computer Science degree program, designed to provide students with a strong foundation in both theory and practical skills. We ensure that our curriculum aligns with industry standards, equipping graduates with the knowledge needed to succeed in the competitive job market. With a team of highly skilled professors who bring both academic expertise and real-world experience, we prepare students for careers in technology and innovation. We offer:",
    features: [
        'Programming (Desktop, Mobile, and Web Application)',
        'System Analysis & Design and Development',
        'Software Engineering and IT Project Management',
        'Database Management',
        'Computer Networks, Cloud Computing & Cybersecurity',
        'Artificial Intelligence',
        'Computer Architecture and Embedded Systems',
    ],
    images: [
        image1,
        image2
    ],
    buttonText: "Explore",
};

const AboutSection = () => {
    return (
        <div className=''>
            <div className='container mx-auto '>
                <section className="flex flex-col xl:flex-row items-center mx-auto justify-center gap-6">
                    {/* Text Section with animation */}
                    <motion.div
                        className="text-[16px] order-1 lg:order-2"
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg xl:text-3xl font-bold mb-4"
                        >
                            {aboutData.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[12px] xl:text-[16px] text-gray-500"
                        >
                            {aboutData.description}
                        </motion.p>
                        <ul className="list-none space-y-4 mt-4">
                            {aboutData.features.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center text-[12px] xl:text-[16px]"
                                >
                                    <div className="border border-red-800 p-2 rounded-4xl mr-2">
                                        <FaCheck className="text-red-800" />
                                    </div>
                                    {item}
                                </motion.li>
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
                                {aboutData.buttonText}
                                <MdExplore className="ml-2" />
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
                        {aboutData.images.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 mx-auto flex justify-center items-center ${index === 0 ? "xl:w-[320px] xl:h-[550px]" : "xl:w-[320px] xl:h-[655px]"
                                    }`}
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={image}
                                    alt={`About Us ${index + 1}`}
                                    className={`w-full h-full shadow-lg object-cover ${index % 2 === 0 ? "rounded-tl-[100px]" : "rounded-tr-[100px]"
                                        }`}
                                />

                            </motion.div>
                        ))}
                    </motion.div>

                </section>
            </div>
        </div>
    );
};

export default AboutSection;
