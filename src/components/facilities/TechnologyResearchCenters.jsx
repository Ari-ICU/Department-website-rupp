import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import p6 from '../../assets/facilities/1.png';

const TechnologyResearchCenters = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.1 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="my-16">
            <motion.div
                className="container mx-auto w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg text-center relative overflow-hidden"
                style={{
                    backgroundImage: `url(${p6})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Overlay to ensure readability */}
                <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

                {/* Content inside the overlay */}
                <motion.div className="relative flex items-center justify-center h-full text-white p-6 md:p-8" variants={textVariants}>
                    <div>
                    <motion.h1 className="text-2xl font-bold mb-6 text-center" variants={textVariants}>
                        Technology & Research Centers

                    </motion.h1>
                    <p>From AI labs to cybersecurity centers, we provide students with the latest tools to drive innovation and research.</p>
               </div>  
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TechnologyResearchCenters;
