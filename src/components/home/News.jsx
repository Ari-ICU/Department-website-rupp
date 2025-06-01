import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const News = () => {
    const [activeTab, setActiveTab] = useState('Announcement');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // New state for search
    const itemsPerPage = 3;

    // Current date for filtering
    const today = new Date('2025-06-01T18:04:00+07:00');

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

    // Filter news items based on active tab and search query
    const filteredNewsItems = newsItems.filter((item) => {
        const itemDate = new Date(item.date);
        const matchesTab =
            activeTab === 'Announcement' ||
            (activeTab === 'Current Events & News' && itemDate <= today) ||
            (activeTab === 'Upcoming Events & News' && itemDate > today);

        const matchesSearch = searchQuery
            ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        return matchesTab && matchesSearch;
    });

    // Pagination logic
    const totalItems = filteredNewsItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredNewsItems.slice(startIndex, endIndex);

    // Handle page change
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Reset to page 1 when tab or search query changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchQuery]);

    return (
        <div className="container mx-auto p-5 ">
            <div className='flex items-center justify-between mb-8'>
                {/* Header */}
                <div className="mb-8 w-full">
                    <h1 className="text-3xl font-bold text-gray-800">Latest News & Announcements</h1>
                    <p className="text-sm text-gray-600 mt-2">
                        Engage in insightful discussions, network with industry experts, and explore career opportunities through our upcoming academic and professional events
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6 w-full flex justify-end">
                    <input
                        type="text"
                        placeholder="Search news by title, category, or description..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mb-8">
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
                {paginatedItems.length > 0 ? (
                    paginatedItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md p-4"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <div className="flex flex-row items-center">
                                <img
                                    src="https://via.placeholder.com/250x150"
                                    alt={item.category}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <div className="w-full ml-4">
                                    <h3 className="text-sm font-semibold text-red-600">{item.category}</h3>
                                    <p className="text-base font-medium text-gray-800 mt-2">{item.title}</p>
                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                    <p className="text-xs text-gray-500 mt-3">{item.date.toDateString()}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-gray-600 col-span-full text-center">No results found for "{searchQuery}"</p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalItems > 0 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={handlePreviousPage}
                        className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'
                            }`}
                        disabled={currentPage === 1}
                        aria-label="Previous Page"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <span className="text-gray-800">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'
                            }`}
                        disabled={currentPage === totalPages}
                        aria-label="Next Page"
                    >
                        <FaArrowRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default News;