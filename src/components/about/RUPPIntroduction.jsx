import React from 'react';
import { motion } from 'framer-motion';
import rupp from "../../assets/img/rupp1.png";
import { useTranslation } from "react-i18next";


const RUPPIntroduction = () => {
      const { t,i18n } = useTranslation();
                     const currentLanguage = i18n.language; 
    return (
      <div className='my-16'>
          <div className="container mx-auto px-4">
            <div className='flex flex-col xl:flex-row justify-center items-center gap-10'>
                {/* Image Section with Fixed Text Box */}
                <motion.div
                    className="relative w-full h-full max-w-[600px] mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
                >
                    <img
                        src={rupp}
                        alt="rupp"
                        className="w-full h-full mx-auto object-cover rounded-3xl"
                    />

                    {/* Fixed Text Box */}
                    <motion.div
                        className="absolute w-[90%] sm:w-[300px] bg-white shadow-md bottom-6 sm:bottom-10 right-4 sm:right-[-50px] 
                                   border-t-4 sm:border-t-8 border-t-red-700 p-4 flex flex-col justify-end"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-[14px] sm:text-[18px] mb-4 xl:text-[18px] text-black">
                            Established on January 13, 1960
                        </h1>
                        <p className="text-[12px] sm:text-[14px] xl:text-[12px] text-black">
                            The country's largest university, hosting around 30,000 students in undergraduate and postgraduate programmes.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Text Section with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="bg-white shadow-md rounded-lg px-2 xl:max-w-[700px] w-auto mx-auto h-auto "
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className={`text-2xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                        lang={currentLanguage}
                    >
                        Introduction
                    </motion.h1>
                    <div className='space-y-4 text-[12px] xl:text-[14px] font-normal'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-gray-700"
                        >
                            The Royal University of Phnom Penh (RUPP), founded in 1960, has undergone a series of transformations to become the leading national university in Cambodia. Other transformations are still happening. In the last five years, for example, Rupp has made considerable progresses in many areas including organizational structure, institutional governance, capacity building, infrastructure development, research, teaching and learning, curriculum development, and quality assurance. These achievements have encouraged RUPP management and faculty to strive harder to implement the institutional reform and achieve development goals.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-gray-700"
                        >
                            Looking towards the future, Rupp will grasp opportunities and assume a key role in driving Cambodia’s socio-economic development through the creation of human capital and the provision of quality research, training and community service. Rupp aspires to contribute to the achievement of the 2030 and 2050 national development goals of the Royal Government of Cambodia as well as the higher education vision of the Ministry of Education, Youth, and Sport.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-gray-700"
                        >
                            Against this backdrop, this Strategic Plan 2019-2023 has been developed to guide Rupp in realizing its development vision and goals for the next five years. It will serve as a roadmap for the university to orient its focus and for its sub-units to devise their own action plans accordingly. The strategic plan will move Rupp closer to assuming its place among other national universities in the ASEAN region as a center for intellectual and cultural development.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    );
};

export default RUPPIntroduction;