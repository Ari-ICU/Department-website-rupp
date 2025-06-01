import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const News = () => {
  const [activeTab, setActiveTab] = useState('Announcement');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 6;

  // Current date for filtering
  const today = new Date('2025-06-01T18:04:00+07:00');

  const newsItems = [
    { id: 1, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 2, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 3, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 4, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 5, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 6, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    // Add more items to test pagination (e.g., duplicate existing ones to reach 10 pages)
    { id: 7, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 8, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 9, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 10, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 11, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 12, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 13, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 14, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 15, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 16, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 17, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 18, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 19, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 20, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 21, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 22, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 23, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 24, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 25, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 26, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 27, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 28, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 29, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 30, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 31, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 32, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 33, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 34, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 35, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 36, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 37, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 38, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 39, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 40, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 41, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 42, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 43, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 44, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 45, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 46, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 47, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 48, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 49, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 50, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 51, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 52, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 53, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 54, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
    { id: 55, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-05-15') },
    { id: 56, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-06-01') },
    { id: 57, category: 'Hackathons', title: 'Guest Lecture on Artificial Intelligence', description: 'Annual university tournament for basketball teams. Come cheer...', date: new Date('2025-08-22') },
    { id: 58, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-05-20') },
    { id: 59, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-07-10') },
    { id: 60, category: 'Workshops', title: 'AI Workshop Series', description: 'Interactive sessions on AI development. Join us!', date: new Date('2025-09-01') },
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

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Reset to page 1 when tab or search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  // Pagination display logic with truncation
  const maxPagesToShow = 5; // Show up to 5 page numbers (e.g., 1, 2, ..., 9, 10)
  let pageNumbers = [];

  if (totalPages <= maxPagesToShow) {
    // If total pages are less than or equal to maxPagesToShow, show all pages
    pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else {
    // Show first 2 pages, ellipsis, and last 2 pages
    const firstPages = [1, 2];
    const lastPages = [totalPages - 1, totalPages];
    pageNumbers = [...firstPages];

    // Add ellipsis if there are pages between the first and last sets
    if (totalPages > 5) {
      pageNumbers.push('...');
    }

    pageNumbers.push(...lastPages);
  }

  return (
    <div className="container mx-auto p-3 sm:p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        {/* Header */}
        <div className="mb-4 md:mb-0">
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
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm ${
              activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
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
              className="bg-white rounded-lg shadow-md p-3 sm:p-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center">
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
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <button
            onClick={handlePreviousPage}
            className={`w-8 h-8 flex items-center justify-center rounded-none border border-gray-300 ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <IoIosArrowBack size={14} className="sm:w-4 sm:h-4 text-gray-600" />
          </button>

          {pageNumbers.map((page, index) => (
            page === '...' ? (
              <span
                key={`ellipsis-${index}`}
                className="w-8 h-8 flex items-center justify-center text-sm sm:text-base text-gray-600"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-none border text-sm sm:text-base ${
                  currentPage === page
                    ? 'bg-red-800 text-white '
                    : 'bg-white border-gray-300 hover:bg-gray-100'
                }`}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            )
          ))}

          <button
            onClick={handleNextPage}
            className={`w-8 h-8 flex items-center justify-center rounded-none border border-gray-300 ${
              currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            <IoIosArrowForward size={14} className="sm:w-4 sm:h-4 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default News;