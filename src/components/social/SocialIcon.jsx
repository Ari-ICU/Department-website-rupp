import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTelegram, FaFacebookF, FaTimes } from 'react-icons/fa';


const SocialIcon = () => {
    return (
        <div className='my-16'>
            <div className='max-w-4xl mx-auto  px-4'>
                {/* Right Section with Social Media Icons */}
                <div className=''>
                    <motion.div
                        className="flex  space-x-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {[FaTelegram, FaFacebookF, FaTimes].map((Icon, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="bg-black p-2 rounded-xl shadow-md cursor-pointer"
                                aria-label={`Social Media Icon ${index + 1}`}
                            >
                                <Link to="/" className="text-gray-50">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SocialIcon