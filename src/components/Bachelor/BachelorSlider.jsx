import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BreadcrumbSection from '../BreadcrumbSection';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

//image import 
import s1 from "../../assets/graduate.png";
import s2 from "../../assets/graduate.png";
import s3 from "../../assets/graduate.png";

function BachelorProgramSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const sliderRef = useRef(null);
    const programImages = [
        { id: 1, src: s1, alt: "Campus Life" },
        { id: 2, src: s2, alt: "Classroom" },
        { id: 3, src: s3, alt: "Graduation" },
    ];

    // Auto-scroll background images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === programImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [programImages]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === programImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? programImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative bg-white shadow-md overflow-hidden">
            <div className="xl:h-[550px] flex items-center justify-center h-full">
                {/* Background Image Slider */}
                <AnimatePresence>
                    {programImages && programImages.length > 0 && (
                        <motion.div
                            key={currentIndex}
                            className="absolute inset-0 z-0 xl:h-[550px] h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={programImages[currentIndex].src}
                                alt={programImages[currentIndex].alt}
                                className="w-full h-full object-cover object-center" // Ensure images cover the area
                            />
                            {/* Optional overlay for better text readability */}
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Foreground Content */}
                <div className="relative z-10 container mx-auto flex justify-center items-center py-6">
                    <div className="flex flex-col w-full justify-center text-center text-white xl:w-[782px] p-2 *:py-4 ">
                        <h2 className="xl:text-3xl text-lg font-semibold drop-shadow-md">
                            Bachelor Degree
                        </h2>
                        <p className="text-md xl:text-xl text-gray-200 drop-shadow-md mb-6">
                            Explore our curriculum, admission process, career opportunities, and advanced study options to shape your future.
                        </p>

                        {/* Search Input */}
                        <motion.div
                            className="flex items-center border rounded-full px-4 py-2 mx-auto w-1/2 bg-white/90"
                            whileFocus={{ boxShadow: '0 0 0 2px #3b82f6' }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaSearch className="mr-2 text-gray-600" /> {/* Search Icon */}
                            <input
                                type="text"
                                placeholder="Search programs..."
                                className="outline-none w-full text-gray-800"
                            />
                        </motion.div>

                        <div className="flex justify-center">
                            <BreadcrumbSection />
                        </div>

                    </div>
                </div>
                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {programImages.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
                {/* Arrows */}
                <button
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    <FaChevronLeft /> {/* Left Arrow Icon */}
                </button>
                <button
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    <FaChevronRight /> {/* Right Arrow Icon */}
                </button>
            </div>
        </div>
    );
}

export default BachelorProgramSlider;