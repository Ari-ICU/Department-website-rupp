import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiDoubleQuotesR } from "react-icons/ri";
import p1 from '../../assets/developer/vakhim.png';
import SocialIcon from '../social/SocialIcon';

const TeamLeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOverlayClick = (e) => {
        // Close the modal when clicking outside the modal content
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <div className='space-y-10'>
                    <div className=''>
                        <h1 className='text-3xl font-semibold '>Projects Leader </h1>
                    </div>
                    <div className='max-w-5xl mx-auto shadow-lg rounded-2xl items-center p-4'>
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            {/* Image Container */}
                            <div className="relative w-full h-96 mb-4 group">
                                <img
                                    src={p1}
                                    alt={name}
                                    className="w-full h-full rounded-2xl object-cover group-hover:brightness-90 transition-all duration-300"
                                />

                                {/* Social Media Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center"
                                >
                                    {/* Social Icons Container */}
                                    <div className="absolute top-4 right-4 group-hover:bg-black/10 p-2 transition-all duration-300 rounded-2xl">
                                        <motion.div
                                            initial={{ y: 20 }}
                                            animate={{ y: 0 }}
                                            className=" space-y-2"
                                        >
                                            {/* Facebook Link */}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="bg-white p-3 rounded-full shadow-lg"
                                            >
                                                <Link to="#" className="text-gray-700 hover:text-red-600">
                                                    <FaFacebookF className="text-xl" />
                                                </Link>
                                            </motion.div>

                                            {/* Telegram Link */}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="bg-white p-3 rounded-full shadow-lg"
                                            >
                                                <Link to="#" className="text-gray-700 hover:text-red-400">
                                                    <FaTelegramPlane className="text-xl" />
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className='space-y-6 max-w-xl relative'>
                                <div className='absolute right-0 -top-6 flex justify-end text-right'>
                                    <RiDoubleQuotesR className='text-7xl text-red-900' />
                                </div>
                                <h1 className='text-2xl font-semibold '>Mr. Leang Vakhim</h1>
                                <p>Backend Lead/Frontend Lead</p>
                                <p className=''>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                </p>
                                <button onClick={() => setIsOpen(true)} className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="modal-overlay fixed inset-0 bg-gray-900/75 flex justify-center items-center z-50"
                    onClick={handleOverlayClick}
                >
                    <div className=' container mx-auto'>
                        <div className="bg-white flex items-center gap-10 p-6 rounded-2xl shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="relative w-full h-full mb-4 group">
                                <img
                                    src={p1}
                                    alt={name}
                                    className="w-full h-full rounded-2xl object-contain"
                                />
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold '>Mr. Leang Vakhim</h1>
                                <p>Backend Lead/Frontend Lead</p>
                                <p className=''>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                </p>
                                <div className='text-start'>
                                    <SocialIcon />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeamLeader;
;
