import React, { useState } from 'react';
import { motion } from 'framer-motion';

const News = () => {
    const [activeTab, setActiveTab] = useState('Announcement');

    // Current date for filtering
    const today = new Date('2025-06-01T17:55:00+07:00');

    const newsItems = [
        { id: 1, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
        { id: 2, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
        { id: 3, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
        { id: 4, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
        { id: 5, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
        { id: 6, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    ];

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    // List of tabs
    const tabs = ['Announcement', 'Current Events & News', 'Upcoming Events & News'];

    // Filter news items based on active tab
    const filteredNewsItems = newsItems.filter((item) => {
        const itemDate = new Date(item.date);
        if (activeTab === 'Announcement') return true;
        if (activeTab === 'Current Events & News') return itemDate <= today;
        if (activeTab === 'Upcoming Events & News') return itemDate > today;
        return false;
    });

    return (
        <div className="container  mx-auto p-5 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className=" mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Latest News & Announcements</h1>
                <p className="text-sm text-gray-600 mt-2">
                    Engage in insightful discussions, network with industry experts, and explore career opportunities through our upcoming academic and professional events
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-3 mb-8">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`px-4 py-2 rounded-full cursor-pointer ${activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredNewsItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md p-4"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"

                    >
                        <div className='flex flex-row items-center'>
                            <img
                                src="https://via.placeholder.com/250x150"
                                alt={item.category}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <div className='w-full ml-4'>
                                <h3 className="text-sm font-semibold text-red-600">{item.category}</h3>
                                <p className="text-base font-medium text-gray-800 mt-2">{item.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                <p className="text-xs text-gray-500 mt-3">{item.date.toDateString()}</p>
                            </div>
                        </div>


                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default News;