import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import a1 from '../../assets/developer/vakhim.jpg';
import p3 from '../../assets/developer/nidsa.jpg';
import p2 from '../../assets/developer/lisa.jpg';
import p5 from '../../assets/developer/kanha.jpg';
import p4 from '../../assets/developer/me.jpg';
import p6 from '../../assets/developer/ryna.png';
import SocialIcon from '../social/SocialIcon';






const MemberTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeputy, setSelectedDeputy] = useState(null);

  const deputyData = [
    {
      name: "Mr. Leang Vakhim",
      image: a1,
      position: "Backend Lead/Frontend Lead",
      bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ",
      facebook: "https://facebook.com/example",
      telegram: "https://t.me/example",
    },
    {
      name: "Mr. Thoeurn Ratha",
      image: p4,
      position: "Frontend Dev",
      bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ",
      facebook: "https://facebook.com/example",
      telegram: "https://t.me/example",
    },
    {
      name: "Ms. Meas Liza",
      image: p2,
      position: "Frontend Dev",
      bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ",
      facebook: "https://facebook.com/example",
      telegram: "https://t.me/example",
    },
    {
      name: "Ms. Pheng Sokunnidsa",
      image: p3,
      position: "Backend Dev",
      bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ",
      facebook: "https://facebook.com/example",
      telegram: "https://t.me/example",
    },
    {
      name: "Ms. Tang Kanha",
      image: p5,
      position: "UX/UI",
      bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ",
      facebook: "https://facebook.com/example",
      telegram: "https://t.me/example",
    },
    {
      name: "Ms. Nop Maryna",
      image: p6,
      position: "UX/UI",
      bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ",
      facebook: "https://facebook.com/example",
      telegram: "https://t.me/example",
    },
  ];

  // Function to close the modal when clicking outside
  const closeModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsOpen(false);
    }
  };

  return (
    <div className='my-16'>
      <div className='container mx-auto px-4'>
        <div className='space-y-10'>
          <div>
            <h1 className='text-3xl font-semibold '> Project teams</h1>
          </div>
          <div className='flex flex-col xl:flex-row xl:flex-wrap gap-8 justify-center'>
            {deputyData.map((deputy, index) => (
              <div
                key={index}
                className={`
        shadow-lg rounded-2xl p-4 
        xl:w-[calc(50%-1rem)]  // Subtract half of gap (8px = 0.5rem)
        ${index === deputyData.length - 1 && deputyData.length % 2 !== 0 ?
                    'xl:mx-auto' : ''}
      `}
              >
                {/* Rest of your card content remains the same */}
                <div className="flex flex-col lg:flex-row gap-6 items-center">
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
                              <FaFacebookF className="text-xl" />
                            </Link>
                          </motion.div>

                          {/* Telegram Link */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="bg-white p-3 rounded-full shadow-lg"
                          >
                            <Link to="#" className="text-gray-700 hover:text-red-400">
                              <FaTelegramPlane className="text-xl" />
                            </Link>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <div className='space-y-6 max-w-md relative'>
                    <div className='absolute right-0 -top-6 flex justify-end text-right'>
                      <RiDoubleQuotesR className='text-7xl text-red-900' />
                    </div>
                    <h1 className='text-2xl font-semibold '>{deputy.name}</h1>
                    <p>{deputy.position}</p>
                    <p className='text-left'>{deputy.bio}</p>
                    <button
                      onClick={() => { setIsOpen(true); setSelectedDeputy(deputy); }}
                      className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'
                    >View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && selectedDeputy && (
          <div
          className="modal-overlay fixed inset-0 bg-gray-900/75 flex justify-center items-center z-50"
          onClick={closeModal}
      >
          <div className=' container mx-auto'>
            <div className="bg-white flex items-center gap-10 p-6 rounded-2xl shadow-lg" onClick={(e) => e.stopPropagation()}>
              <div className="  max-w-md mx-auto  group">
                <img
                  src={selectedDeputy.image}
                  alt={name}
                  className="w-full h-full rounded-2xl object-contain"
                />
              </div>
              <div className='w-full'>
                <h2 className="text-2xl font-semibold mb-4">{selectedDeputy.name}</h2>
                <p className="mb-4">{selectedDeputy.bio}</p>
                <div className='text-start'>
                  <SocialIcon />

                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberTeam;
