import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import edu from "../../assets/program/p1.png";

const ProgramBanner = () => {
    return (
        <div className='max-w-8xl mx-auto bg-orange-100'>
            <motion.div
                className="relative h-[464px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${edu})` }}
                initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.8 }} // Animation duration
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg xl:text-3xl font-bold text-white mb-6"
                    >
                        Our Program
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-gray-50 text-[14px] xl:text-lg"
                    >
                        Explore our curriculum, admission process, career opportunities, and advanced study options to shape your future.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProgramBanner;