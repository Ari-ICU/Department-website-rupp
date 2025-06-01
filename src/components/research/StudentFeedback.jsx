import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import p1 from "../../assets/research/7.png";
import p2 from "../../assets/research/8.jpg";

const feedbackData = [
  {
    name: "Ms. Pheng Sokunnidsa",
    text: [
      "My research journey in networking and cybersecurity has been one of the most rewarding experiences of my academic life. I started by exploring security vulnerabilities in 5G networks, a field that is rapidly evolving. One of the most exciting moments was testing our model in a real-world simulation, where we successfully detected and prevented unauthorized access attempts. This experience not only strengthened my technical expertise but also boosted my confidence in problem-solving and innovation.",
    ],
    image: p1,
  },
  {
    name: "Ms. Leap Phanipha",
    text: [
      "During my research in machine learning and artificial intelligence, I delved into the complexities of deep learning algorithms. I began by understanding the fundamentals of neural networks, and as my research progressed, I implemented various models to predict and classify data. The most rewarding moment came when I saw my models outperform previous benchmarks, providing insights that could be applied in real-world scenarios. This research journey expanded my understanding of AI and solidified my passion for the field of data science.",
    ],
    image: p2,
  },
];

const StudentFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const { name, text, image } = feedbackData[currentIndex];

  return (
    <div className="my-8 sm:my-12 lg:my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-red-900 text-gray-50 rounded-3xl">
        <div className="py-8 sm:py-12 lg:py-16 relative">
          <div
            className="flex flex-col lg:flex-row items-center w-full h-full overflow-hidden"
            role="region"
            aria-label="Student feedback carousel"
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevFeedback}
              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 sm:p-3 bg-white text-gray-700 hover:bg-gray-200 shadow-md z-10"
              aria-label={t("Carousel.Previous slide")}
            >
              <FaChevronLeft className="text-sm sm:text-base" />
            </button>
            <button
              onClick={nextFeedback}
              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 sm:p-3 bg-white text-gray-700 hover:bg-gray-200 shadow-md z-10"
              aria-label={t("Carousel.Next slide")}
            >
              <FaChevronRight className="text-sm sm:text-base" />
            </button>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex flex-col lg:flex-row items-center w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Left - Text Content */}
                <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col justify-center order-2 lg:order-1">
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 ${
                      currentLanguage === "km" ? "font-khmer" : ""
                    }`}
                    lang={currentLanguage}
                  >
                    {t("Research.Student Feedback on Research Experience")}
                  </h2>
                  {text.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed line-clamp-6 sm:line-clamp-none ${
                        currentLanguage === "km" ? "font-khmer" : ""
                      }`}
                      lang={currentLanguage}
                    >
                      {`"${paragraph}"`}
                    </p>
                  ))}
                  <h2
                    className={`text-sm sm:text-base lg:text-lg font-semibold mt-4 ${
                      currentLanguage === "km" ? "font-khmer" : ""
                    }`}
                    lang={currentLanguage}
                  >
                    {name}
                  </h2>
                </div>

                {/* Right - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 relative px-4 sm:px-6">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-[4/3] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-pink-100 transform -translate-x-3 -translate-y-3 rounded-3xl z-0"></div>
                    <img
                      src={image}
                      alt={name}
                      className="relative w-full h-full object-cover rounded-lg shadow-md z-10"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6">
              {feedbackData.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 sm:mx-2 ${
                    currentIndex === index ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={t(`Carousel.Go to slide ${index + 1}`)}
                  aria-current={currentIndex === index ? "true" : "false"}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;