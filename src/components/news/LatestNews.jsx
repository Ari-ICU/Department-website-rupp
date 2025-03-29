import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import p1 from '../../assets/new/1.png';
import { useTranslation } from "react-i18next";

const LatestNews = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // News items with unique IDs
    const newsItems = [
        {
            id: 1,
            title: 'Re-exam schedule for 1st, 2nd students',
            description: 'Student office has a new announcement regarding re-exam...',
            imageUrl: p1,
            tag: 'News',
        },
        {
            id: 2,
            title: 'Semester Break & Holiday Notices',
            description: 'A new semester break for 4th year students will be hosted on 21 Jun...',
            imageUrl: p1,
            tag: 'Events',
        },
        {
            id: 3,
            title: 'Re-exam schedule for 1st, 2nd students',
            description: 'Student office has a new announcement regarding re-exam...',
            imageUrl: p1,
            tag: 'Announcement',
        },
        {
            id: 4,
            title: 'Semester Break & Holiday Notices',
            description: 'A new semester break for 4th year students will be hosted on 21 Jun...',
            imageUrl: p1,
            tag: 'News',
        }
    ];

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center mb-8"
                >
                    <h1 className={`text-3xl font-normal mb-4 ${currentLanguage === 'km' && isHomePage ? "font-khmer" : "font-semibold"}`}
                        lang={currentLanguage}>
                        {isHomePage ? t('News.Announcements') : 'Announcements'}
                    </h1>
                    {isHomePage && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="w-full md:w-auto mt-4 md:mt-0"
                        >
                            <Link to='/news&events' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                                <span className="mr-2 xl:text-sm text-[12px]">{t('News.View All')}</span>
                                <FaArrowRight className="text-red-800" />
                            </Link>
                        </motion.div>
                    )}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {newsItems.map((item) => (
                        <Link to={`/news/${item.id}`} key={item.id} className="bg-white rounded-lg flex flex-col xl:flex-row shadow-md overflow-hidden">
                            {/* Image Section with Dynamic ID Link */}
                            <div className="p-3 w-full xl:w-[313px] h-auto xl:h-[221px]">
                                <img
                                    src={item.imageUrl}
                                    alt="News"
                                    className="w-full h-full object-cover cursor-pointer rounded-lg"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="p-6 flex flex-col justify-center">
                                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold self-start">
                                    {isHomePage ? t(`News.${item.tag}`) : item.tag}
                                </span>
                                <h3 className={`text-lg font-normal mb-4 ${currentLanguage === 'km' && isHomePage ? "font-khmer" : "font-semibold"}`}
                                    lang={currentLanguage}>
                                    {isHomePage ? t(`News.${item.title}`) : item.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{isHomePage ? t(`News.${item.description}`) : item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
