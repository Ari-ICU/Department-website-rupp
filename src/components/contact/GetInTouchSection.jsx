import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import world from "../../assets/img/world.png"; // Import the image

// Dynamic data for the section
const contactData = {
    heading: "Get In Touch With Us",
    description: "Get in Touch With Us – We’re Here to Answer Your Questions, Provide Support, and Assist You Every Step of the Way!",
    contactDetails: [
        {
            id: 1,
            icon: <FaMapMarkerAlt className="w-8 h-8" />,
            title: "Location",
            content: "44:20 4164 2541",
            iconColor: "text-red-600",
            bgColor: "bg-blue-100",
        },
        {
            id: 2,
            icon: <FaPhoneAlt className="w-8 h-8" />,
            title: "Phone Number",
            content: "+168 234 567 890",
            iconColor: "text-red-600",
            bgColor: "bg-green-100",
        },
        {
            id: 3,
            icon: <FaEnvelope className="w-8 h-8" />,
            title: "Email",
            content: "rupp.edu@gmail.com",
            iconColor: "text-red-600",
            bgColor: "bg-purple-100",
        },
    ],
};

const GetInTouchSection = ({ data = contactData }) => {
    return (
        <div className='py-16 '>
            <div className='bg-red-900 '>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
                    {/* Image Column */}
                    <motion.div
                        className="container  mx-auto xl:h-[500px] h-full "
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img
                            src={world}
                            alt="World Map"
                            className="w-full h-full mx-auto object-cover rounded-lg "
                        />
                    </motion.div>

                    {/* Contact Section Column */}
                    <motion.section
                        className="px-4 xl:max-w-[634px] max-w-full py-10 mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="text-center">
                            {/* Heading */}
                            <motion.h2
                                className="text-3xl sm:text-4xl font-bold text-gray-300 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {data.heading}
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                className="text-lg text-gray-400 mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {data.description}
                            </motion.p>

                            {/* Contact Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {data.contactDetails.map((contact, index) => (
                                    <motion.div
                                        key={contact.id}
                                        className="flex flex-col items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Icon */}
                                        <div className={`${contact.bgColor} p-4 rounded-full ${contact.iconColor}`}>
                                            {contact.icon}
                                        </div>
                                        {/* Title and Content */}
                                        <h3 className="mt-4 text-xl font-semibold text-gray-900">{contact.title}</h3>
                                        <p className="mt-2 text-gray-400">{contact.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default GetInTouchSection;