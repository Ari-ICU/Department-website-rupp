import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQuery("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery("");
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative flex items-center" ref={containerRef}>
      <motion.div
        className="flex items-center gap-2"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="relative"
          animate={{
            width: isOpen ? "200px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800"
          />
          {isOpen && (
            <FiX
              className="absolute right-2 top-2.5 w-4 h-4 cursor-pointer text-gray-500 hover:text-red-800"
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
            />
          )}
        </motion.div>

        <motion.button
          onClick={toggleSearch}
          className="text-gray-600 hover:text-red-800 p-1.5 rounded-full transition-colors"
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close search" : "Open search"}
        >
          {isOpen ? (
            <FiX className="w-5 h-5" />
          ) : (
            <FiSearch className="w-5 h-5" />
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SearchButton;