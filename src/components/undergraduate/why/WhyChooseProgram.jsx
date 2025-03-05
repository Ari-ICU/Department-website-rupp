import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2, // Add a stagger effect for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            className="bg-gray-100 py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <div className='flex justify-between'>
                    <motion.h2
                        className="text-3xl font-bold text-center mb-8"
                        variants={itemVariants}
                    >
                        Why Choose Our Program
                    </motion.h2>
                    <motion.div
                        className="text-center mb-12"
                        variants={itemVariants}
                    >
                        <p className="max-w-3xl text-start">
                            We offer a top-tier Computer Science education with expert faculty,
                            cutting-edge facilities, and strong industry ties for internships and
                            jobs. Our globally aligned curriculum, research in AI, cybersecurity,
                            and data science, plus hackathons and student organizations, foster
                            innovation and career growth.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    {/* First Card */}
                    <motion.div
                        className="bg-red-700 text-white rounded-lg p-6 relative"
                        variants={itemVariants}
                    >
                        <div className="absolute top-4 right-4 text-6xl opacity-20">"</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Expert Faculty & Cutting-Edge Facilities
                        </h3>
                        <p>
                            Learn from industry professionals and researchers while accessing
                            modern labs, research centers, and collaborative spaces.
                        </p>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        className="bg-white rounded-lg p-6 relative"
                        variants={itemVariants}
                    >
                        <div className="absolute top-4 right-4 text-6xl opacity-20 text-red-700">
                            "
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-red-700">
                            Strong Industry Connections
                        </h3>
                        <p className="text-gray-700">
                            Benefit from internships and job opportunities through partnerships
                            with top tech companies.
                        </p>
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        className="bg-white rounded-lg p-6 relative"
                        variants={itemVariants}
                    >
                        <div className="absolute top-4 right-4 text-6xl opacity-20 text-red-700">
                            "
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-red-700">
                            Globally Aligned Curriculum & Research Opportunities
                        </h3>
                        <p className="text-gray-700">
                            Stay ahead with an internationally recognized curriculum and engage
                            in research in AI, cybersecurity, and data science.
                        </p>
                    </motion.div>

                    {/* Fourth Card */}
                    <motion.div
                        className="bg-white rounded-lg p-6 relative"
                        variants={itemVariants}
                    >
                        <div className="absolute top-4 right-4 text-6xl opacity-20 text-red-700">
                            "
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-red-700">
                            Dynamic Student Community
                        </h3>
                        <p className="text-gray-700">
                            Join hackathons, coding competitions, and tech meetups to enhance
                            skills, network, and innovate.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WhyChooseUs;