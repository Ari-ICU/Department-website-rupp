import React from 'react';
import { motion } from 'framer-motion';
import rupp from "../../assets/img/rupp1.png";

const RUPPIntroduction = () => {
    return (
        <div className="container mx-auto px-4"> {/* Added container for better responsiveness */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Image Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className=' relative w-[600px] mx-auto h-[510px]' // Adjusted image container for responsiveness
                >
                    <img
                        src={rupp}
                        alt="rupp"
                        className='w-full h-full object-cover rounded-3xl '
                    />
                    <div className=" absolute bottom-8 right-[-50px]">
                        <div className='w-[270px] bg-amber-50 p-4 border-t-5 border-red-900'>
                            <h1 className='text-[18px]'>Established in January 13, 1960</h1>
                            <p>The country's largest university. It hosts around 30,000 students in undergraduate and postgraduate programmes.</p>
                        </div>
                    </div>
                </motion.div>



                {/* Text Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-md rounded-lg p-6 max-w-[635px] h-[520px]" // Adjusted text container for responsiveness
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-4" // Added mb-4 for spacing
                    >
                        Introduction
                    </motion.h1>
                    <div className='space-y-4 text-sm font-normal'> {/* Used space-y-4 for consistent spacing */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-gray-700"
                        >
                            The Royal University of Phnom Penh (RUPP), founded in 1960, has undergone a series of transformations to become the leading national university in Cambodia. Other transformations are still happening. In the last five years, for example, Rupp has made considerable progresses in many areas including organizational structure, institutional governance, capacity building, infrastructure development, research, teaching and learning, curriculum development, and quality assurance. These achievements have encouraged RUPP management and faculty to strive harder to implement the institutional reform and achieve development goals.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            viewport={{ once: true }}
                            className="text-gray-700"
                        >
                            Looking towards the future, Rupp will grasp opportunities and assume a key role in driving Cambodia’s socio-economic development through the creation of human capital and the provision of quality research, training and community service. Rupp aspires to contribute to the achievement of the 2030 and 2050 national development goals of the Royal Government of Cambodia as well as the higher education vision of the Ministry of Education, Youth, and Sport.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            viewport={{ once: true }}
                            className="text-gray-700"
                        >
                            Against this backdrop, this Strategic Plan 2019-2023 has been developed to guide Rupp in realizing its development vision and goals for the next five years. It will serve as a roadmap for the university to orient its focus and for its sub-units to devise their own action plans accordingly. The strategic plan will move Rupp closer to assuming its place among other national universities in the ASEAN region as a center for intellectual and cultural development.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RUPPIntroduction;