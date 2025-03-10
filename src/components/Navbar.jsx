import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

// Logo import
import logo from "../assets/img/rupp.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(null);
  const navRef = useRef();
  const mobileMenuRef = useRef();
  const academicsDropdownRef = useRef(null); // Separate ref for Academics dropdown
  const peopleDropdownRef = useRef(null); // Separate ref for People dropdown
  const location = useLocation();

  // Close dropdown when location changes
  useEffect(() => {
    setDropdown(null);
  }, [location]);

  // Handle hover for desktop dropdowns
  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = (event) => {
    // Check if the mouse is leaving the dropdown area
    if (
      (dropdown === "academics" && !academicsDropdownRef.current?.contains(event.relatedTarget)) ||
      (dropdown === "people" && !peopleDropdownRef.current?.contains(event.relatedTarget))
    ) {
      setDropdown(null);
    }
  };

  // Handle click for dropdown items
  const handleDropdownItemClick = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (academicsDropdownRef.current && !academicsDropdownRef.current.contains(event.target)) &&
        (peopleDropdownRef.current && !peopleDropdownRef.current.contains(event.target))
      ) {
        setDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <nav ref={navRef} className="container mx-auto relative xl:flex xl:space-x-6 text-[12px] md:text-[14px] 2xl:text-[18px]">
      {/* Desktop Menu */}
      <div className="hidden xl:flex space-x-6 uppercase">
        <Link to="/" className={`hover:text-red-900 ${location.pathname === "/" ? "text-red-900 font-bold" : ""}`}>
          Home
        </Link>

        {/* Dropdown: Academics */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("academics")}
          onMouseLeave={handleMouseLeave}
          ref={academicsDropdownRef}
        >
          <button className="flex items-center space-y-3  uppercase">
            Academics <FiChevronDown className="ml-1" />
          </button>
          {dropdown === "academics" && (
            <motion.div
              className="absolute left-0 mt-0 bg-white shadow-md rounded-md py-2 xl:w-52 w-full z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => handleMouseEnter("academics")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/undergraduate"
                className={`hover:text-red-900 block text-start px-4 py-2 ${location.pathname === '/undergraduate' ? 'text-red-900 font-bold' : ""} `}
                onClick={handleDropdownItemClick}
              >
                Undergraduate
              </Link>
              <Link
                to="/graduate"
                className={`hover:text-red-900 block text-start px-4 py-2 ${location.pathname === '/graduate' ? 'text-red-900 font-bold' : ""} `}
                onClick={handleDropdownItemClick}
              >
                Graduate
              </Link>
            </motion.div>
          )}
        </div>

        {/* Dropdown: People */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("people")}
          onMouseLeave={handleMouseLeave}
          ref={peopleDropdownRef}
        >
          <button className="flex  uppercase items-center">
            People <FiChevronDown className="ml-1" />
          </button>
          {dropdown === "people" && (
            <motion.div
              className="absolute left-0 mt-0 bg-white shadow-md rounded-md py-2 w-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => handleMouseEnter("people")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/faculty"
                className={`hover:text-red-900 block text-start px-4 py-2 ${location.pathname === '/faculty' ? 'text-red-900 font-bold' : ""} `}
                onClick={handleDropdownItemClick}
              >
                Faculty
              </Link>
              <Link
                to="/staff"
                className={`hover:text-red-900 block text-start px-4 py-2 ${location.pathname === '/staff' ? 'text-red-900 font-bold' : ""} `}
                onClick={handleDropdownItemClick}
              >
                Staff
              </Link>
            </motion.div>
          )}
        </div>

        <Link to="/research" className={`hover:text-red-900 ${location.pathname === "/research" ? "text-red-900 font-bold" : ""}`}>
          Research
        </Link>
        <Link to="/facilities" className={`hover:text-red-900 ${location.pathname === "/facilities" ? "text-red-900 font-bold" : ""}`}>
          Facilities
        </Link>
        <Link to="/events&news" className={`hover:text-red-900 ${location.pathname === "/news" ? "text-red-900 font-bold" : ""}`}>
          News
        </Link>
        <Link to="/about" className={`hover:text-red-900 ${location.pathname === "/about" ? "text-red-900 font-bold" : ""}`}>
          About
        </Link>
        <Link to="/contact" className={`hover:text-red-900 ${location.pathname === "/contact" ? "text-red-900 font-bold" : ""}`}>
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          ref={mobileMenuRef}
          className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg border-t z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6"> {/* Increased padding for better spacing */}
            {/* Logo and Close Button */}
            <div className="flex justify-between items-center mb-6"> {/* Added margin bottom */}
              <Link to="/" className="flex items-center space-x-3">
                <img src={logo} alt="logo" className="w-12 h-12" /> {/* Adjusted logo size */}
                <div className="text-lg font-semibold text-gray-800">
                  <span className="block">Faculty of Science</span>
                  <span className="block text-sm text-gray-600">Department of Computer Science</span>
                </div>
              </Link>
              <button
                className="p-2 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen(false)}
                aria-label="Close mobile menu"
              >
                <FiX size={28} /> {/* Adjusted close icon size */}
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-3"> {/* Increased space between items */}
              <Link
                to="/"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Academics Dropdown */}
              <div className="relative"
                onMouseEnter={() => handleMouseEnter("academics")}
                onMouseLeave={handleMouseLeave}
                ref={academicsDropdownRef}>
                <button
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"

                >
                  Academics <FiChevronDown className={`ml-2 transition-transform ${dropdown === "academics" ? "transform rotate-180" : ""}`} />
                </button>
                {dropdown === "academics" && (
                  <motion.div
                    className="mt-2 bg-white shadow-md rounded-md overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/undergraduate"
                      className="block py-2 px-6 hover:bg-gray-100  hover:text-red-900 transition-colors"
                      onClick={handleDropdownItemClick}
                    >
                      Undergraduate
                    </Link>
                    <Link
                      to="/graduate"
                      className="block py-2 px-6 hover:bg-gray-100 hover:text-red-900 transition-colors"
                      onClick={handleDropdownItemClick}
                    >
                      Graduate
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* People Dropdown */}
              <div
                onMouseEnter={() => handleMouseEnter("people")}
                onMouseLeave={handleMouseLeave}
                ref={peopleDropdownRef}
                className="relative">
                <button
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md  hover:bg-gray-100 transition-colors"

                >
                  People <FiChevronDown className={`ml-2 transition-transform ${dropdown === "people" ? "transform rotate-180" : ""}`} />
                </button>
                {dropdown === "people" && (
                  <motion.div
                    className="mt-2 bg-white  shadow-md rounded-md overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/faculty"
                      className="block py-2 px-6 hover:bg-gray-100 hover:text-red-900 transition-colors"
                      onClick={handleDropdownItemClick}
                    >
                      Faculty
                    </Link>
                    <Link
                      to="/staff"
                      className="block py-2 px-6 hover:bg-gray-100 hover:text-red-900 transition-colors"
                      onClick={handleDropdownItemClick}
                    >
                      Staff
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link
                to="/research"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Research
              </Link>
              <Link
                to="/facilities"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Facilities
              </Link>
              <Link
                to="/news"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <Link
                to="/about"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;