import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import SearchButton from "./SearchBtn";
import LanguageSwitcherButton from "./home/LanguageSwitcherButton";
import Navbar from "./Navbar";
import logo from "../assets/img/rupp.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search bar state
  const location = useLocation(); // To highlight the current route

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <div className="relative bg-white shadow-md">
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
              <div className="hidden 2xl:block">
                <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
              </div>

              {/* Search & Language Switch */}
              <SearchButton onToggle={() => setIsSearchOpen(!isSearchOpen)} />
              <LanguageSwitcherButton />
              
              {isMobileMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg"
                >
                  <Navbar isMobile /> {/* Your existing Navbar component with mobile prop */}
                </motion.nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
