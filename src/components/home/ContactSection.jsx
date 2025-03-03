import React from "react";
import { motion } from "framer-motion";
import contactImage from "../../assets/img/contact.png";

const ContactUs = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className=" relative"
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 flex justify-center items-center p-4 relative w-full lg:w-1/2"
                    >
                        <img
                            src={contactImage}
                            alt="Contact Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 py-12 px-4 w-full lg:w-1/2"
                    >
                        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
                            <motion.h2 
                                initial={{ opacity: 0, y: -20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-center mb-8"
                            >
                                Contact Us If You Have Any Questions
                            </motion.h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }} 
                                        whileInView={{ opacity: 1, y: 0 }} 
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700">
                                            First Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }} 
                                        whileInView={{ opacity: 1, y: 0 }} 
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700">
                                            Last Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </motion.div>
                                </div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }} 
                                    whileInView={{ opacity: 1, scale: 1 }} 
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex justify-center"
                                >
                                    <button
                                        type="submit"
                                        className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Submit
                                    </button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;
