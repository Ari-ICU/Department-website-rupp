import React from 'react';
import { motion } from 'framer-motion';
import { SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import p1 from '../../assets/img/professor/pok-leakmony.jpg';
import p2 from '../../assets/img/professor/Asst-Prof-Dr-Chor-Chandara.png';
import { useTranslation } from 'react-i18next';


const DeputyHeadofDepartment = () => {

    const deputyData = [
        {
            id: 1, // Added unique ID for each deputy
            name: "Mr. Pok LeakMony",
            image: p1,
            bio: "Mr. Pok LeakMony (1988): B.Sc. (Mathematics), RUPP, 1988; M.Sc. (Computer Science), Vietnam National University, Hanoi (Vietnam), 2002.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 2, // Added unique ID for each deputy
            name: "Dr. Chor Chandara",
            image: p2,
            bio: "Dr. Chor Chandara (1999): B.Sc. (Mathematics), RUPP, 1998; M.Sc. (Information Technology), Build Bright University (Cambodia), 2005.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
    ];

    const { t, i18n } = useTranslation();
            const currentLanguage = i18n.language;

    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <div className='space-y-10'>
                    <div>
                        <h1 className={`text-2xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                            lang={currentLanguage}>Deputy Head of Department:</h1>
                    </div>
                    <div className='flex flex-col xl:flex-row xl:flex-wrap gap-8 justify-center'>
                        {deputyData.map((deputy, index) => (
                            <div
                                key={deputy.id} // Use unique id for the key
                                className={`
        shadow-lg rounded-2xl p-4 
        xl:w-[calc(50%-1rem)]  // Subtract half of gap (8px = 0.5rem)
        ${index === deputyData.length - 1 && deputyData.length % 2 !== 0 ?
                                        'xl:mx-auto' : ''}
      `}
                            >
                                <div className="flex flex-col lg:flex-row gap-4 items-center">
                                    {/* Image Container */}
                                    <div className="relative w-full h-72 mb-4 group">
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
                                    <div className='space-y-6 max-w-md relative'>
                                        <div className='flex justify-between items-center' >
                                            <h1 className='text-2xl font-semibold '>{deputy.name}</h1>
                                            <div className=' text-right'>
                                                <RiDoubleQuotesR className='text-7xl text-red-900' />
                                            </div>
                                        </div>

                                        <p className='text-left'>{deputy.bio}</p>
                                        <Link
                                            to={`/deputy/${deputy.id}`} // Use dynamic route to navigate to the detail page
                                        >
                                            <button className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'>
                                                View
                                            </button>
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

export default DeputyHeadofDepartment;
