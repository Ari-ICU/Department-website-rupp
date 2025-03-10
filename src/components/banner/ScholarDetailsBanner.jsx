import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Import calendar icon
import scholar from "../../assets/banner/scholardetails.png";

const ScholarDetailsBanner = () => {
    const title = "Woori Bank Scholarship Opportunity";
    const date = "Post on : 22 Aug 2025";
    const backgroundImage = scholar;

    return (

        <div
            className="relative w-full h-[464px] text-white bg-cover bg-center flex items-end"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Fixed Overlay using RGBA */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity
            ></div>
            <div className="container mx-auto">
                {/* Content Positioned at Bottom */}
                <div className="relative z-10 max-w-xl px-6 pb-8 space-y-8">
                    <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-md">{title}</h1>
                    <p className="mt-2 text-md flex items-center drop-shadow-md">
                        <FaCalendarAlt className="mr-2 text-lg " /> {date} {/* Calendar icon */}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ScholarDetailsBanner;
