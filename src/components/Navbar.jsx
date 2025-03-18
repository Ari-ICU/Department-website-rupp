import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const { t } = useTranslation();
  const location = useLocation();

  // Refs for dropdowns
  const aboutDropdownRef = useRef(null);
  const programDropdownRef = useRef(null);
  const campusLifeDropdownRef = useRef(null);
  const academicsResearchDropdownRef = useRef(null);

  // Close dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = [
        aboutDropdownRef,
        programDropdownRef,
        campusLifeDropdownRef,
        academicsResearchDropdownRef,
      ];
      const isOutside = dropdowns.every(
        (ref) => !ref.current?.contains(event.target)
      );
      if (isOutside) setDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);

  // Desktop dropdown menu structure
  const desktopDropdown = (menu, ref, items) => (
    <div
      ref={ref}
      className="relative hidden lg:block"
      onMouseEnter={() => setDropdown(menu)}
      onMouseLeave={() => setDropdown(null)}
    >
      <button className="flex items-center uppercase">
        {t(`menu.${menu}`)} <FiChevronDown className="inline ml-2" />
      </button>
      {dropdown === menu && (
        <motion.div
          className="absolute left-0 mt-0 bg-white shadow-md rounded-md py-2 w-52 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {items.map(([path, text]) => (
            <Link
              key={path}
              to={path}
              className={`block px-4 py-2 hover:text-red-900 ${location.pathname === path ? "text-red-900 font-bold" : ""
                }`}
              onClick={() => setDropdown(null)}
            >
              {t(`menu.${text}`)}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <nav className="container mx-auto relative xl:flex xl:space-x-6 text-sm 2xl:text-base">
      {/* Desktop Menu */}
      <div className={`lg:flex space-x-6 uppercase`}>
        <Link
          to="/"
          className={`hover:text-red-900 ${location.pathname === "/" ? "text-red-900 font-bold" : ""}`}
        >
          {t("menu.home")}
        </Link>

        {desktopDropdown("Academics", academicsResearchDropdownRef, [
           ["/admissions", "admission"],
           ["/facilities", "facilities"],
          ["/faculty", "faculty"],
          ["/research", "Research"],
          ["/scholars", "Scholarships"],
         
        ])}

        {desktopDropdown("programs", programDropdownRef, [
          ["/programs/bachelor", "bachelor"],
          ["/programs/master", "master"],
          ["/programs/doctoral", "doctoral"],
          ["/programs/diploma", "diploma"],
        ])}

        <Link
          to="/news&events"
          className={`hover:text-red-900 ${location.pathname === "/news&events" ? "text-red-900 font-bold" : ""}`}
        >
          {t("menu.newsEvents")}
        </Link>

        <Link
          to="/about"
          className={`hover:text-red-900 ${location.pathname === "/about" ? "text-red-900 font-bold" : ""}`}
        >
          {t("menu.about")}
        </Link>

        <Link
          to="/contact"
          className={`hover:text-red-900 ${location.pathname === "/contact" ? "text-red-900 font-bold" : ""}`}
        >
          {t("menu.contact")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
