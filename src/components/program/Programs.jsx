import React, { useEffect } from 'react';
import { MdSchool } from 'react-icons/md';
import { motion } from 'framer-motion';
import images from '../../assets/program/p2.png';
import { Link, useLocation } from 'react-router-dom';

const Programs = () => {
    const location = useLocation();

    const programs = [
        {
            title: 'Bachelor Degree',
            image: images,
            link: "/bachelor"
        },
        {
            title: 'Master Degree',
            image: images,
            link: "/"
        },
        {
            title: 'Doctoral Degree',
            image: images,
            link: "/"
        },
        {
            title: 'Diploma Degree',
            image: images,
            link: "/"
        },
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
        >
            <h2 className="text-3xl font-bold text-center mb-8">
                Available Programs & Degree
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {programs.map((program, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        viewport={{ once: true }}
                        className="relative rounded-lg overflow-hidden"
                        whileTap={{ scale: 0.95 }} // 👈 Scale down on click
                    >
                        <Link to={program.link}>
                            <div className="h-52">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="absolute inset-x-0 bottom-0 bg-white shadow-md rounded-2xl p-2 px-4 flex items-center justify-center gap-6 mb-2 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <MdSchool className="text-2xl text-gray-600" />
                                    </div>
                                    <span className="border h-6"></span>
                                    <div className="2xl:text-lg text-[12px] font-medium text-center">
                                        {program.title}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Programs;
