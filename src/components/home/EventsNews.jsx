import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiCalendarDots } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/new/3.jpg";
import image2 from "../../assets/new/4.jpg";
import image3 from "../../assets/new/5.jpg";

const events = [
  {
    id: 1,
    title: "Events.Guest Lecture on Artificial Intelligence",
    imageUrl: image1,
    description: "Events.Annual university tournament for basketball team.",
    date: "Events.22 Aug 2025",
    category: "Events.Hackathons",
  },
  {
    id: 2,
    title: "Events.AI in Healthcare Symposium",
    imageUrl: image2,
    description: "Events.Exploring the latest advancements in AI for medical applications",
    date: "Events.15 Sep 2025",
    category: "Events.Conferences",
  },
  {
    id: 3,
    title: "Events.Web Development Workshop",
    imageUrl: image3,
    description: "Events.Hands-on workshop on building responsive web applications.",
    date: "Events.05 Oct 2025",
    category: "Events.Workshops",
  },
  {
    id: 4,
    title: "Events.Data Science Meetup",
    imageUrl: image1,
    description: "Events.Networking event for data science enthusiasts and professionals",
    date: "Events.20 Oct 2025",
    category: "Events.Meetups",
  },
];

const EventsNews = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;

  return (
    <div className="my-8 sm:my-12 lg:my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 sm:mb-8">
          <div>
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 ${
                currentLanguage === "km" ? "font-khmer" : ""
              }`}
              lang={currentLanguage}
            >
              {t("Events.Events & News")}
            </h1>
            <p
              className={`text-xs sm:text-sm text-gray-500 ${
                currentLanguage === "km" ? "font-khmer" : ""
              }`}
              lang={currentLanguage}
            >
              {t("Events.Engage with cutting-edge workshops, conferences, and networking opportunities.")}
            </p>
          </div>
          <Link
            to="/news&events"
            className="mt-4 lg:mt-0 flex items-center bg-red-900 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors duration-300"
            aria-label={t("News.View All Events and News")}
          >
            <span
              className={`text-xs sm:text-sm ${
                currentLanguage === "km" ? "font-khmer" : ""
              }`}
              lang={currentLanguage}
            >
              {t("News.View All")}
            </span>
            <FaArrowRight className="ml-2 text-xs sm:text-sm" />
          </Link>
        </div>

        <div className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  to={`/news&events/${event.id}`}
                  className="block group"
                  aria-label={t(event.title)}
                >
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md flex flex-col lg:flex-row items-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0">
                      <img
                        src={event.imageUrl}
                        alt={t(event.title)}
                        className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="w-full lg:w-1/2 p-4 sm:p-5">
                      {event.category && (
                        <span
                          className={`text-xs font-semibold text-red-600 uppercase bg-red-100 px-2 py-1 rounded-full ${
                            currentLanguage === "km" ? "font-khmer" : ""
                          }`}
                          lang={currentLanguage}
                        >
                          {t(event.category)}
                        </span>
                      )}
                      <h5
                        className={`text-base sm:text-lg lg:text-xl font-semibold mt-2 mb-3 sm:mb-4 ${
                          currentLanguage === "km" ? "font-khmer" : ""
                        }`}
                        lang={currentLanguage}
                      >
                        {t(event.title)}
                      </h5>
                      <p
                        className={`text-xs sm:text-sm text-gray-700 line-clamp-3 ${
                          currentLanguage === "km" ? "font-khmer" : ""
                        }`}
                        lang={currentLanguage}
                      >
                        {t(event.description)}
                      </p>
                      <span
                        className={`text-xs sm:text-sm text-gray-700 flex items-center gap-2 mt-3 sm:mt-4 ${
                          currentLanguage === "km" ? "font-khmer" : ""
                        }`}
                        lang={currentLanguage}
                      >
                        <PiCalendarDots className="text-red-600" />
                        {t(event.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsNews;