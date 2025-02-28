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
  const dropdownRef = useRef(null);
  const location = useLocation();


  useEffect(() => { 
    setDropdown(null);
    }, [location]);


  return (
    <nav ref={navRef} className="relative xl:flex xl:space-x-6">
      {/* Desktop Menu */}
      <div className="hidden xl:flex space-x-6">
        <Link to="/" className="hover:text-red-900">Home</Link>

        {/* Dropdown: Academics */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdown(dropdown === "academics" ? null : "academics")}
            className="flex items-center "
          >
            Academics <FiChevronDown className="ml-1" />
          </button>
          {dropdown === "academics" && (
            <motion.div 
              className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/undergraduate" className="block px-4 py-2 hover:text-red-900" onClick={() => setIsOpen(false)}>Undergraduate</Link>
              <Link to="/graduate" className="block px-4 py-2 hover:text-red-900" onClick={() => setIsOpen(false)}>Graduate</Link>
            </motion.div>
          )}
        </div>

        {/* Dropdown: People */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdown(dropdown === "people" ? null : "people")}
            className="flex items-center "
          >
            People <FiChevronDown className="ml-1" />
          </button>
          {dropdown === "people" && (
            <motion.div 
              className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/faculty" className="block px-4 py-2 hover:text-red-900" onClick={() => setIsOpen(false)}>Faculty</Link>
              <Link to="/staff" className="block px-4 py-2 hover:text-red-900" onClick={() => setIsOpen(false)}>Staff</Link>
            </motion.div>
          )}
        </div>

        <Link to="/research" className="hover:text-red-900" onClick={() => setIsOpen(false)}>Research</Link>
        <Link to="/facilities" className="hover:text-red-900" onClick={() => setIsOpen(false)}>Facilities</Link>
        <Link to="/news" className="hover:text-red-900" onClick={() => setIsOpen(false)}>News</Link>
        <Link to="/about" className="hover:text-red-900" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" className="hover:text-red-900" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          ref={mobileMenuRef}
          className="xl:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg border-t z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 space-y-2">
            {/* Logo */}
            <div className="flex justify-between items-center">
              <div className="not-italic font-medium text-gray-800 cursor-pointer">
                <span className="sr-only">logo</span>
                <Link to="/" className="flex items-center space-x-2">
                  <img src={logo} alt="logo" className="w-14 h-14" />
                  <span className="hidden min-sm:block">Faculty of Science <br /> Department of Computer Science</span>
                </Link>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-6 p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close mobile menu"
              >
                <FiX size={30} />
              </button>
            </div>

            <div className="shadow-md px-2 py-4">
              <Link to="/" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Home</Link>

              {/* Mobile Dropdown: Academics */}
              <button
                className="flex justify-between w-full px-4 py-2 text-left"
                onClick={() => setDropdown(dropdown === "academics" ? null : "academics")}
              >
                Academics <FiChevronDown />
              </button>
              {dropdown === "academics" && (
                <motion.div 
                  className="pl-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/undergraduate" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Undergraduate</Link>
                  <Link to="/graduate" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Graduate</Link>
                </motion.div>
              )}

              {/* Mobile Dropdown: People */}
              <button
                className="flex justify-between w-full px-4 py-2 text-left"
                onClick={() => setDropdown(dropdown === "people" ? null : "people")}
              >
                People <FiChevronDown />
              </button>
              {dropdown === "people" && (
                <motion.div 
                  className="pl-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/faculty" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Faculty</Link>
                  <Link to="/staff" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Staff</Link>
                </motion.div>
              )}

              <Link to="/research" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Research</Link>
              <Link to="/facilities" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Facilities</Link>
              <Link to="/news" className="block px-4 py-2" onClick={() => setIsOpen(false)}>News</Link>
              <Link to="/about" className="block px-4 py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
