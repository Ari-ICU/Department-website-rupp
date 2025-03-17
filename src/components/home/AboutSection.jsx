import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { motion } from 'framer-motion';
import image1 from '../../assets/academic/3.png';
import image2 from '../../assets/img/a2.png';
import { useTranslation } from 'react-i18next';


const AboutSection = () => {
    const { t,i18n } = useTranslation();
      const currentLanguage = i18n.language; 

    // Dynamic content
    const aboutData = {
        title: t("Department.Department of Computer Science"),
        description: t("Department.Offers the first Computer Science degree program, designed to provide students with a strong foundation in both theory and practical skills. We ensure that our curriculum aligns with industry standards, equipping graduates with the knowledge needed to succeed in the competitive job market. With a team of highly skilled professors who bring both academic expertise and real-world experience"), // Simplified translation key
        features: [
            t('Department.Programming (Desktop, Mobile, and Web Application)'),
            t('Department.System Analysis & Design and Development'),
            t('Department.Software Engineering and IT Project Management'),
            t('Department.Database Management'),
            t('Department.Computer Networks, Cloud Computing & Cybersecurity'),
            t('Department.Artificial Intelligence'),
            t('Department.Computer Architecture and Embedded Systems'),
        ],
        images: [image1, image2],
        // buttonText: "Explore",
    };

    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <section className="flex flex-col xl:flex-row items-center mx-auto gap-6">
                    {/* Text Section with animation */}
                    <motion.div
                        className="text-[16px] order-1 lg:order-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.h1
                            className={`text-2xl font-normal mb-4 uppercase ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                            lang={currentLanguage}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {aboutData.title}
                        </motion.h1>
                        <motion.p
                            className=" text-gray-900"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {aboutData.description}
                        </motion.p>
                        <ul className="list-none space-y-4 mt-4">
                            {aboutData.features.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center "
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="border border-red-800 p-2 rounded-4xl mr-2">
                                        <FaCheck className="text-red-800" />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        {/* <motion.div
                            className='px-4 py-4'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <button className="bg-red-800 cursor-pointer text-white rounded-4xl py-2 px-6 flex items-center hover:bg-red-600 transition duration-300">
                                {aboutData.buttonText}
                                <MdExplore className="ml-2" />
                            </button>
                        </motion.div> */}
                    </motion.div>

                    {/* Image Section with animation */}
                    <motion.div
                        className="flex items-center gap-6 lg:order-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {aboutData.images.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 mx-auto flex justify-center items-center ${index === 0 ? "xl:w-[320px] xl:h-[550px]" : "xl:w-[320px] xl:h-[655px]"
                                    }`}
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 * index }}
                                viewport={{ once: true, amount: 0.5 }}
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