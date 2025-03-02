import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FcAbout } from "react-icons/fc";

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
      description:
        "Join a community of innovators, researchers, and future tech leaders shaping the world of tomorrow.",
      buttonText: "Explore More",
      buttonLink: "/about", 
      buttonColor: "bg-red-900", 
      linkIcon: <FcAbout className="ml-2" />,
    },
    {
      image: heroImage2,
      title: "Explore Our Research Programs",
      description:
        "Be part of groundbreaking research that shapes the future of technology.",
      buttonText: "Learn More",
      buttonLink: "/research", 
      buttonColor: "bg-blue-900", 
      linkIcon: <FcAbout className="ml-2" />,
    },
    {
      image: heroImage3,
      title: "Innovating for the Future",
      description:
        "Get ready to be a part of the next generation of tech leaders.",
      buttonText: "Get Started",
      buttonLink: "/start", 
      buttonColor: "bg-green-900", 
      linkIcon: <FcAbout className="ml-2" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Set up a timer to change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative  w-full h-screen md:h-[650px] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={slides[currentSlide].image}
          alt="Background"
          className="object-cover object-center w-full h-full"
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
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
            className={`${slides[currentSlide].buttonColor} text-white py-3 px-6 text-md md:text-xl rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center`}
          >
            {slides[currentSlide].buttonText}
            {slides[currentSlide].linkIcon}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideShowSection;
