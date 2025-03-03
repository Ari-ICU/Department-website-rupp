import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: 'What programming languages will I learn in this program?',
            answer: 'In this program, you\'ll learn key programming languages such as Python, Java, C/C++, and JavaScript for web development. You\'ll also gain skills in SQL for databases, Ruby for web frameworks, Swift for iOS apps, and HTML/CSS for web design. These languages will provide a comprehensive foundation for your computer science career.'
        },
        {
            question: 'What is the curriculum like for a computer science degree?',
            answer: 'The curriculum for a computer science degree typically includes courses in programming, algorithms, data structures, computer systems, software engineering, and more. It is designed to provide a strong foundation in both theoretical and practical aspects of computer science.'
        },
        {
            question: 'Are there any prerequisites for enrolling in this program?',
            answer: 'Yes, there are prerequisites for enrolling in this program. Typically, you need a strong background in mathematics and basic programming knowledge. Specific prerequisites may vary depending on the institution.'
        },
        {
            question: 'What career opportunities are available after completing this program?',
            answer: 'After completing this program, you can pursue various career opportunities such as software developer, data scientist, systems analyst, web developer, and more. The skills you gain will be applicable in a wide range of industries.'
        },
        {
            question: 'Are there internship or job placement opportunities?',
            answer: 'Yes, many programs offer internship and job placement opportunities to help students gain practical experience and transition into the workforce. These opportunities are often facilitated through partnerships with industry leaders.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 "
        >
            <div className='container mx-auto'>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className='text-start'>
               <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-800 mb-6 text-start "
                >
                    Frequently Asked <br /> Questions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-lg mb-12 text-start"
                >
                    Professor: Inspiring Minds, Nurturing Curiosity, and Shaping the Future <br /> of Knowledge and Innovation
                </motion.p>
               </div>
                <div className="">
                    {faqItems.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaChevronDown className="text-gray-600" />
                                </motion.div>
                            </div>
                            {openIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-600 mt-4"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
            </div>
        </motion.div>
    );
};

export default FAQSection;