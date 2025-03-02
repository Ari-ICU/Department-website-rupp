import React, { useState } from "react";
import Flag from "react-world-flags"; // Import react-world-flags
import { motion } from "framer-motion"; // Import Framer Motion
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import arrow icons

const LanguageSwitcherButton = () => {
  const [language, setLanguage] = useState("en"); // State to store language
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  // Function to toggle language
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // Close dropdown when language is toggled
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-4 py-2 bg-white shadow-md text-gray-500 rounded-lg focus:outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {language === "en" ? (
          <>
            <Flag code="US" className="w-6 h-6" /> {/* US Flag */}
            <span>English</span>
          </>
        ) : (
          <>
            <Flag code="KH" className="w-6 h-6" /> {/* Cambodia Flag */}
            <span>ខ្មែរ</span>
          </>
        )}

        {/* Arrow Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FiChevronUp size={18} /> // Arrow pointing up when dropdown is open
          ) : (
            <FiChevronDown size={18} /> // Arrow pointing down when dropdown is closed
          )}
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md py-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Option for English */}
          <motion.button
            onClick={() => toggleLanguage("en")}
            className="flex items-center w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <Flag code="US" className="w-6 h-6 mr-2" /> {/* US Flag */}
            <span>English</span>
          </motion.button>

          {/* Option for Khmer */}
          <motion.button
            onClick={() => toggleLanguage("km")}
            className="flex items-center w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <Flag code="KH" className="w-6 h-6 mr-2" /> {/* Cambodia Flag */}
            <span>ខ្មែរ</span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LanguageSwitcherButton;
