import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/undergraduate/bank/b1.png';

const ScholarshipOpportunities = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    let scrollInterval;

    const events = [
        {
            id: 1,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 2,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 3,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 4,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
        {
            id: 5,
            title: 'Scholarship Opportunity with Woori bank',
            imageUrl: image1,
            description: 'Woori offers scholarship for students who pursue bachelor degree at Royal University of Ph...',
            date: 'Deadline : 31 Mar 2025',
            registerLink: '#',
            category: 'Woori',
        },
    ];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let currentScroll = 0;
        const scrollSpeed = 1.5; // Smooth scroll speed

        const autoScroll = () => {
            currentScroll += scrollSpeed;
            if (currentScroll > scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                currentScroll = 0; // Reset scrolling when reaching the end
            }
            scrollContainer.scrollTo({ left: currentScroll, behavior: 'smooth' });
        };

        scrollInterval = setInterval(autoScroll, 30);

        // Pause scrolling on hover
        scrollContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        scrollContainer.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col xl:flex-row justify-between items-center mb-8"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold text-gray-900"
                    >
                        Check Out Scholarship Opportunities
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-4 xl:mt-0"
                    >
                        <Link to="/scholars" className="flex text-red-800 hover:text-red-900 items-center border-b border-red-800 pb-1">
                            <span className="mr-2 xl:text-sm text-[12px]">View All</span>
                            <FaArrowRight className="text-red-800" />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className=" py-2"
                >
                    {/* Add overflow container with calculated width */}
                    <div className="overflow-x-auto pb-4">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 pb-4 " 
                        >
                            {events.map((event, index) => (
                              <motion.div
                              key={event.id}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                              viewport={{ once: true }}
                              className="bg-white rounded-2xl p-2 shadow-md flex flex-col sm:flex-row justify-between items-center flex-shrink-0"
                              
                          >
                              {/* Image Section */}
                              <div className="w-78 h-full flex justify-center items-center overflow-hidden rounded-2xl">
                                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                              </div>
                          
                              {/* Content Section */}
                              <div className="p-4 sm:p-6 w-78">
                                  {event.category && (
                                      <span className="text-xs font-semibold text-red-600 uppercase bg-indigo-100 px-2 py-1 rounded-full">
                                          {event.category}
                                      </span>
                                  )}
                                  <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-semibold text-gray-900">{event.title}</h3>
                                  <p className="mt-2 text-sm sm:text-base text-gray-800">{event.description}</p>
                                  <span className="text-sm sm:text-base text-gray-800">{event.date}</span>
                                  <div className="mt-4">
                                      <button
                                          className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-xl text-sm sm:text-base"
                                          onClick={() => navigate(`/scholars/${event.id}`)}
                                      >
                                          View Detail
                                      </button>
                                  </div>
                              </div>
                          </motion.div>
                          
                            ))}
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default ScholarshipOpportunities;