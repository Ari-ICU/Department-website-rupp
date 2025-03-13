import React, { useRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../../assets/new/3.jpg';
import image2 from '../../assets/new/4.jpg';
import image3 from '../../assets/new/5.jpg';

const RelatedArtical = () => {

    const events = [
        {
            id: 1,
            title: 'Guest Lecture on Artificial Intelligence',
            imageUrl: image1,
            description: 'Annual university tournament for basketball teams. Come cheer...',
            date: '22 Aug 2025',
            category: 'Hackathons',
        },
        {
            id: 2,
            title: 'AI in Healthcare Symposium',
            imageUrl: image2,
            description: 'Exploring the latest advancements in AI for medical applications.',
            date: '15 Sep 2025',
            category: 'Conferences',
        },
        {
            id: 3,
            title: 'Web Development Workshop',
            imageUrl: image3,
            description: 'Hands-on workshop on building responsive web applications.',
            date: '05 Oct 2025',
            category: 'Workshops',
        },
        {
            id: 4,
            title: 'Data Science Meetup',
            imageUrl: image1,
            description: 'Networking event for data science enthusiasts and professionals.',
            date: '20 Oct 2025',
            category: 'Meetups',
        },
    ];



    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className='flex justify-between'>
                    <h2 className='text-4xl mb-6 font-semibold'>Related Artical </h2>
                    <div className="flex justify-between gap-10 items-center">
                        <button className="p-2 bg-pink-100  text-red-900 rounded-full hover:bg-gray-300">
                            <FaChevronLeft />
                        </button>
                        <button className="p-2 bg-pink-100  text-red-900  rounded-full hover:bg-gray-300">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Events Section */}
                <div className="py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <Link to={`/events&news/${event.id}`} key={event.id} className="block">
                                <div className="bg-white rounded-2xl shadow-md flex flex-col xl:flex-row justify-center min-w-96 hover:shadow-lg transition-shadow duration-300">
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
                                        <p className="mt-2 text-sm text-gray-600">
                                            {event.description}
                                        </p>
                                        <span className="text-sm text-gray-500 flex items-center gap-4 mt-4">
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

export default RelatedArtical;
