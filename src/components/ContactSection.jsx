import React from "react";
import contactImage from "../assets/img/event-image-2.jpg";

const ContactUs = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    {/* Image Section */}
                    <div className="order-1 lg:order-2 flex justify-center items-center p-4">
                        <img
                            src={contactImage}
                            alt="Contact Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Contact Form */}
                    <div className="order-2 lg:order-1 py-12 px-4">
                        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-center  mb-8">
                                Contact Us If You Have Any Questions
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            First Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Last Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </div>
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
