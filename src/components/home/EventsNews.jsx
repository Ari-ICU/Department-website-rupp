import React from 'react';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/new/3.jpg';
import image2 from '../../assets/new/4.jpg';
import image3 from '../../assets/new/5.jpg';
import { useTranslation } from "react-i18next";


const EventsNews = () => {
      const { t } = useTranslation();
    
    const events = [
        {
            id: 1,
            title: t('Events.Guest Lecture on Artificial Intelligence'),
            imageUrl: image1,
            description: t('Events.Annual university tournament for basketball teams. Come cheer...'),
            date: t('Events.22 Aug 2025'),
            category: t('Events.Hackathons'),
        },
        {
            id: 2,
            title: t('Events.AI in Healthcare Symposium'),
            imageUrl: image2,
            description: t('Events.Exploring the latest advancements in AI for medical applications.'),
            date: t('Events.15 Sep 2025'),
            category: t('Events.Conferences'),
        },
        {
            id: 3,
            title: t('Events.Web Development Workshop'),
            imageUrl: image3,
            description: t('Events.Hands-on workshop on building responsive web applications.'),
            date: t('Events.05 Oct 2025'),
            category: t('Events.Workshops'),
        },
        {
            id: 4,
            title: t('Events.Data Science Meetup'),
            imageUrl: image1,
            description: t('Events.Networking event for data science enthusiasts and professionals.'),
            date: t('Events.20 Oct 2025'),
            category: t('Events.Meetups'),
        },
    ];

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h2 className="xl:text-3xl text-xl font-extrabold text-gray-900">
                           { t("Events.Events & News")}
                        </h2>
                        <p className="mt-1 xl:text-sm text-[12px] text-gray-500">
                            { t("Events.Engage with cutting-edge workshops, conferences, and networking opportunities.")}
                        </p>
                    </div>
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <Link to='/news&events' className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'>
                            <span className="mr-2 xl:text-sm text-[12px]">{t('News.View All')}</span>
                            <FaArrowRight className="text-red-800" />
                        </Link>
                    </div>
                </div>

                <div className="py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <Link to={`/news&events/${event.id}`} className="block">
                                <div className="bg-white rounded-2xl shadow-md flex flex-col xl:flex-row justify-center hover:shadow-lg">
                                    <div className="mx-auto xl:w-1/2 flex justify-center items-center">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-56 object-cover rounded-2xl"
                                        />
                                    </div>

                                    <div className="p-6 w-full md:w-1/2">
                                        {event.category && (
                                            <span className="text-xs font-semibold text-red-600 uppercase bg-indigo-100 px-2 py-1 rounded-full">
                                                {event.category}
                                            </span>
                                        )}
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-800">
                                            {event.description}
                                        </p>
                                        <span className="text-sm text-gray-800 flex items-center gap-4 mt-4">
                                            <FaCalendarAlt />
                                            {event.date}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsNews;
