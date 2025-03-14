import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/img/rupp.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(null);
  const navRef = useRef();
  const location = useLocation();

  // Refs for desktop dropdowns
  const aboutDropdownRef = useRef(null);
  const programDropdownRef = useRef(null);
  const campusLifeDropdownRef = useRef(null);
  const academicsResearchDropdownRef = useRef(null);
  
  // Refs for mobile dropdowns
  const academicsMobileRef = useRef(null);
  const peopleMobileRef = useRef(null);

  useEffect(() => {
    setDropdown(null);
  }, [location]);

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = [
        aboutDropdownRef,
        programDropdownRef,
        campusLifeDropdownRef,
        academicsResearchDropdownRef,
        academicsMobileRef,
        peopleMobileRef
      ];

      const isOutside = dropdowns.every(ref => 
        !ref.current?.contains(event.target)
      );

      if (isOutside) setDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => 
    setDropdown(dropdown === menu ? null : menu);

  const desktopDropdown = (menu, ref, items) => (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setDropdown(menu)}
      onMouseLeave={() => setDropdown(null)}
    >
      <button className="flex items-center uppercase">
        {menu} <FiChevronDown className="ml-1" />
      </button>
      
      {dropdown === menu && (
        <motion.div
          className="absolute left-0 mt-0 bg-white shadow-md rounded-md py-2 w-52 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {items.map(([path, text]) => (
            <Link
              key={path}
              to={path}
              className={`block px-4 py-2 hover:text-red-900 ${
                location.pathname === path ? "text-red-900 font-bold" : ""
              }`}
              onClick={() => setDropdown(null)}
            >
              {text}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );

  const mobileDropdown = (menu, ref, items) => (
    <div ref={ref} className="relative">
      <button
        onClick={() => toggleDropdown(menu)}
        className="flex justify-between items-center w-full px-4 py-2"
      >
        {menu}
        <FiChevronDown className={`transition-transform ${
          dropdown === menu ? "rotate-180" : ""
        }`}/>
      </button>
      
      {dropdown === menu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pl-4"
        >
          {items.map(([path, text]) => (
            <Link
              key={path}
              to={path}
              className="block px-4 py-2 hover:text-red-900"
              onClick={() => {
                setDropdown(null);
                setIsOpen(false);
              }}
            >
              {text}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <nav ref={navRef} className="container mx-auto relative xl:flex xl:space-x-6 text-sm 2xl:text-base">
      {/* Desktop Menu */}
      <div className="hidden xl:flex space-x-6 uppercase">
        <Link to="/" className={`hover:text-red-900 ${location.pathname === "/" ? "text-red-900 font-bold" : ""}`}>
          Home
        </Link>

        {desktopDropdown("About", aboutDropdownRef, [
          ["/about", "About Website"],
          ["/developer", "Developer Team"]
        ])}

        <Link to="/contact" className={`hover:text-red-900 ${location.pathname === "/contact" ? "text-red-900 font-bold" : ""}`}>
          Contact
        </Link>

        {desktopDropdown("Programs", programDropdownRef, [
          ["/programs/bachelor", "Bachelor"],
          ["/programs/master", "Master"],
          ["/programs/doctoral", "Doctoral"],
          ["/programs/diploma", "Diploma"]
        ])}

        <Link to="/admissions" className={`hover:text-red-900 ${location.pathname === "/admission" ? "text-red-900 font-bold" : ""}`}>
          Admission
        </Link>

        <Link to="/news&events" className={`hover:text-red-900 ${location.pathname === "/news&events" ? "text-red-900 font-bold" : ""}`}>
          News & Events
        </Link>

        {desktopDropdown("Campus Life", campusLifeDropdownRef, [
          ["/facilities", "Facilities"],
          ["/scholars", "Scholarships & Financial Aid"]
        ])}

        {desktopDropdown("Academics", academicsResearchDropdownRef, [
          ["/faculty", "Faculty Members"],
          ["/research", "Research Projects"]
        ])}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="flex items-center space-x-3">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <div className="text-gray-800">
                  <div className="font-semibold">Faculty of Science</div>
                  <div className="text-sm">Department of Computer Science</div>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <FiX size={28} />
              </button>
            </div>

            <nav className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 hover:text-red-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {mobileDropdown("About", aboutDropdownRef, [
                ["/about", "About Website"],
                ["/developer", "Developer Team"]
              ])}

              <Link
                to="/contact"
                className="block px-4 py-2 hover:text-red-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {mobileDropdown("Programs", programDropdownRef, [
                ["/programs/bachelor", "Bachelor"],
                ["/programs/master", "Master"],
                ["/programs/doctoral", "Doctoral"],
                ["/programs/diploma", "Diploma"]
              ])}

              <Link
                to="/admissions"
                className="block px-4 py-2 hover:text-red-900"
                onClick={() => setIsOpen(false)}
              >
                Admission
              </Link>

              <Link
                to="/news&events"
                className="block px-4 py-2 hover:text-red-900"
                onClick={() => setIsOpen(false)}
              >
                News & Events
              </Link>

              {mobileDropdown("Campus Life", campusLifeDropdownRef, [
                ["/facilities", "Facilities"],
                ["/scholars", "Scholarships & Financial Aid"]
              ])}

              {mobileDropdown("Academics", academicsResearchDropdownRef, [
                ["/faculty", "Faculty Members"],
                ["/research", "Research Projects"]
              ])}
            </nav>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;