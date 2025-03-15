import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SearchButton = ({ onToggle, data }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const toggleSearch = () => {
    onToggle(); // Toggle search state in Header component
    if (!inputRef.current) return;
    if (!inputRef.current.value) {
      setQuery(""); // Clear input when closing
    }
    setTimeout(() => inputRef.current?.focus(), 10); // Focus the input when opened
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setQuery(""); // Clear the search input
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setQuery(""); // Clear the search input
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Filter the global data based on the search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative flex justify-center items-center" ref={containerRef}>
      <motion.div
        className="flex items-center gap-2"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Only show the input field without the search icon */}
        <motion.div
          className="relative"
          animate={{
            width: query ? "500px" : "500px",
            opacity: 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-4 rounded-lg border border-gray-300 text-gray-50 focus:outline-none focus:ring-2 focus:ring-red-800"
          />
        </motion.div>
      </motion.div>
     
   {/* Show filtered results as a pop-up */}
{query && (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white border rounded-lg shadow-md max-h-60 overflow-y-auto z-50">
    <div className="max-w-xl mx-auto">
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
          >
            {item.name}
          </div>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-500">No results found</div>
      )}
    </div>
  </div>
)}
</div>
  );
};

export default SearchButton;
