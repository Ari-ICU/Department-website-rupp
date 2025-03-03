import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CopyRight from './CopyRight';

const Footer = () => {
    return (
        <motion.footer
            className="bg-black text-white py-8 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto border-b mb-5 pb-10 border-gray-400">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4'>
                    {/* Location Column with Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300">Our Location</h3>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1734.8315755259034!2d104.89042472626606!3d11.568792400061744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1740962585390!5m2!1sen!2skh"
                                width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                            ></iframe>

                        </div>
                    </motion.div>

                    {/* Pages Column with Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300">Our Pages</h3>
                        <ul className='text-sm font-light text-gray-400'>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/">Home</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/academics">Academics</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/research">Research</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/programs">Programs</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/people">People</Link>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Quick Links Column with Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300">Quick Links</h3>
                        <ul className='text-sm font-light text-gray-400'>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/about">About Us</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/contact">Contact</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/event">Events & News</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/privacy">Privacy Policy</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="/services">Terms of Service</Link>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Accreditation Column with Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg font-normal mb-4 border-b-2 border-gray-300">Accreditation & Affiliations</h3>
                        <ul className='text-sm font-light text-gray-400'>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="#">Government organizations</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mb-2 hover:text-red-900"
                            >
                                <Link to="#">International university partners</Link>
                            </motion.li>
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