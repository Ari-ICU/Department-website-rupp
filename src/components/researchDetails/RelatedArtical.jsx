import React from 'react';
import { MdExplore } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import image1 from "../../assets/1.png";

const bottomSections = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Software engineering is one of the most sought-after careers.',
    image: image1,
  },
  {
    id: 2,
    title: 'Data Science and Analytics',
    description: 'Data Science is rapidly growing, offering promising opportunities.',
    image: image1,
  },
  {
    id: 3,
    title: 'Data Science and Analytics',
    description: 'Data Science is rapidly growing, offering promising opportunities.',
    image: image1,
  },
  {
    id: 4,
    title: 'Data Science and Analytics',
    description: 'Data Science is rapidly growing, offering promising opportunities.',
    image: image1,
  },
  {
    id: 5,
    title: 'Data Science and Analytics',
    description: 'Data Science is rapidly growing, offering promising opportunities.',
    image: image1,
  },
  // Add more sections here
];

const buttons = [
  { icon: <MdComputer className="mr-2" />, label: "Computational Advancements" },
  { icon: <AiOutlineRobot className="mr-2" />, label: "AI & Systems Optimization" },
  // Add more buttons here if necessary
];

const RelatedArtical = () => {
  const navigate = useNavigate();

  return (
    <div className="my-16">
      <div className='container mx-auto px-4'>

        <div className='flex justify-between'>
          <h2 className='text-4xl mb-6 font-semibold'>Students Projects </h2>
          <div className="flex justify-between gap-10 items-center">
            <button className="p-2 bg-pink-100  text-red-900 rounded-full hover:bg-gray-300">
              <FaChevronLeft />
            </button>
            <button className="p-2 bg-pink-100  text-red-900  rounded-full hover:bg-gray-300">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto mt-12 scrollbar-hide ">
          <div className="flex space-x-8">
            {bottomSections.map((section) => (
              <div
                key={section.id}
                className=" bg-white rounded-lg shadow-md overflow-hidden relative group flex-shrink-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex flex-col justify-center items-end py-4">
                    {buttons.map((button, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        className="text-black xl:text-[12px] text-[10px] bg-gray-300 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"
                      >
                        {button.icon}
                        {button.label}
                      </button>
                    ))}
                  </div>
                  <div>
                    <h3 className="xl:text-xl text-lg font-semibold mb-2">
                      {section.title}
                    </h3>
                    <p className="mb-4 xl:text-[16px] text-[12px]">
                      {section.description}
                    </p>
                    <button
                      onClick={() => {
                        navigate(`/research/${section.id}`);
                      }}
                      className="bg-red-900 hover:bg-red-800 xl:text-[14px] text-[12px] text-white py-2 px-6 rounded-4xl flex items-center"
                    >
                      <MdExplore className="mr-2" />
                      Explore
                    </button>
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

export default RelatedArtical;
