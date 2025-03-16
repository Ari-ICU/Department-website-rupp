import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchButton from "./SearchBtn";
import LanguageSwitcherButton from "./home/LanguageSwitcherButton";
import Navbar from "./Navbar";
import logo from "../assets/img/rupp.png";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search bar state
  const searchContainerRef = useRef(null); // Reference for search container
  const { t } = useTranslation();


  // Sample global data for search (could be replaced by API data)
  const globalData = [
    { name: "Dr. Heng Sovannrith", position: "Assistant Professor" },
    { name: "Asst. Prof. Dr. Chor Chandara", position: "Assistant Professor" },
    // Add more data here
  ];

  // Close search when clicking outside of the search input
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false); // Close search input when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Detect clicks outside

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, []);

  return (
    <div className="relative bg-white shadow-md">
      {/* Show Search input field only on top of the header */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full bg-red-800 py-4 z-50">
          <div className="max-w-8xl mx-auto px-4" ref={searchContainerRef}>
            {/* Pass onToggle prop to control the search visibility */}
            <SearchButton
              onToggle={() => setIsSearchOpen(!isSearchOpen)}
              data={globalData} // Pass global data here
            />
          </div>
        </div>
      )}

      {/* Main Header Content */}
      <div className={`p-4 ${isSearchOpen ? "pt-24" : ""}`}>
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
                <motion.h2
                  className=" xl:text-xl text-sm "
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t("Partnerships.Faculty of Science")} <br className='' /> {t("Partnerships.Department Of Computer Science")}
                </motion.h2>
              </Link>
            </motion.div>

            {/* Navbar and Actions */}
            <div className="flex items-center w-auto space-x-4">
              {/* Desktop Navbar */}
              <div className="hidden 2xl:block">
                <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
              </div>

              {/* Only show the SearchButton when the search is not open */}
              {!isSearchOpen && (
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-600 hover:text-red-800 p-1.5 rounded-full transition-colors"
                  aria-label="Open search"
                >
                  {/* Search icon */}
                  <span className="text-lg">🔍</span>
                </motion.button>
              )}

              <LanguageSwitcherButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
  );
};

export default Header;
