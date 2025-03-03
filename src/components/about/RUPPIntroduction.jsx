import React from 'react';
import { motion } from 'framer-motion';
import rupp from "../../assets/img/rupp1.png";

const RUPPIntroduction = () => {
    return (
        <div className="container mx-auto ">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Image Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img 
                        src={rupp} 
                        alt="rupp" 
                        className='w-full h-full object-cover rounded-3xl' 
                    />
                </motion.div>

                {/* Text Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-md rounded-lg p-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-4"
                    >
                        Introduction
                    </motion.h1>
                    <div className='*:mt-2 text-sm font-normal'>
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