import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaXTwitter } from 'react-icons/fa6';

const SocialIcon = () => {
    const location = useLocation();

    // Check if the current location matches the 'faculty/:id' path
    const isFacultyPage = location.pathname.startsWith('/faculty/');

    return (
        <div className="my-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-start">
                    <motion.div
                        className="flex space-x-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {[PiTelegramLogoDuotone, SlSocialFacebook, FaXTwitter].map((Icon, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className={`p-2 rounded-xl shadow-md cursor-pointer ${isFacultyPage ? 'bg-white' : 'bg-red-800'}`}
                                aria-label={`Social Media Icon ${index + 1}`}
                            >
                                <Link to="/">
                                    <Icon className={`h-5 w-5 ${isFacultyPage ? 'text-red-800' : 'text-white'}`} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SocialIcon;
