import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const ImportantDates = () => {
    const dates = [
        {
            title: 'Application Opens',
            date: '1 Jan',
            subtitle: 'Admission First Open for Bachelor Degree.',
            description: 'Our computer science along side with other departments have an opening of admission in the early Jan.',
        },
        {
            title: 'Early Application Deadline',
            date: '2 Feb',
            subtitle: 'Admission Closing for Bachelor Degree.',
            description: 'We stop accepting an application after 2 Feb or earlier depending on the number of applicants.',
        },
        {
            title: 'Entrance Exam Date',
            date: '3 Feb',
            subtitle: 'Entrance Exam Date.',
            description: 'After applying, students are required to take an entrance exam hosted by the Royal University of Phnom Penh. Only suitable candidates are accepted.',
        },
        {
            title: 'Results Announcement & Enrollment',
            date: '13 Feb',
            subtitle: 'Announcement of Result. We will announce the final result in early Feb.',
            description: 'Accepted candidates can complete their payment after the results are out.',
        },
    ];

    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                <div className='flex flex-col xl:flex-row gap-6'>
                    {/* Left Side: Title and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                        className="mb-8"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-3xl font-semibold mb-4"
                        >
                            Important Dates & Deadlines For Bachelor Degree
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-gray-800"
                        >
                            Check the important dates and deadlines for bachelor degree enrollment. You don't want to lose the opportunity. Check it out now!
                        </motion.p>
                    </motion.div>

                    {/* Right Side: Dates and Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="space-y-4"
                    >
                        {dates.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <div className="grid xl:grid-cols-12 grid-rowsitems-center gap-4 justify-center">
                                    <div className="bg-pink-100 px-4 py-2 flex flex-col items-center xl:col-span-4 col-span-12">
                                        <h3 className="text-lg font-normal mb-2">{item.title}</h3>
                                        <span className="text-pink-700 text-lg text-center rounded-md font-semibold">
                                            {item.date}
                                        </span>
                                    </div>
                                    <div className='xl:col-span-8 col-span-12'>
                                        <h1 className="text-xl font-semibold mt-2">{item.subtitle}</h1>
                                        <p className="text-gray-800">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;