import React, { useState, useRef, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchButton from "./SearchBtn";
import LanguageSwitcherButton from "./home/LanguageSwitcherButton";
import Navbar from "./Navbar";
import logo from "../assets/img/rupp.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const globalData = [
    { name: "Dr. Heng Sovannrith", position: "Assistant Professor" },
    { name: "Asst. Prof. Dr. Chor Chandara", position: "Assistant Professor" },
  ];

  // Close the search bar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicked outside
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => document.removeEventListener("mousedown", handleClickOutsideMobile);
  }, []);

  return (
    <div className="relative bg-white shadow-md">
      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full bg-red-800 py-4 z-50">
          <div className="max-w-8xl mx-auto px-4 p-4" ref={searchContainerRef}>
            <SearchButton
              onToggle={() => setIsSearchOpen(!isSearchOpen)}
              data={globalData}
            />
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className={`p-4 ${isSearchOpen ? "pt-34" : ""}`}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-800 cursor-pointer"
            >
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="w-14 h-14" />
                <motion.h2
                  className={`xl:text-lg font-normal text-sm uppercase hidden sm:block ${
                    currentLanguage === "km" ? "font-khmer" : "font-bold"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  lang={currentLanguage}
                >
                  {t("Partnerships.Faculty of Science")} <br /> {t("Department.Department of Computer Science")}
                </motion.h2>
              </Link>
            </motion.div>

            {/* Desktop Navigation and Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
              </div>

              {!isSearchOpen && (
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-600 hover:text-red-800 p-1.5 rounded-full transition-colors"
                >
                  <IoMdSearch className="text-3xl" />
                </motion.button>
              )}

              <LanguageSwitcherButton />

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-gray-600 hover:text-red-800 p-2 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md z-50 overflow-y-auto">
          <div className="p-6">

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-800 cursor-pointer"
            >
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="w-14 h-14" />
                <motion.h2
                  className={`xl:text-lg font-normal text-sm uppercase block ${
                    currentLanguage === "km" ? "font-khmer" : "font-bold"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  lang={currentLanguage}
                >
                  {t("Partnerships.Faculty of Science")} <br /> {t("Department.Department of Computer Science")}
                </motion.h2>
              </Link>
            </motion.div>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-red-800 p-2 rounded-full transition-colors"
            >
              <FaTimes className="absolute right-6 top-6 text-3xl" />
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 mt-4 px-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-red-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("menu.home")}
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-red-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("menu.about")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-red-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("menu.contact")}
              </Link>
              <Link
                to="/news&events"
                className="text-gray-600 hover:text-red-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("menu.newsEvents")}
              </Link>
              <Link
                to="/programs"
                className="text-gray-600 hover:text-red-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("menu.programs")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
