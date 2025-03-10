import React from "react";
import { MdComputer, MdExplore } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png";
import image1 from "../../assets/1.png";

const researchData = [
  {
    id: 1, // Add a unique ID for each item
    title: "Advancing Computer Repair Frontiers:",
    subtitle:
      "Innovations and Challenges in Modern Technology Maintenance",
    description:
      "Exploring Innovative Diagnostic Techniques, Emerging Repair Technologies, and Advanced Troubleshooting Methods to Enhance Efficiency, Reliability, and Longevity in Modern Digital Devices.",
    image: image,
    buttons: [
      { icon: <MdComputer className="mr-2" />, text: "Computational Advancements" },
      { icon: <AiOutlineRobot className="mr-2" />, text: "AI & Systems Optimization" },
    ],
    exploreText: "Explore",
  },
];

const bottomSections = [
  {
    id: 2, // Add a unique ID for each item
    title: "Revolutionizing Digital Infrastructure Maintenance",
    description:
      "Investigating the Role of Network Diagnostics, Cloud-Based Repair Tools, and Remote Assistance in Shaping the Future of Efficient Computer Repair, Data Recovery, and System Optimization.",
    image: image1,
  },
  {
    id: 3, // Add a unique ID for each item
    title: "Exploring the Intersection of Data, Systems, and Smart Technologies",
    description:
      "Investigating the Role of Network Diagnostics, Cloud-Based Repair Tools, and Remote Assistance in Shaping the Future of Efficient Computer Repair, Data Recovery, and System Optimization.",
    image: image1,
  },
];
const buttons = [
  { icon: <MdComputer className="mr-2" />, label: "Computational Advancements" },
  { icon: <AiOutlineRobot className="mr-2" />, label: "AI & Systems Optimization" },
];

const ResearchInnovations = () => {

  const naviagte = useNavigate()

  return (
    <div className="">
      <div className="container mx-auto px-4 py-6">
        <h2 className="xl:text-3xl text-2xl font-bold mb-8">
          Research & Innovations
        </h2>

        {researchData.map((item, index) => (
          <div
            key={item.id}
            id={`research-item-${item.id}`} // Add a unique ID for each research item
            className="bg-black space-y-0 rounded-4xl w-full flex flex-col xl:flex-row justify-center items-center mx-auto overflow-hidden"
          >
            <div className="xl:h-[505px] h-full flex flex-col xl:flex-row gap-10 px-4 py-6 items-center justify-center w-full">
              <div className="xl:w-[615px] xl:h-[505px] w-full flex justify-center items-center p-2 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>

              <div className="flex justify-center items-center xl:w-[580px] w-full text-left">
                <div className="text-white mx-auto">
                  <h3 className="xl:text-2xl text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <h3 className="xl:text-2xl text-lg font-semibold mb-4">
                    {item.subtitle}
                  </h3>
                  <p className="mb-4 xl:text-lg text-[12px]">{item.description}</p>

                  <div className="flex flex-col xl:flex-row justify-start items-start gap-3">
                    {item.buttons.map((btn, btnIndex) => (
                      <button
                        key={btnIndex}
                        className="text-white xl:text-[16px] text-[12px] py-2 px-4 shadow-md rounded-4xl flex items-center bg-gray-700 hover:bg-gray-600"
                      >
                        {btn.icon}
                        {btn.text}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-start">
                    {/* Added id for "Explore" button */}
                    <button
                      id={`${item.id}`}
                      className="bg-red-900 hover:bg-red-800 xl:text-[16px] text-[12px] text-white py-2 px-6 rounded-4xl flex items-center"
                      onClick={() => {
                        naviagte(`research/${item.id}`)
                      }}
                    >
                      <MdExplore className="mr-2" />
                      {item.exploreText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {bottomSections.map((section, index) => (
            <div
              key={index}
              className="xl:h-[505px] h-full bg-white rounded-lg shadow-md overflow-hidden relative group"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex flex-col justify-center items-end py-4">
                  {buttons.map((button, index) => (
                    <button
                      key={index}
                      className="text-black xl:text-[16px] text-[12px] bg-gray-400 py-2 px-4 shadow-md rounded-4xl flex items-center mb-2"
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
                    naviagte(`research/${section.id}`)
                  }}
                   className="bg-red-900 hover:bg-red-800 xl:text-[16px] text-[12px] text-white py-2 px-6 rounded-4xl flex items-center">
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
  );
};

export default ResearchInnovations;
