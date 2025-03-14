import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import p2 from '../../assets/img/dr-heng-sovanrith.png';
import p3 from '../../assets/img/professor/p1.png';
import SocialIcon from '../social/SocialIcon';

const FacultyMembers = () => {
    const [selectedDeputy, setSelectedDeputy] = useState(null);
    const [showCard, setShowCard] = useState(true);
    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedDeputy(null);
            }
        };

        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const deputyData = [
        {
            name: "Dr. Heng Sovannrith",
            image: p2,
            position: "Assistant Professor",
            details: " Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            name: "Asst. Prof. Dr. Chor Chandara",
            image: p3,
            position: "Assistant Professor",
            details: " Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            name: "Asst. Prof. Dr. Chor Chandara",
            image: p3,
            position: "Assistant Professor",
            details: " Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            name: "Asst. Prof. Dr. Chor Chandara",
            image: p3,
            position: "Assistant Professor",
            details: " Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
    ];

    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <div className='space-y-10'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl font-semibold '>Faculty Members</h1>
                        <MdOutlineKeyboardArrowDown
                            className={`text-4xl cursor-pointer ${showCard ? 'rotate-180' : ''}`}
                            onClick={() => setShowCard(!showCard)}
                        />
                    </div>
                    {showCard && (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                            {deputyData.map((deputy, index) => (
                                <div key={index} className='shadow-lg rounded-2xl p-4'>
                                    <div className='gap-6 items-center'>
                                        {/* Image Container */}
                                        <div className="relative w-full h-96 mb-4 group">
                                            <img
                                                src={deputy.image}
                                                alt={deputy.name}
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
                                        <div className='space-y-6 max-w-md relative text-center'>
                                           <div className='space-y-2'>
                                           <h1 className='text-2xl font-semibold '>{deputy.name}</h1>
                                           <p className=''>{deputy.position}</p>
                                           </div>
                                            <button onClick={() => setSelectedDeputy(deputy)} className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'>View</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {selectedDeputy && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
                    <div
                        ref={modalRef}
                        className='bg-white container mx-auto p-6 rounded-lg shadow-lg w-full flex flex-col lg:flex-row gap-10 items-center justify-center'
                    >
                        <div className='w-full mx-auto'>
                            <img src={selectedDeputy.image} alt={selectedDeputy.name} className='w-96 h-82 mx-auto ' />
                        </div>
                        <div className='max-w-8xl mx-auto space-y-2 p-6'>
                            <h2 className='text-2xl font-semibold'>{selectedDeputy.name}</h2>
                            <p className='text-gray-600 '>{selectedDeputy.position}</p>
                            <p className='text-gray-700'>{selectedDeputy.details}</p>
                            <SocialIcon />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyMembers;
