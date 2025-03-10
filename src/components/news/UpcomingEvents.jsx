import React from 'react';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';
import p1 from '../../assets/new/2.png';

const UpcomingEvents = () => {
    const events = [
        {
            title: 'Jobify Career Fair 2025',
            description: 'Jobify really proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
        {
            title: 'Jobify Career Fair 2025',
            description: 'Jobify really proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
        {
            title: 'Jobify Career Fair 2025',
            description: 'Jobify really proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
        {
            title: 'Jobify Career Fair 2025',
            description: 'Jobify really proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
        {
            title: 'Jobify Career Fair 2025',
            description: 'Jobify really proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
        {
            title: 'Jobify Career Fair 2025',
            description: 'Jobify really proudly participated as the co-organizer of the Khmer...',
            date: '22 Aug 2025',
            imageUrl: p1,
        },
    ];

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">Current & Upcoming Events</h2>
                        <p className="text-gray-600 mt-6 max-w-3xl">
                            Engage in insightful discussions, network with industry experts, and explore career opportunities through our upcoming academic and professional events.
                        </p>
                    </div>
                   <div className='flex gap-4'>
                   <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                    </div>

                    {/* Filter Button */}
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">
                        <FaFilter />
                        <span>Filter</span>
                    </button>
                   </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="rounded-lg shadow-md overflow-hidden relative">
                            {/* Image with Overlay and Text */}
                            <div className="relative group">
                                {/* Image with Overlay */}
                                <div className="relative group">
                                    <img src={event.imageUrl} alt="Event" className="w-full h-56 object-cover" />
                                    {/* Overlay with explicit opacity */}
                                    <div className="absolute inset-0 bg-black transition duration-300 group-hover:opacity-20" style={{ opacity: 0.5 }}></div>
                                </div>

                                {/* Event Text on Image */}
                                <div className="absolute bottom-4 flex flex-col justify-center px-4 text-white">
                                    <h3 className="text-lg font-semibold">{event.title}</h3>
                                    <p className="text-sm mt-2">{event.description}</p>
                                    <p className="text-sm mt-2 flex items-center gap-2">
                                        <FaCalendarAlt className="" /> {event.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default UpcomingEvents;
