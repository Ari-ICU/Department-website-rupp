import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaBookOpen, FaWifi } from 'react-icons/fa';
import m1 from '../../assets/facilities/2.png';

const AcademicFacilities = () => {
    const facilities = [
        {
            title: 'Comfortable Classroom',
            description: 'Well-equipped learning spaces designed for interactive and engaging education.',
            icon: <FaChalkboardTeacher className="text-3xl text-white" />,
        },
        {
            title: 'Lab Activities',
            description: 'Modern computer labs with high-performance desktops for hands-on practice and skill development.',
            icon: <FaLaptopCode className="text-3xl text-white" />,
        },
        {
            title: 'Library & Research',
            description: 'A vast collection of books, research papers, and digital resources to support academic growth.',
            icon: <FaBookOpen className="text-3xl text-white" />,
        },
        {
            title: 'Free Internet',
            description: 'Campus-wide internet access throughout the campus, ensuring seamless connectivity for study and research.',
            icon: <FaWifi className="text-3xl text-white" />,
        },
    ];

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row items-center ">
                    
                    {/* Image Section */}
                    <div className="w-full xl:w-[651px] h-full xl:h-[615px] flex justify-center xl:justify-start">
                        <div className="">
                            <img
                                src={m1}
                                alt="Academic Facilities"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full xl:w-[878px] h-full xl:h-[432px] ">
                        <h2 className="text-3xl xl:text-4xl font-extrabold text-gray-900 text-center xl:text-left">
                            Academic Facilities
                        </h2>
                        <p className="text-gray-600 text-center xl:text-left mt-4 mb-8 text-lg">
                            Our well-equipped classrooms, libraries, and students have access to top-tier educational resources.
                        </p>

                        {/* Facilities Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {facilities.map((facility, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 shadow-lg flex items-center gap-4 hover:shadow-xl hover:scale-105 transition duration-300"
                                >
                                    {/* Icon Section */}
                                    <div className="p-2 flex items-center justify-center rounded-lg bg-red-700">
                                        {facility.icon}
                                    </div>

                                    {/* Text Section */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
                                        <p className="text-gray-600">{facility.description}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AcademicFacilities;
