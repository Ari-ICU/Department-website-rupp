import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { motion, AnimatePresence } from 'framer-motion';
import BreadcrumbSection from '../../BreadcrumbSection';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Image imports for different programs
import s1 from "../../../assets/graduate.png";
import s2 from "../../../assets/graduate.png";
import s3 from "../../../assets/graduate.png";

// Program data
const programData = {
    bachelor: {
        title: "Bachelor Degree",
        description: "Explore the foundational curriculum of our Bachelor's degree program in Computer Science. Gain the skills to kickstart your career in tech.",
        images: [s1, s2, s3]
    },
    master: {
        title: "Master's Degree",
        description: "Our Master's degree offers an advanced curriculum to deepen your expertise in fields like AI, cybersecurity, and software engineering.",
        images: [s1, s2, s3]
    },
    doctoral: {
        title: "Doctoral Degree",
        description: "Dive deep into research with our Doctoral program. Focus on areas like AI, machine learning, and cybersecurity to lead innovation.",
        images: [s1, s2, s3]
    },
    diploma: {
        title: "Diploma Degree",
        description: "Our Diploma program provides focused training on key topics in computer science to give you industry-ready skills in a shorter time frame.",
        images: [s1, s2, s3]
    }
};

function DegreeProgramSlider() {
    const location = useLocation(); // Get current route
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const sliderRef = useRef(null);

    // Determine the program type from the URL
    const programType = location.pathname.split("/").pop(); // Assuming the URL ends with the program type (e.g., "/bachelor")

    const currentProgram = programData[programType] || programData.bachelor; // Default to bachelor if program is not found

    const programImages = currentProgram.images; // Get images based on the program
    const pageTitle = currentProgram.title;
    const programDescription = currentProgram.description;

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
                                src={programImages[currentIndex]}
                                alt={`Program Image ${currentIndex + 1}`}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Foreground Content */}
                <div className="relative z-10 container mx-auto flex justify-center items-center py-6">
                    <div className="flex flex-col w-full justify-center text-center text-white xl:w-[782px] p-2 space-y-10">
                        <h2 className="xl:text-3xl text-lg font-semibold drop-shadow-md">
                            {pageTitle}
                        </h2>
                        <p className="text-md xl:text-xl text-gray-200 drop-shadow-md mb-6">
                            {programDescription}
                        </p>

                        {/* Search Input */}
                        <motion.div
                            className="flex items-center border rounded-full px-4 py-2 mx-auto w-1/2 bg-white/90"
                            whileFocus={{ boxShadow: '0 0 0 2px #3b82f6' }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaSearch className="mr-2 text-gray-600" />
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
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>

                {/* Arrows */}
                <button
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default DegreeProgramSlider;
