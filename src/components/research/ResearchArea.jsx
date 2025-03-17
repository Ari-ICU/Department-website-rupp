import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaMicrochip, FaNetworkWired, FaCode, FaMicrophone } from "react-icons/fa"; // Added new icons
import p3 from "../../assets/research/5.png";
import p4 from "../../assets/research/6.png";

const ResearchArea = () => {
    const requirements = [
        {
            title: "Computer Architecture & Robotics",
            icon: <FaMicrochip size={22} className="text-red-900" />,
            description:
                "We optimize processor design, parallel computing, and energy-efficient systems while exploring emerging fields like neuromorphic and quantum computing.",
        },
        {
            title: "Networking & Cybersecurity",
            icon: <FaNetworkWired size={22} className="text-red-900" />,
            description:
                "We focus on next-gen networking (5G, 6G, SDN), secure communications, blockchain security, and IoT connectivity for reliable global communication.",
        },
        {
            title: "Web Technologies & Software Engineering",
            icon: <FaCode size={22} className="text-red-900" />,
            description:
                "Our research explores modern web frameworks, scalable architectures, PWAs, and cloud solutions, ensuring security, performance, and accessibility.",
        },
        {
            title: "Internet of Things (IoT) & Embedded Systems",
            icon: <FaMicrophone size={22} className="text-red-900" />,
            description:
                "We develop secure and efficient IoT systems, edge computing solutions, and sensor networks for smart cities, healthcare, and automation.",
        },
    ];

    return (
        <div className="my-16">
            <motion.div
               
                className="container mx-auto px-4"
            >
               

                <div className=" h-full flex flex-col xl:flex-row items-center gap-8 py-8 xl:py-0">
                    {/* Left Column - Image Content */}
                    <motion.div
                       
                        className="w-full xl:w-1/2 lg:h-[479px] mx-auto h-[360px] order-1 xl:order-2"
                    >
                        <div className="relative flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center gap-4 xl:gap-6 w-full">
                                {/* Left Image */}
                                <div className="h-[200px] w-[150px] lg:h-[347px] lg:w-[265px] transition transform -translate-y-2">
                                    <img
                                        src={p3}
                                        alt="Research 1"
                                        className="w-full h-full rounded-tl-[100px] object-cover"
                                    />
                                </div>
                                {/* Right Image */}
                                <div className="h-[250px] w-[150px] lg:w-[254px] lg:h-[381px] transition transform translate-y-22">
                                    <img
                                        src={p4}
                                        alt="Research 2"
                                        className="w-full h-full object-cover rounded-tr-[100px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                       
                        className="w-full xl:w-1/2 px-4 xl:px-0 order-2 xl:order-1"
                    >
                        <h3 className="xl:text-4xl text-2xl font-semibold mb-4">
                            Research Areas & Specializations
                        </h3>

                        <p className="text-gray-800">
                            Our department is engaged in diverse research fields, pushing the boundaries of technology. Some of our key areas of focus include:
                        </p>

                        <div className="grid grid-cols-1 mt-6">
                            {requirements.map((requirement, index) => (
                                <div key={index} className="mb-6 flex gap-4">
                                    <div className="flex items-center justify-center">
                                    <div className="border border-red-800 rounded-full p-2">
                                            {requirement.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="text-lg font-bold">{requirement.title}</h6>
                                        <p className="text-sm xl:text-lg">{requirement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResearchArea;
