import React from 'react'

const ProgramObjective = () => {
    return (
        <div>
            <div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="xl:text-3xl text-xl font-extrabold text-gray-900"
                >
                    Program Objectives
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[12px] xl:text-[16px] text-gray-500">
                    The <strong>Bachelor’s Degree </strong>
                    in Computer Science aims to:
                </motion.p>
                <ul className="list-none space-y-4 mt-4 ">
                    {[
                        'Programming (Desktop, Mobile, and Web Application)',
                        'System Analysis & Design and Development',
                        'Software Engineering and IT Project Management',
                        'Database Management',
                        'Computer Networks, Cloud Computing & Cybersecurity',
                        'Artificial Intelligence',
                        'Computer Architecture and Embedded Systems',
                    ].map((item, index) => (
                        <motion.li
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            key={index} className="flex items-center text-[12px] xl:text-[16px]">
                            <div className="border border-red-800 p-2 rounded-4xl mr-2">
                                <FaCheck className="text-red-800" />
                            </div>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProgramObjective