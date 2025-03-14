import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion"; 
import SearchButton from "./SearchBtn";
import LanguageSwitcherButton from "./home/LanguageSwitcherButton";
import Navbar from "./Navbar";
import logo from "../assets/img/rupp.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search bar state

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu visibility
  };

  return (
    <div className="relative bg-white shadow-md">
      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          className="absolute top-0 left-0 right-0 bg-white shadow-md z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-8xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="flex-1 px-4 py-2 mr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
              <FiX
                className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-800"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Header Content */}
      <div className={`p-4 ${isSearchOpen ? 'pt-20' : ''}`}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="not-italic font-medium text-gray-800 cursor-pointer"
            >
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="w-14 h-14" />
                <span className="hidden min-sm:block text-[12px] xl:text-[14px] uppercase 2xl:text-[20px]">
                  <span className="text-lg xl:text-xl uppercase">Faculty of Science</span><br />
                  Department Of Computer Science
                </span>
              </Link>
            </motion.div>

            {/* Navbar and Actions */}
            <div className="flex items-center w-auto space-x-4">
              {/* Desktop Navbar */}
              <div className="hidden xl:flex">
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>

              {/* Search & Language Switch */}
              <SearchButton onToggle={() => setIsSearchOpen(!isSearchOpen)} />
              <LanguageSwitcherButton />

              {/* Mobile Menu Button */}
              <motion.button
                className="xl:hidden text-gray-800"
                onClick={toggleMobileMenu} // Trigger the mobile menu toggle
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navbar */}
          {isOpen && (
            <motion.div
              className="xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
