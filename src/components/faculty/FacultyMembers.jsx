import React from 'react';
import { motion } from 'framer-motion';
import { SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
import p2 from '../../assets/img/dr-heng-sovanrith.png';
import p4 from '../../assets/img/professor/thap-boung.jpg';
import p5 from '../../assets/img/professor/ly-sokun.jpg';
import p6 from '../../assets/img/professor/ouk-polyvann.jpg';
import p7 from '../../assets/img/professor/ung-rithy.jpg';
import p8 from '../../assets/img/professor/Ass-Prof-Dr-Ouk-Khean.png';

import { useTranslation } from 'react-i18next';




const FacultyMembers = () => {
     const { t, i18n } = useTranslation();
      const currentLanguage = i18n.language;
 
      
    const deputyData = [

        {
            id: 1, // Added ID for detail page link
            name: "Dr. Heng Sovannrith",
            image: p2,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 2, // Added ID for detail page link
            name: "Ass. Prof. Dr. Ouk Khean",
            image: p8,
            position: "Associate Professor",
            details: "Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 3, 
            name: "Mr. Ly Sokun",
            image: p5,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Ly Sokun (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 4, // Added ID for detail page link
            name: "Mr. Thap Boung",
            image: p4,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Thap Boung (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 5, // Added ID for detail page link
            name: "Mr. Ouk Polyvann",
            image: p6,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Ouk Polyvann (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 6,
            name: "Mr. Ung Rithy",
            image: p7,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr.  Ung Rithy (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
    ];

    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <div className='space-y-10'>
                    <h1  className={`text-2xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : ""}`}
                            lang={currentLanguage}>Faculty Members</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {deputyData.map((deputy) => (
                            <div key={deputy.id} className='shadow-lg rounded-2xl p-4'>
                                <div className='gap-6 items-center'>
                                    {/* Image Container */}
                                    <div className="relative w-full h-96 mb-4 group">
                                        <img
                                            src={deputy.image}
                                            alt={deputy.name}
                                            className="w-full h-full rounded-2xl object-cover group-hover:brightness-90 transition-all duration-300"
                                        />

                                          {/* Social Media Overlay */}
                                          <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center"
                                        >
                                            {/* Social Icons Container */}
                                            <div className="absolute top-4 right-4 group-hover:bg-black/10 p-2 transition-all duration-300 rounded-2xl">
                                                <motion.div
                                                    initial={{ y: 20 }}
                                                    animate={{ y: 0 }}
                                                    className=" space-y-2"
                                                >
                                                    {/* Facebook Link */}
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="bg-white p-3 rounded-full shadow-lg"
                                                    >
                                                        <Link to="#" className="text-gray-700 hover:text-red-600">
                                                            <SlSocialFacebook className="text-xl" />
                                                        </Link>
                                                    </motion.div>

                                                    {/* Telegram Link */}
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="bg-white p-3 rounded-full shadow-lg"
                                                    >
                                                        <Link to="#" className="text-gray-700 hover:text-red-400">
                                                            <PiTelegramLogoDuotone className="text-xl" />
                                                        </Link>
                                                    </motion.div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className='space-y-6 max-w-md relative text-center'>
                                        <div className='space-y-2'>
                                            <h1 className='text-2xl font-semibold '>{deputy.name}</h1>
                                            <p className=''>{deputy.position}</p>
                                        </div>
                                        <Link to={`/faculty/${deputy.id}`} className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'>
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyMembers;
