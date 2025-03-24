import React from 'react';
import { BsViewStacked } from "react-icons/bs";
import SocialIcon from '../social/SocialIcon';
import p2 from '../../assets/img/dr-heng-sovanrith.png';

const ProfileSection = () => {
    return (
        <section className="bg-gray-50 h-full md:h-[400px]">
            {/* Cover Photo Area */}
            <div className='bg-red-900 lg:h-[300px] h-64 sm:h-80 relative'>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex sm:hidden">
                    <div className=" flex justify-center -my-10 ">
                        <SocialIcon />
                    </div>
                
                    </div>
                    {/* Profile Content Container */}
                    <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6 pt-16">
                        {/* Profile Image + Info */}
                        <div className="flex flex-1 items-end gap-0 md:gap-6 w-full">
                            {/* Profile Image */}
                            <div className="absolute md:relative -bottom-20 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0">
                                <div className="w-42 h-42 md:w-56 md:h-56 lg:w-72 lg:h-72 border-4 border-white rounded-full overflow-hidden shadow-xl">
                                    <img
                                        src={p2}
                                        alt="Dr. Heng Sovannrith's Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="hidden md:flex flex-col ml-4 md:ml-6 flex-1 text-white pb-4">
                                <h1 className="text-2xl lg:text-4xl font-bold mb-2">
                                    Dr. Heng Sovannarith
                                </h1>
                                <h2 className="text-lg lg:text-xl text-gray-200">
                                    Assistant Professor
                                </h2>
                                <div className="mt-4">
                                    <SocialIcon />
                                </div>
                            </div>
                        </div>

                        {/* Action Button - Desktop */}
                        <div className="hidden md:flex items-center gap-4">
                            <button className="bg-white hover:bg-gray-100 text-red-900 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-md">
                                <BsViewStacked className="text-lg" />
                                <span>View Portfolio</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Profile Info */}
            <div className="md:hidden pt-24 px-4 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. Heng Sovannarith
                </h1>
                <h2 className="text-lg text-gray-600 mb-4">
                    Assistant Professor
                </h2>
                {/* <div className="flex justify-center -my-10 ">
                    <SocialIcon />
                </div> */}
                <button className="w-full max-w-xs mx-auto bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-md">
                    <BsViewStacked className="text-lg" />
                    <span>View Portfolio</span>
                </button>
            </div>


        </section>
    );
};

export default ProfileSection;