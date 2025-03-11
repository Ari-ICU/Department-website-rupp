import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaCalendarAlt } from "react-icons/fa";
import scholar from "../../assets/banner/scholardetails.png";

const ScholarDetailsBanner = () => {
    const title = "Woori Bank Scholarship Opportunity";
    const date = "Post on : 22 Aug 2025";
    const backgroundImage = scholar;

    return (
        <motion.div
            className="relative w-full h-[464px] text-white bg-cover bg-center flex items-end"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8 }} // Animation duration
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        >
            {/* Fixed Overlay using RGBA */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity
            ></div>

            <div className="ml-6">
                {/* Content Positioned at Bottom */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative z-10 max-w-xl px-6 pb-8 space-y-8"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold drop-shadow-md"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="mt-2 text-md flex items-center drop-shadow-md"
                    >
                        <FaCalendarAlt className="mr-2 text-lg" /> {date} {/* Calendar icon */}
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ScholarDetailsBanner;