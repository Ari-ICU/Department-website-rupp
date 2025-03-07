import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import model from "../../assets/model/web-sample-4_3_-removebg-preview.png.png";

const ComputerScienceDegreeBenefits = () => {
    const benefitsData = [
        {
            title: "In-Demand Skills & Job",
            description:
                "Graduates gain expertise in programming and problem-solving, leading to stable, high-paying tech careers.",
        },
        {
            title: "Innovation & Impact",
            description:
                "With AI and emerging tech skills, graduates drive digital transformation and create advanced solutions.",
        },
        {
            title: "Career Growth & Flexibility",
            description:
                "The degree offers diverse career paths, entrepreneurship opportunities, and continuous advancement.",
        },
    ];

    const [selectedBenefitIndex, setSelectedBenefitIndex] = useState(1);

    const handleBenefitClick = (index) => {
        setSelectedBenefitIndex(index === selectedBenefitIndex ? null : index);
    };

    return (
        <div className="my-12 bg-white">
            <div className="container mx-auto py-12 px-6 xl:px-12">
                <div className="flex flex-col-reverse xl:flex-row items-center gap-12">
                    {/* Left Section - Text */}
                    <div className="w-full xl:w-1/2 text-center xl:text-left">
                        <h2 className="text-3xl xl:text-4xl font-semibold mb-6 text-red-900">
                            Unlock Your Future with a Computer Science Degree
                        </h2>
                        <p className="text-md xl:text-lg text-gray-700">
                            Gain in-demand skills, high-paying jobs, and career flexibility in tech.
                            Whether in AI, cybersecurity, or software development, a Computer Science
                            degree opens doors to innovation, entrepreneurship, and long-term success.
                        </p>
                    </div>

                    {/* Middle Section - Image */}
                    <div className="w-full xl:w-1/2">
                        <img src={model} alt="Computer Science" className="w-full h-auto object-cover" />
                    </div>

                    {/* Right Section - Benefits */}
                    <div className="w-full xl:w-1/3">
                        {benefitsData.map((benefit, index) => (
                            <div
                                key={index}
                                className={`text-left mb-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col xl:flex-row items-center gap-6 ${
                                    selectedBenefitIndex === index
                                        ? "bg-red-900 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                                onClick={() => handleBenefitClick(index)}
                            >
                                <div
                                    className={`p-4 rounded-full flex items-center justify-center border ${
                                        selectedBenefitIndex === index ? "border-white" : "border-red-900"
                                    }`}
                                >
                                    <FaCheck
                                        className={`text-lg ${
                                            selectedBenefitIndex === index ? "text-white" : "text-red-900"
                                        }`}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                    <p className="text-md">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerScienceDegreeBenefits;
