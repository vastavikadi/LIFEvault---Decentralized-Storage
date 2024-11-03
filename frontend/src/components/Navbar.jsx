import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import icon from "../assets/favicon2.png";
import GoogleTranslate from "./GoogleTranslate";
import { FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav
      ref={navbarRef}
      className="bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 w-full z-50 top-0 fixed"
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center font-semibold justify-between mx-auto p-3">
        {/* Logo and Brand */}
        <div className="text-white font-bold flex items-center">
          <Link to="/" onClick={closeMenu}>
            <img
              className="float-left"
              src={icon}
              alt="icon"
              style={{ height: "30px", width: "30px" }}
            />
            <span className="px-2 text-xl">LIFEvault</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg lg:hidden hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open Menu</span>
          <div className="flex flex-col gap-1">
            <span
              className={`h-0.5 w-4 bg-white transform transition duration-200 ease-in ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-4 bg-white transition duration-200 ease-in ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-4 bg-white transform transition duration-200 ease-in ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            {/* Home Link */}
            <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                `block py-2 px-3 text-white rounded-lg transition-all duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-500"
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            {/* Conditional Rendering based on Login Status */}
            {isLoggedIn ? (
              <>
                {/* Document Management Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => handleDropdown("documents")}
                    className="flex items-center py-2 px-3 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 focus:outline-none"
                  >
                    Document Management
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        openDropdown === "documents"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "documents" && (
                    <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-lg shadow-lg z-50">
                      <NavLink
                        to="/documentmanagement"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Upload Document
                      </NavLink>
                      <NavLink
                        to="/gallery"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Gallery
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* AI Assistant Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => handleDropdown("aiAssistant")}
                    className="flex items-center py-2 px-3 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 focus:outline-none"
                  >
                    AI Assistant
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        openDropdown === "aiAssistant"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "aiAssistant" && (
                    <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-lg shadow-lg z-50">
                      <NavLink
                        to="/aipage"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Event Summaries
                      </NavLink>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => handleDropdown("other")}
                    className="flex items-center py-2 px-3 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 focus:outline-none"
                  >
                    Other
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        openDropdown === "other" ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "other" && (
                    <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-lg shadow-lg z-50">
                      <NavLink
                        to="/climate"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Check Weather
                      </NavLink>
                      <NavLink
                        to="/taskreminder"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Tasks
                      </NavLink>
                      <NavLink
                        to="/article"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Articles
                      </NavLink>
                      <NavLink
                        to="/practices"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Best Practices
                      </NavLink>
                      <NavLink
                        to="/news"
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        News
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* Logout Button */}
                {isLoggedIn && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        logout();
                        localStorage.clear();
                        navigate("/login");
                      }}
                      className="text-white hover:bg-red-500 py-2 px-3 rounded-lg transition-all duration-300"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => {
                        navigate("/profile");
                      }}
                      className="text-white hover:bg-blue-500 py-2 px-3 rounded-lg transition-all duration-300"
                    >
                      Profile
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <span className="text-white hover:bg-blue-500 py-2 px-3 rounded-lg transition-all duration-300">
                  Login
                </span>
              </Link>
            )}

            {/* Google Translate Component */}
            <GoogleTranslate />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-lg text-white hover:bg-blue-500 transition duration-300 ml-auto"
            >
              {theme === "light" ? (
                <FaSun className="text-2xl" />
              ) : (
                <FaMoon className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
