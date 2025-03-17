import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags"; 
import { motion } from "framer-motion"; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; 

const LanguageSwitcherButton = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); 

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-500 rounded-lg focus:outline-none"
      >
        {i18n.language === "en" ? (
          <>
            <Flag code="US" className="w-6 h-6" />
            <span>English</span>
          </>
        ) : (
          <>
            <Flag code="KH" className="w-6 h-6" />
            <span>ខ្មែរ</span>
          </>
        )}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </motion.div>
      </motion.button>

      {isOpen && (
        <motion.div className="absolute left-0 mt-2 max-w-4xl bg-white shadow-lg rounded-md py-2">
          <motion.button
            onClick={() => toggleLanguage("en")}
            className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <Flag code="US" className="w-6 h-6 mr-2" />
            <span>English</span>
          </motion.button>

          <motion.button
            onClick={() => toggleLanguage("km")}
            className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <Flag code="KH" className="w-6 h-6 mr-2" />
            <span>ខ្មែរ</span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LanguageSwitcherButton;
