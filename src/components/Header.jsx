import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion"; 
import SearchButton from "./SearchBtn";
import LanguageSwitcherButton from "./home/LanguageSwitcherButton";
import Navbar from "./Navbar";

// Logo import
import logo from "../assets/img/rupp.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          className="not-italic font-medium text-gray-800 cursor-pointer">
            <span className="sr-only">logo</span>
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="w-14 h-14" />
              <span className="hidden min-sm:block text-[12px] xl:text-[16px] 2xl:text-[22px]">
                Faculty of Science Department <br /> Of Computer Science
              </span>
            </Link>
          </motion.div>

          {/* Navbar and Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navbar */}
            <div className="hidden xl:flex">
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Search & Language Switch */}
            <SearchButton />
            <LanguageSwitcherButton />

            {/* Mobile Menu Button with motion */}
            <motion.button
              className="xl:hidden text-gray-800"
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <FiX size={28} />
              ) : (
                <FiMenu size={28} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navbar with motion */}
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
  );
};

export default Header;
