import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/dr-heng-sovanrith.png';
import image2 from '../../assets/img/professor/chi-koung.jpg'
import image3 from '../../assets/img/professor/pok-leakmony.jpg'
import image4 from '../../assets/img/professor/kim-no.jpg'
import image5 from '../../assets/img/professor/meak-kamerane.png'
import p2 from '../../assets/img/professor/Asst-Prof-Dr-Chor-Chandara.png';
import p8 from '../../assets/img/professor/Ass-Prof-Dr-Ouk-Khean.png';

import { useTranslation } from 'react-i18next';



const facultyMembers = [
    { name: 'Mr. Chi Kuong', position: 'Head of Department', image: image2 },
    { name: 'Mr. Pok LeakMony ', position: 'Deputy Head of Department', image: image3 },
    { name: 'Dr. Chor Chandara ', position: 'Deputy Head of Department', image: p2 },
    { name: 'Dr. Ouk Khean ', position: 'Associate Professor', image: p8 },
    { name: 'Dr. Heng Sovannrith', position: 'Assistant Professor', image: image1 },
    { name: 'Mr. Kim No', position: 'Assistant Professor', image: image4 },
    { name: 'Mr. Meak Kamerane', position: 'Assistant Professor', image: image5 },

];

const FacultyCarousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const cardWidth = 370; // 96 * 4
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;


    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
                const nextScroll = scrollPosition + cardWidth;
                if (nextScroll > maxScroll) {
                    setScrollPosition(0);
                } else {
                    setScrollPosition(nextScroll);
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [scrollPosition]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [scrollPosition]);

    return (
        <div className='relative w-full mx-auto my-16 bg-white'>
            <div className="container mx-auto px-4">
                {/* Header Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center mb-8"
                >
                    <div className="w-full md:w-2/3 ">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`text-3xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                            lang={currentLanguage}
                        >
                            {t("Meet.Meet With Our Faculty")}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className={`text-sm text-gray-600 font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                            lang={currentLanguage}
                        >
                            {t("Meet.Inspiring Minds, Nurturing Curiosity, and Shaping the Future of Knowledge and Innovation")}
                        </motion.p>
                    </div>
                    <motion.div
                        className="w-full md:w-auto mt-4 md:mt-0"
                    >
                        <Link to='/faculty' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                            <span className="mr-2 xl:text-sm text-[12px]">{t("News.View All")}</span>
                            <FaArrowRight className="text-red-800" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Faculty Cards Section with Motion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden"
                >
                    <Link to="/faculty/:id">
                        <div 
                            ref={containerRef} 
                            className="flex snap-x snap-mandatory overflow-x-auto py-6 px-4 scroll-smooth gap-4 md:gap-8"
                        >
                            {facultyMembers.map((faculty, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="min-w-[300px] sm:min-w-[50px] flex-shrink-0 snap-center mx-2 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Image Container */}
                                    <div className="relative w-48 h-48 md:w-72 md:h-72 mb-4 group">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full rounded-2xl object-cover group-hover:brightness-90 transition-all duration-300"
                                        />

                                    {/* Social Media Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center"
                                    >
                                        {/* Social Icons Container */}
                                        <div className="absolute top-4 right-4 group-hover:bg-black/10 p-2 transition-all duration-300 rounded-2xl">
                                            <motion.div
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                className=" space-y-2"
                                            >
                                                {/* Facebook Link */}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="bg-white p-3 rounded-full shadow-lg"
                                                >
                                                    <Link to="#" className="text-gray-700 hover:text-red-600">
                                                        <SlSocialFacebook className="text-xl" />
                                                    </Link>
                                                </motion.div>

                                                {/* Telegram Link */}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="bg-white p-3 rounded-full shadow-lg"
                                                >
                                                    <Link to="#" className="text-gray-700 hover:text-red-400">
                                                        <PiTelegramLogoDuotone className="text-xl" />
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                                <h3 className="text-xl font-semibold">{faculty.name}</h3>
                                <p className={`text-sm text-gray-600/80 font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                            lang={currentLanguage}>{t(`Meet.${faculty.position}`)}</p>
                            </motion.div>
                        ))}
                    </div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default FacultyCarousel;