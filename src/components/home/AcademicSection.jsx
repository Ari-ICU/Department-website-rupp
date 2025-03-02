import React from 'react';

// Icon import
import { MdSchool } from 'react-icons/md';

// Image imports
import image1 from '../../assets/img/dr-heng-sovanrith.jpg';

const AboutSection = () => {
    return (
        <div className=''>
            <div className=''>
                <section className="flex flex-col lg:flex-row items-center justify-center py-10 px-4 gap-6">
                   
                    {/* Text Section */}
                    <div className="order-2 lg:order-1 lg:w-1/2 p-4">
                        <h2 className="text-3xl font-bold mb-4">Academics</h2>
                        <p className="text-md text-gray-500 mb-6">
                            The Computer Science Department offers a comprehensive undergraduate program designed to provide students with a strong foundation in computing principles, programming, and modern technologies.
                            Our curriculum emphasizes both theoretical and practical aspects of computer science, equipping graduates with the skills needed for a successful career in the ever-evolving tech industry.
                        </p>

                        {/* Program Info */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                            <div className='flex flex-wrap gap-4 border border-red-800 p-2 rounded-xl justify-center items-center'>
                                <div className='border border-red-800 rounded-4xl p-2'>
                                    <MdSchool size={25} className='text-red-800' />
                                </div>
                                <p className="text-lg font-medium">Undergraduate Program</p>
                            </div>
                            <div className='flex flex-wrap gap-4 border border-red-800 p-2 rounded-xl justify-center items-center'>
                                <div className='border border-red-800 rounded-4xl p-2'>
                                    <MdSchool size={25} className='text-red-800' />
                                </div>
                                <p className="text-lg font-medium">Graduate Program</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className='p-3'>
                            <button className='bg-red-800 text-white rounded-4xl py-2 px-6 hover:bg-red-600 transition duration-300'>
                                Explore
                            </button>
                        </div>
                    </div>

                     {/* Image Section */}
                     <div className="order-1 lg:order-2 p-4">
                        <img
                            src={image1}
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                </section>
            </div>
        </div>
    );
};

export default AboutSection;
