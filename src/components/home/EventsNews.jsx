import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PiCalendarDots } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import image1 from '../../assets/new/3.jpg';
import image2 from '../../assets/new/4.jpg';
import image3 from '../../assets/new/5.jpg';
import { useTranslation } from "react-i18next";

const EventsNews = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const currentLanguage = i18n.language;

    const events = [
        {
            id: 1,
            title: 'Events.Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Events.Annual university tournament for basketball team.',
            date: 'Events.22 Aug 2025',
            category: 'Events.Hackathons',
        },
        {
            id: 2,
            title: 'Events.AI in Healthcare Symposium',
            imageUrl: image2,
            description: 'Events.Exploring the latest advancements in AI for medical applications',
            date: 'Events.15 Sep 2025',
            category: 'Events.Conferences',
        },
        {
            id: 3,
            title: 'Events.Web Development Workshop',
            imageUrl: image3,
            description: 'Events.Hands-on workshop on building responsive web applications.',
            date: 'Events.05 Oct 2025',
            category: 'Events.Workshops',
        },
        {
            id: 4,
            title: 'Events.Data Science Meetup',
            imageUrl: image1,
            description: 'Events.Networking event for data science enthusiasts and professionals',
            date: 'Events.20 Oct 2025',
            category: 'Events.Meetups',
        },
    ];

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                    <div>
                        <h1
                            className={`text-3xl font-normal mb-4 ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                            lang={currentLanguage}
                        >
                            {t("Events.Events & News")}
                        </h1>
                        <p className="mt-1 xl:text-sm text-[12px] text-gray-500">
                            {t("Events.Engage with cutting-edge workshops, conferences, and networking opportunities.")}
                        </p>
                    </div>
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <button
                            onClick={() => navigate('/faculty')}
                            className='flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1'
                        >
                            <span className="mr-2 xl:text-sm text-[12px]">{t("News.View All")}</span>
                            <FaArrowRight className="text-red-800" />
                        </button>
                    </div>
                </div>

                <div className="py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <Link
                                to={`/news&events/${event.id}`}
                                key={event.id}
                                className="block cursor-pointer"
                            >
                                <div className="bg-white rounded-2xl p-4 shadow-md flex lg:flex-row flex-col justify-center items-center hover:shadow-lg">
                                    <div className="mx-auto w-full flex justify-center items-center">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-full md:h-56 object-cover rounded-2xl"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-6 w-full ">
                                        {event.category && (
                                            <span className="text-xs font-semibold text-red-600 uppercase bg-indigo-100 px-2 py-1 rounded-full">
                                                {t(event.category)}
                                            </span>
                                        )}
                                        <h5
                                            className={`text-lg font-normal mb-4 ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                                            lang={currentLanguage}
                                        >
                                            {t(event.title)}
                                        </h5>
                                        <p className="mt-2 text-sm text-gray-800">
                                            {t(event.description)}
                                        </p>
                                        <span className="text-sm text-gray-800 flex items-center gap-2 mt-4">
                                            <PiCalendarDots />
                                            {t(event.date)}
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
