import React from 'react'
// import { MdComputer } from "react-icons/md";
// import { AiOutlineRobot } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa"; 

import image1 from "../../assets/banner/research.png";


const EventsBanner = () => {

    const bottomSections = [
        {
            title: "Software Engineer: The Life of a Software Engineer: Challenges, Rewards, and Career Growth",
            date:"Post on : 22 Aug 2025",
            image: image1,
        }
    ];

    // const buttons = [
    //     { icon: <MdComputer className="mr-2" />, label: "Computational Advancements" },
    //     { icon: <AiOutlineRobot className="mr-2" />, label: "AI & Systems Optimization" },
    // ];

    return (
        <div className=''>
            <div className=' '>
                <div>
                    {bottomSections.map((section, index) => (
                        <div
                            key={index}
                            className=" h-full overflow-hidden relative group"
                        >
                            <div className='xl:h-[464px] h-full'>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full bg-cover bg-center "
                                />
                            </div>

                            <div className="absolute inset-0 bg-black opacity-50 "></div>
                            <div className="container mx-auto absolute inset-0 p-6 flex flex-col justify-between text-white">
                                <div className="flex flex-col justify-center items-end py-4">
                                    {/* {buttons.map((button, index) => (
                                        <button
                                            key={index}
                                            className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"
                                        >
                                            {button.icon}
                                            {button.label}
                                        </button>
                                    ))} */}
                                </div>
                                <div className='max-w-xl *:mb-6'>
                                    <h3 className="xl:text-3xl text-lg font-semibold mb-2">
                                        {section.title}
                                    </h3>
                                    <p className="mb-4 xl:text-[14px] text-[12px] flex gap-2">
                                         <FaCalendarAlt className="mr-2 text-lg " /> {section.date}
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventsBanner;