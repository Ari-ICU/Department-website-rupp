import React from 'react';
import p1 from '../../assets/research/9.png'
import { Link } from 'react-router-dom';

const ProfessorSection = () => {
    const professorData = {
        professorName: 'Heng Sovannarith',
        professorTitle: 'Asst. Prof. Dr. Heng Sovannarith',
        labDescription:
            'The Smart Home & IoT Innovation Lab is led by Prof. Heng Sovannarith, a dedicated researcher and expert in IoT, embedded systems, and smart automation. With extensive experience in developing intelligent, connected technologies, Prof. Heng Sovannarith guides students in exploring innovative solutions for smart home automation, security, and energy efficiency. Under his leadership, the lab focuses on hands-on research, enabling students to work with real-world IoT applications, develop prototype systems, and contribute to cutting-edge advancements in smart living technologies. He is passionate about mentoring students, fostering innovation, and collaborating with industry partners to push the boundaries of IoT research.',
        contactPhone: '098 989 898',
        contactEmail: 'example@gmail.com',
        imageUrl: p1 ,
    };

    // Destructuring to extract values
    const { professorName, professorTitle, labDescription, contactPhone, contactEmail, imageUrl } = professorData;

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <div className='flex flex-col md:flex-row items-center gap-10'>
                    {/* Image Section */}
                    <div className=" h-[517px] lg:w-[476px] w-full ">
                        <img
                            src={imageUrl}
                            alt={`Professor ${professorName}`}
                            className="rounded-lg shadow-lg w-full h-full"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-2/3 md:pl-8">
                        <h2 className="text-3xl font-semibold mb-4">Meet With Our Professor</h2>
                        <h3 className="text-xl font-medium mb-2">{professorTitle}</h3>
                        <p className="text-gray-700 mb-6">{labDescription}</p>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <h6 className="text-lg font-medium mb-2">Contact Info</h6>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href={`tel:${contactPhone}`}
                                    className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm"
                                >
                                    {contactPhone}
                                </Link>
                                <Link
                                    href={`mailto:${contactEmail}`}
                                    className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm"
                                >
                                    {contactEmail}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfessorSection;
