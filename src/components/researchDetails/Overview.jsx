import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {

    const overviewContent = {
        title: 'About The Project',
        description: "This project focuses on creating a smart home system controlled via a mobile application, allowing users to manage various aspects of their home from anywhere. The mobile app integrates with IoT-enabled devices, enabling users to control lighting, appliances, security systems, and more, all from the convenience of their smartphones."
    };

    return (
        <div className="my-16 py-4"> 
            <div className="container mx-auto px-4"> {/* Added px-4 for horizontal padding */}
                <div className="space-y-4 flex flex-col xl:flex-row gap-10">
                    <div className=" w-full mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="xl:text-3xl w-full text-2xl font-extrabold text-gray-900"
                        >
                            {overviewContent.title} {/* Use overviewContent here */}
                        </motion.h2>
                    </div>
                    <div className=" w-full mx-auto">
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-sm w-full xl:text-lg text-gray-800"
                        >
                            {overviewContent.description} {/* Use overviewContent here */}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
