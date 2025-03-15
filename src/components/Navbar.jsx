import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logo from "../assets/img/rupp.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(isOpen); 
  const navRef = useRef();
  const location = useLocation();
  const { t } = useTranslation();

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

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Desktop dropdown menu structure
  const desktopDropdown = (menu, ref, items) => (
    <div
      ref={ref}
      className="relative hidden xl:block"
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
              className={`block px-4 py-2 hover:text-red-900 ${
                location.pathname === path ? "text-red-900 font-bold" : ""
              }`}
              onClick={() => setDropdown(null)}
            >
               {t(`menu.${text}`)} {/* Corrected translation key reference */}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );

  // Mobile dropdown menu structure
  const mobileDropdown = (menu, ref, items) => (
    <div className="space-y-2">
      <button
        className="w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100"
        onClick={() => toggleDropdown(menu)}
      >
        {t(menu.menu)} <FiChevronDown className="inline ml-2" />
      </button>
      {dropdown === menu && (
        <div className="pl-4">
          {items.map(([path, text]) => (
            <Link
              key={path}
              to={path}
              className={`block py-1 text-gray-800 hover:bg-gray-100 ${
                location.pathname === path ? "text-red-900 font-bold" : ""
              }`}
              onClick={() => setDropdown(null)}
            >
              {t(menu.text)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav ref={navRef} className="container mx-auto relative xl:flex xl:space-x-6 text-sm 2xl:text-base">
  
      {/* Desktop and Mobile Menu */}
      <div className={`xl:flex space-x-6 uppercase ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Link to="/" className={`hover:text-red-900 ${location.pathname === "/" ? "text-red-900 font-bold" : ""}`}>
          {t("menu.home")}
        </Link>

        {desktopDropdown("about", aboutDropdownRef, [
          ["/menu.about", t("aboutWebsite")],
          ["/developer", t("developerTeam")],
        ])}

        <Link to="/contact" className={`hover:text-red-900 ${location.pathname === "/contact" ? "text-red-900 font-bold" : ""}`}>
          {t("menu.contact")}
        </Link>

        {desktopDropdown("programs", programDropdownRef, [
          ["/programs/bachelor", "bachelor"],
          ["/programs/master", "master"],
          ["/programs/doctoral", "doctoral"],
          ["/programs/diploma", "diploma"],
        ])}

        <Link to="/admissions" className={`hover:text-red-900 ${location.pathname === "/admissions" ? "text-red-900 font-bold" : ""}`}>
          {t("menu.admission")}
        </Link>

        <Link to="/news&events" className={`hover:text-red-900 ${location.pathname === "/news&events" ? "text-red-900 font-bold" : ""}`}>
          {t("menu.newsEvents")}
        </Link>

        {desktopDropdown("campusLife", campusLifeDropdownRef, [
          ["/facilities", t("facilities")],
          ["/scholars", t("scholars")],
        ])}

        {desktopDropdown("Academics & Research", academicsResearchDropdownRef, [
          ["/faculty", "faculty"],
          ["/research", "Research"],
        ])}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden ${isMobileMenuOpen ? "block" : "hidden"} fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <Link to="/" className="text-xl">
            <img src={logo} alt="RUPP Logo" className="w-10" />
          </Link>
          <button onClick={toggleMobileMenu} className="text-xl">
            <FiX />
          </button>
        </div>

        <div className="overflow-y-auto h-full">
          <Link
            to="/"
            className={`block py-2 px-4 text-gray-800 hover:bg-gray-100 ${location.pathname === "/" ? "text-red-900 font-bold" : ""}`}
          >
            {t("home")}
          </Link>

          {mobileDropdown("about", aboutDropdownRef, [
            ["/about", "aboutWebsite"],
            ["/developer", "developerTeam"],
          ])}

          {mobileDropdown("programs", programDropdownRef, [
            ["/programs/bachelor", "bachelor"],
            ["/programs/master", "master"],
            ["/programs/doctoral", "doctoral"],
            ["/programs/diploma", "diploma"],
          ])}

          <Link
            to="/contact"
            className={`block py-2 px-4 text-gray-800 hover:bg-gray-100 ${location.pathname === "/contact" ? "text-red-900 font-bold" : ""}`}
          >
            {t("contact")}
          </Link>

          <Link
            to="/admissions"
            className={`block py-2 px-4 text-gray-800 hover:bg-gray-100 ${location.pathname === "/admissions" ? "text-red-900 font-bold" : ""}`}
          >
            {t("admission")}
          </Link>

          <Link
            to="/news&events"
            className={`block py-2 px-4 text-gray-800 hover:bg-gray-100 ${location.pathname === "/news&events" ? "text-red-900 font-bold" : ""}`}
          >
            {t("newsEvents")}
          </Link>

          {mobileDropdown("campusLife", campusLifeDropdownRef, [
            ["/facilities", "facilities"],
            ["/scholars", "scholars"],
          ])}

          {mobileDropdown("academics", academicsResearchDropdownRef, [
            ["/faculty", "faculty"],
            ["/research", "research"],
          ])}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
