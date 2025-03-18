import React from 'react'
import { motion } from 'framer-motion'

const Overview = () => {
    return (
        <div className="my-16">
        <div className='container mx-auto px-4'>
            <div className='space-y-4'>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-extrabold text-gray-900"
                >
                    Overview
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[12px] xl:text-[20px] text-gray-900"
                >
                    The Computer Science Department offers a comprehensive undergraduate program designed to provide students with a strong foundation in computing principles, programming, and modern technologies. Our curriculum emphasizes both theoretical and practical aspects of computer science, equipping graduates with the skills needed for a successful career in the ever-evolving tech industry. Students will engage in hands-on projects, internships, and research initiatives to gain real-world experience.
                </motion.p>
            </div>
        </div>
        </div>
    )
}

export default Overview
