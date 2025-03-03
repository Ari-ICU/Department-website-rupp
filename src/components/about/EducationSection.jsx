import React from 'react';
import { motion } from 'framer-motion';
import edu from "../../assets/img/edu.png";

const EducationSection = () => {
    return (
        <motion.div
            className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${edu})` }}
        >
            {/* Overlay to improve text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-6"
                >
                    We Believe That Education Is An
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-6"
                >
                    Important Aspect In Every
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-6"
                >
                    Person's Life
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-200 text-lg"
                >
                    Education is the key that unlocks the door to endless possibilities and personal growth.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default EducationSection;