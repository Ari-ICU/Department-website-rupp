import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdExplore } from "react-icons/md";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft  } from "react-icons/md";

// Image imports
import heroImage1 from "../../assets/img/univ3.jpg";
import heroImage2 from "../../assets/img/univ2.jpg";
import heroImage3 from "../../assets/img/univ4.jpg";
import logo from "../../assets/img/rupp.png";

const SlideShowSection = () => {
  const slides = [
    {
      image: heroImage1,
      title: "Welcome to the Computer Science Department",
      description: "Join a community of innovators, researchers, and future tech leaders shaping the world of tomorrow.",
      buttonText: "Explore More",
      buttonLink: "/about",
      buttonColor: "bg-red-900",
      linkIcon: <MdExplore className="ml-2 text-white" />,
    },
    {
      image: heroImage2,
      title: "Explore Our Research Programs",
      description: "Be part of groundbreaking research that shapes the future of technology.",
      buttonText: "Learn More",
      buttonLink: "/research",
      buttonColor: "bg-red-900",
      linkIcon: <MdExplore className="ml-2 text-white" />,
    },
    {
      image: heroImage3,
      title: "Innovating for the Future",
      description: "Get ready to be a part of the next generation of tech leaders.",
      buttonText: "Get Started",
      buttonLink: "/start",
      buttonColor: "bg-red-900",
      linkIcon: <MdExplore className="ml-2 text-white" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isPaused) return; // Stop auto-slide if user interacts

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Resume auto-slide after 10 seconds
  const resumeAutoSlide = () => {
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Handle previous slide
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsPaused(true);
    resumeAutoSlide();
  };

  // Handle next slide
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    resumeAutoSlide();
  };

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    resumeAutoSlide();
  };

  return (
    <div className="relative h-[400px] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={slides[currentSlide].image}
          alt="Background"
          className="object-cover object-center w-full h-full"
          key={currentSlide}
         
          whileInView={{ opacity: 1, x: 0 }}
         
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src={logo}
          alt="Logo"
          className="w-24 h-24"
        />
        <motion.h1
          className="xl:text-3xl text-lg font-bold leading-tight mb-4 max-w-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          className="xl:text-lg text-[12px] text-gray-300 mb-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {slides[currentSlide].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to={slides[currentSlide].buttonLink}
            className={`${slides[currentSlide].buttonColor} text-white py-2 px-6 xl:text-md text-[12px] xl:text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center`}
          >
            {slides[currentSlide].buttonText}
            {slides[currentSlide].linkIcon}
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white xl:p-3 p-1 rounded-full hover:bg-opacity-75 cursor-pointer"
        style={{ pointerEvents: "auto" }}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white  xl:p-3 p-1 rounded-full hover:bg-opacity-75 cursor-pointer"
        style={{ pointerEvents: "auto" }}
      >
        <MdKeyboardArrowRight  />
      </button>

      {/* Navigation Dots */}
      <div className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            style={{ pointerEvents: "auto" }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlideShowSection;
