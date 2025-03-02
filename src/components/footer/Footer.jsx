import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CopyRight from './CopyRight';

const Footer = () => {
    return (
        <motion.footer
            className="bg-black text-white py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto border-b mb-5 pb-10 border-gray-400">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 '>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300 ">Our Location</h3>
                        <div>
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed/v1/place?q=123+University+St.+City+Country&key=YOUR_GOOGLE_MAPS_API_KEY"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300 ">Our Pages</h3>
                        <ul className='text-sm font-light text-gray-400'>
                            <li className="mb-2 hover:text-red-900"><Link to="/">Home</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/academics">Academics</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/research">Research</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/programs">Programs</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/people">People</Link></li>
                        </ul>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300 ">Quick Links</h3>
                        <ul className='text-sm font-light text-gray-400'>
                            <li className="mb-2 hover:text-red-900"><Link to="/about">About Us</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/contact">Contact</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/event">Events &News</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/privacy">Privacy Policy</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="/services">Terms of Service</Link></li>
                        </ul>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300 ">Accreditation & Affiliations</h3>

                        <ul className='text-sm font-light text-gray-400'>
                            <li className="mb-2 hover:text-red-900"><Link to="#">Government organizations</Link></li>
                            <li className="mb-2 hover:text-red-900"><Link to="#">International university partners</Link></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
            <div>
                <CopyRight />
            </div>
        </motion.footer>
    );
};

export default Footer;
