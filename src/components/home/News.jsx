import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';

const News = () => {
    const [activeTab, setActiveTab] = useState('Announcement');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
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
        <div className='my-12'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    {/* Header */}
                    <div className="w-full mb-4 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Latest News & Announcements</h1>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                            Engage in insightful discussions, network with industry experts, and explore career opportunities through our upcoming academic and professional events
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-1/2 relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FaSearch size={16} className="sm:w-5 sm:h-5" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm ${activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {paginatedItems.length > 0 ? (
                        paginatedItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md space-y-4"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center p-4">
                                    <img
                                        src="https://via.placeholder.com/250x150"
                                        alt={item.category}
                                        className="w-full h-32 sm:h-40 object-cover rounded-md mb-3 sm:mb-0 sm:w-1/2"
                                    />
                                    <div className="w-full sm:w-1/2 sm:ml-4">
                                        <h3 className="text-xs sm:text-sm font-semibold text-red-600">{item.category}</h3>
                                        <p className="text-sm sm:text-base font-medium text-gray-800 mt-1 sm:mt-2">{item.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
                                        <p className="text-xs text-gray-500 mt-2 sm:mt-3">{item.date.toDateString()}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-600 col-span-full text-center text-sm sm:text-base">
                            No results found for "{searchQuery}"
                        </p>
                    )}
                </div>

                {/* Pagination Controls */}
                {totalItems > 0 && (
                    <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
                        <button
                            onClick={handlePreviousPage}
                            className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'
                                }`}
                            disabled={currentPage === 1}
                            aria-label="Previous Page"
                        >
                            <FaArrowLeft size={16} className="sm:w-5 sm:h-5" />
                        </button>
                        <span className="text-gray-800 text-sm sm:text-base">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'
                                }`}
                            disabled={currentPage === totalPages}
                            aria-label="Next Page"
                        >
                            <FaArrowRight size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;