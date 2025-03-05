import React from 'react';
import { motion } from 'framer-motion';
import edu from "../../assets/program/p1.png";

const ProgramBanner = () => {
    return (
        <div>

            <motion.div
                className="relative h-[389px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${edu})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg xl:text-3xl font-bold text-white mb-6"
                    >
                        Our Program
                    </motion.h2>
                  
                  
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-gray-200 xl:text-lg text-[14px]"
                    >
                        Explore our curriculum, admission process, career opportunities, and advanced study options to shape your future.
                          </motion.p>
                </div>
            </motion.div>

        </div>
    );
};

export default ProgramBanner;