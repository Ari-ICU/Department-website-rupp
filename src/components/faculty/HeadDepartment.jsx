import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { RiDoubleQuotesR } from "react-icons/ri";
import { Link } from 'react-router-dom';
import p1 from '../../assets/img/professor/chi-koung.jpg';
import SocialIcon from '../social/SocialIcon';

const HeadDepartment = () => {
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
                        <h1 className='text-3xl font-semibold '>Head of Department</h1>
                    </div>
                    <div className='max-w-5xl mx-auto shadow-lg rounded-2xl items-center p-4'>
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            <div className="relative h-72 mb-4 group">
                                <img
                                    src={p1}
                                    alt="Asst. Prof. Chi Kuong"
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-2 right-2 space-x-2 space-y-4 text-center bg-gray-400/50 py-6 px-2 rounded-2xl flex flex-col justify-center items-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-black p-2 rounded-lg text-center"
                                    >
                                        <Link to="#" className="text-white text-xl hover:text-red-600">
                                            <FaFacebookF />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-black p-2 rounded-lg text-center"
                                    >
                                        <Link to="#" className="text-white text-xl hover:text-red-400">
                                            <FaTelegramPlane />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                            <div className='space-y-6 max-w-xl relative'>
                                <div className='absolute right-0 -top-6 flex justify-end text-right'>
                                    <RiDoubleQuotesR className='text-7xl text-red-900' />
                                </div>
                                <h1 className='text-2xl font-semibold '>Asst. Prof. Chi Kuong</h1>
                                <p className=''>Asst. Prof. Chi Kuong (1989): B.Sc. (Chemistry), RUPP , 1991; Advanced Tools & Techniques in Computer Applications Development (AIT, Thailand), 1995; 2nd AIT-SIDA, Faculty Development Program for Cambodia Educational Institutions, (AIT, Thailand), 1995; Upgrading Program in Computer Science, (Quezon, Philippines), 1996- 97; M.Sc. (Computer Science), Ateneo de Manila University (Philippines), 2000.</p>
                                <button onClick={() => setIsOpen(true)} className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={handleOverlayClick} // Close modal when clicking outside
                >
                    <div className="bg-white p-6 rounded-2xl container flex justify-center items-center gap-10 shadow-lg " onClick={(e) => e.stopPropagation()}>
                        <div className="relative mb-4 group">
                            <img
                                src={p1}
                                alt="Asst. Prof. Chi Kuong"
                                className="w-96 h-72 rounded-2xl object-cover"
                            />
                        </div>
                        <div className='max-w-4xl'>
                            <h2 className="text-2xl font-semibold mb-4">Asst. Prof. Chi Kuong</h2>
                            <p className="mb-4">Asst. Prof. Chi Kuong (1989): B.Sc. (Chemistry), RUPP , 1991; Advanced Tools & Techniques in Computer Applications Development (AIT, Thailand), 1995; 2nd AIT-SIDA, Faculty Development Program for Cambodia Educational Institutions, (AIT, Thailand), 1995; Upgrading Program in Computer Science, (Quezon, Philippines), 1996- 97; M.Sc. (Computer Science), Ateneo de Manila University (Philippines), 2000.</p>
                            <SocialIcon />
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default HeadDepartment;
