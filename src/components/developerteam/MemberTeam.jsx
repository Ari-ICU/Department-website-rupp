import React, { useState, useRef, useEffect } from 'react';
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
  const modalRef = useRef(null); // Ref for modal

  const deputyData = [
    { name: "Mr. Leang Vakhim", image: a1, position: "Backend Lead/Frontend Lead", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.", facebook: "https://facebook.com/example", telegram: "https://t.me/example" },
    { name: "Mr. Thoeurn Ratha", image: p4, position: "Frontend Dev", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.", facebook: "https://facebook.com/example", telegram: "https://t.me/example" },
    { name: "Ms. Meas Liza", image: p2, position: "Frontend Dev", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.", facebook: "https://facebook.com/example", telegram: "https://t.me/example" },
    { name: "Ms. Pheng Sokunnidsa", image: p3, position: "Backend Dev", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.", facebook: "https://facebook.com/example", telegram: "https://t.me/example" },
    { name: "Ms. Tang Kanha", image: p5, position: "UX/UI", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.", facebook: "https://facebook.com/example", telegram: "https://t.me/example" },
    { name: "Ms. Nop Maryna", image: p6, position: "UX/UI", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.", facebook: "https://facebook.com/example", telegram: "https://t.me/example" },
  ];

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <div className="space-y-10">
          <h1 className="text-3xl font-semibold">Project Teams</h1>

          <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center">
            {deputyData.map((deputy, index) => (
              <div
                key={index}
                className="shadow-lg rounded-2xl p-4 xl:w-[calc(50%-1rem)]"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  <div className="relative w-full mx-auto h-96 mb-4 group">
                    <img
                      src={deputy.image}
                      alt={deputy.name}
                      className="w-full h-full rounded-2xl object-cover transition-all duration-300 group-hover:brightness-90"
                    />
                  </div>

                  <div className="space-y-6 max-w-md">
                    <div className='space-y-2'>
                      <div className="flex justify-between items-center">
                        <h1 className="text-2xl text-left font-semibold">{deputy.name}</h1>
                        <RiDoubleQuotesR className="text-7xl text-red-900" />
                      </div>
                      <p>{deputy.position}</p>
                    </div>

                    <p className="text-left">{deputy.bio}</p>
                    <button
                      onClick={() => { setIsOpen(true); setSelectedDeputy(deputy); }}
                      className="bg-red-900 px-6 py-2 text-gray-50 rounded-2xl"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && selectedDeputy && (
        <div className="modal-overlay fixed inset-0 bg-gray-900/75 flex justify-center items-start z-50 overflow-y-auto">
          <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
            <div
              ref={modalRef} // Attach ref to modal
              className="bg-white w-full mx-auto max-w-lg sm:container flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl shadow-lg "
            >
              <div className="w-full sm:w-80 flex justify-center">
                <img
                  src={selectedDeputy.image}
                  alt={selectedDeputy.name}
                  className="w-full h-52 sm:w-96 sm:h-96 rounded-2xl object-contain"
                />
              </div>

              <div className="w-full sm:w-1/3">
                <h2 className="text-2xl font-semibold mb-2">{selectedDeputy.name}</h2>
                <p className="mb-4">{selectedDeputy.bio}</p>
                <div className="text-start">
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
