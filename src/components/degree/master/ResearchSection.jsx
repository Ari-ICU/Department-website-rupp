import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ResearchSection = () => {
  const researchProjects = [
    {
      title: "AI-Powered Healthcare Diagnosis Systems",
      date: "12 Jun 2025",
      icon: <IoIosArrowRoundForward  size={34}/>,
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Enhancing Cybersecurity with Machine Learning",
      date: "20 Jul 2025",
      icon: <IoIosArrowRoundForward  size={34}/>,
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
    },
    {
      title: "Data-Driven Solutions for Smart Cities",
      date: "05 Aug 2025",
      icon: <IoIosArrowRoundForward  size={34}/>,
      imageUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Developing Next-Gen Robotics",
      date: "15 Sep 2025",
      icon: <IoIosArrowRoundForward  size={34}/>,
      imageUrl:
        "https://images.unsplash.com/photo-1507652313519-d4e917498951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Current & On-going Research
          </h2>
          <p className="text-gray-600">
            Explore groundbreaking research projects across AI, cybersecurity,
            data science, and more, as we push the boundaries of technology to
            address real-world challenges.
          </p>
        </div>

        {/* Research Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="border lg:w-[310px] w-full h-full lg:h-[500px] rounded-lg p-6 relative overflow-hidden"
            >
              {/* Background image with opacity */}
              <div className="absolute inset-0 w-full h-full bg-black opacity-75"></div>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Project Title */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Date and Icon at the bottom */}
                <div className="mt-auto flex justify-between items-center text-gray-300">
                  <p>{project.date}</p>
                  <div className="p-2 rounded-full border">{project.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
