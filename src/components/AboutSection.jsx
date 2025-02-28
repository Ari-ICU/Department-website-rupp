import React from 'react';
import { FaCheck } from 'react-icons/fa';

// Image imports
import image1 from '../assets/img/dr-heng-sovanrith.jpg';
import image2 from '../assets/img/event-image-1.jpg';

const AboutSection = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <section className="flex flex-col lg:flex-row items-center justify-center p-8">
                    {/* Text Section */}
                    <div className="lg:w-1/2 p-4 order-2 lg:order-1"> {/* Apply order for mobile and desktop */}
                        <h2 className="text-3xl font-bold mb-4">Department of Computer Science</h2>
                        <p className="text-sm text-gray-500">
                            Offers the first Computer Science degree program, designed to provide students with a strong foundation in both theory and practical skills. We ensure that our curriculum aligns with industry standards, equipping graduates with the knowledge needed to succeed in the competitive job market. With a team of highly skilled professors who bring both academic expertise and real-world experience, we prepare students for careers in technology and innovation. We offer:
                        </p>
                        <ul className="list-none space-y-4 mt-4">
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Programming (Desktop, Mobile, and Web Application)
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                System Analysis & Design and Development
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Software Engineering and IT Project Management
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Database Management
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Computer Networks, Cloud Computing & Cybersecurity
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Artificial Intelligence
                            </li>
                            <li className="flex items-center">
                                <div className='border border-red-800 p-2 rounded-4xl mr-2'>
                                    <FaCheck className=" text-red-800" />
                                </div>
                                Computer Architecture and Embedded Systems
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-1/2 p-4 order-1 lg:order-2"> {/* Use grid for layout */}
                        {/* Image 1 */}
                        <div className="p-4">
                            <img
                                src={image1}
                                alt="About Us"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        {/* Image 2 - Hidden on small screens */}
                        <div className="p-4 lg:block hidden">
                            <img
                                src={image2}
                                alt="About Us"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutSection;
