import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const AcademicsSidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const location = useLocation();

  const nav = [
    {
      text: "Introduction",
      to: "/introduction",
    },
    {
      text: "Academics",
      to: "#",
      subLinks: [
        {
          text: "Bachelor Degree",
          to: "/bachelor",
        },
        {
          text: "Master Degree",
          to: "/master",
        },
        {
          text: "Doctoral Degree",
          to: "/doctoral",
        },
        {
          text: "Diploma",
          to: "/diploma",
        },
      ],
    },
    {
      text: "Admission Requirements",
      to: "/admission",
    },
    {
      text: "Career Opportunities",
      to: "/career",
    },
    {
      text: "Scholarship",
      to: "/scholarship",
    },
    {
      text: "Why Choose Our Program?",
      to: "/why-choose",
    },
  ];

  const sidebarVariants = {
    hidden: { width: "0rem" },
    visible: { width: "20rem", transition: { duration: 0.3 } },
  };

  const handleSubLinkClick = () => {
    setIsAcademicsOpen(false);
  };

  return (
    <div className="flex">
      <motion.aside
        className="bg-white shadow p-6 border-r border-gray-200"
        variants={sidebarVariants}
        animate={isSidebarOpen ? "hidden" : "visible"}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-red-900 font-semibold">Academics</h2>
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          {nav.map((link) => (
            <div key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center justify-between bg-gray-300 py-2 px-4 rounded-md 
                           ${location.pathname === link.to ? "bg-red-700 text-white" : ""}`}
                onClick={() => {
                  if (link.subLinks) {
                    setIsAcademicsOpen(!isAcademicsOpen);
                  }
                }}
                onMouseEnter={() => {
                  if (link.subLinks) {
                    setIsAcademicsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (link.subLinks) {
                    setIsAcademicsOpen(false);
                  }
                }}
              > 
                <span>{link.text}</span>
                {link.subLinks ? ( // Conditionally render icons
                  <FaChevronRight
                    className={`${isAcademicsOpen && "rotate-90"} transition-transform`}
                  />
                ) : (
                  <IoArrowRedoOutline />
                )}
              </Link>
               

              {isAcademicsOpen && link.subLinks && (
                <div className="ml-4 mt-2 space-y-1">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.to}
                      to={subLink.to}
                      className={`flex items-center justify-between pl-2 bg-gray-300 pr-2 py-1 rounded-md hover:bg-gray-100
                                 ${location.pathname === subLink.to ? "bg-red-700 text-white" : ""}`}
                      onClick={handleSubLinkClick}
                    >
                      {subLink.text}
                      <IoArrowRedoOutline className="mr-2" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </motion.aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AcademicsSidebar;