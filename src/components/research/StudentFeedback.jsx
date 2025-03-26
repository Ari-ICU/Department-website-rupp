import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import p1 from '../../assets/research/7.png';
import p2 from '../../assets/research/8.jpg';

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

  const { name, text, image } = feedbackData[currentIndex];

  return (
    <div className="my-16">
      <div className="container mx-auto px-4 bg-red-900 text-gray-50 rounded-3xl">
        <div className="py-16">
          <div className="flex w-full h-full overflow-hidden relative transition-all duration-500">
            <button
              onClick={prevFeedback}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-md bg-white text-gray-700 hover:bg-gray-200"
            >
              <FaChevronLeft />
            </button>
            <div className="flex flex-col lg:flex-row px-4 lg:px-20 w-full h-full">
              {/* Left - Text Content */}
              <div className="flex-1 xl:p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Student Feedback on Research Experience
                </h2>
                {text.map((paragraph, index) => (
                  <p key={index} className="mb-2 text-sm text-gray-200 leading-relaxed">
                    {`"${paragraph}"`}
                  </p>
                ))}
                <h2 className="text-sm font-semibold mt-4">{name}</h2>
              </div>

              {/* Right - Image */}
              <div className="flex-1 relative flex justify-cente h-full">
                <div className="absolute bg-pink-100 -top-6 rounded-3xl h-full w-[403px] right-0 "></div>
                <div className="absolute right-10 top-6 h-full w-[403px] rounded-3xl">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={nextFeedback}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-md bg-white text-gray-700 hover:bg-gray-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
