import React from 'react';
import { BsViewStacked } from "react-icons/bs";
import SocialIcon from '../social/SocialIcon';
import p2 from '../../assets/img/dr-heng-sovanrith.png';


const ProfileSection = () => {
    return (
        <section className="bg-gray-50 h-[400px]">
            <div className='bg-red-800'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                        <div className='flex gap-20 items-end'>


                            {/* Image Section */}
                            <div className="relative -bottom-20 w-72 h-72">
                                <img
                                    src={p2}
                                    alt="Dr. Heng Sovannrith's Portrait"
                                    className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
                                Dr. Heng Sovannarith
                                </h1>
                                <h2 className="text-xl md:text-2xl text-gray-100 ">
                                    Assistant Professor
                                </h2>
                                <div className='-mt-10'>
                                    <SocialIcon />

                                </div>
                            </div>
                        </div>
                        <button className="mt-4 bg-gray-50 flex gap-10 text-red-900 px-6 py-3 rounded-lg transition-colors duration-300">
                            <BsViewStacked className="text-lg text-red-900" />
                            View Portfolio

                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;