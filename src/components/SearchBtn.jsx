import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative flex items-center space-x-2" ref={buttonRef}>
      <motion.button
        className="text-black focus:outline-none"
        onClick={handleButtonClick}
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <FiX
            className="w-6 h-6 cursor-pointer absolute top-2 right-2"
            onClick={handleCloseClick}
          />
        ) : (
          <>
            <FiSearch className="w-6 h-6" />
            <span className="ml-2 sr-only">Search</span>
          </>
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-10 p-4 bg-black bg-opacity-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          ref={overlayRef}
        >
          <div className="bg-white  rounded-lg shadow-xl w-72 relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 w-full"
            />
          </div>
          <FiX
            className="w-6 h-6 cursor-pointer absolute top-4 right-8 bg-white rounded-full p-1"
            onClick={handleCloseClick}
          />
        </motion.div>
      )}
    </div>
  );
};

export default SearchButton;
