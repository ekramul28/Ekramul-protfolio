"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import Container from "../container/Container";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Apply dark mode to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Check if the user is logged in by checking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Define the navigation links
  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "qualification", label: "Qualification" },
    { href: "projects", label: "Projects" },
    { href: "contact-me", label: "Contact Me" },
    { href: "blog", label: "Blog" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle logout by removing the token from localStorage
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update the login status
  };

  return (
    <header
      className={`w-full py-4 fixed top-0 left-0 mx-auto ${
        isDarkMode ? "bg-black" : "bg-[#f7f7f7]"
      } z-50`}
    >
      <Container>
        <div className="px-4  flex  items-center justify-between ">
          {/* Logo/Brand */}
          <div className="md:text-2xl font-bold flex">
            <Link href="/">
              <p className="flex ">
                {" "}
                Ekramul <span className="hidden md:block">Portfolio</span>
              </p>
            </Link>
          </div>

          {/* Dark Mode Toggle Button */}
          <div className="flex gap-2 justify-center items-center">
            <nav className={`flex space-x-6 hidden lg:block`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-blue-500"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            {/* Dashboard */}
            {isLoggedIn && (
              <div className="flex gap-3 justify-center items-center">
                <nav
                  className={`md:flex space-x-6 ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    className="hover:text-blue-500 ml-3 hidden lg:block"
                    href={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </nav>
              </div>
            )}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:text-blue-500"
            >
              {isDarkMode ? (
                <IoSunnyOutline className="w-6 h-6" />
              ) : (
                <FaMoon className="w-6 h-6" />
              )}
            </button>

            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 md:py-3 md:w-[90px] text-sm bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="px-6 py-2 md:py-3 w-full bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300">
                  Login
                </button>
              </Link>
            )}
            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-4">
              <button onClick={toggleMenu}>
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-800 text-white rounded-lg p-6 w-11/12 max-w-sm shadow-lg space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollToSection(link.href); // Scroll to the section
                    setIsMenuOpen(false); // Close the menu after navigation
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300"
                >
                  <span>{link.label}</span>
                  {/* Optional: Add an icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              ))}

              <Link
                href={"/dashboard"}
                onClick={() => {
                  setIsMenuOpen(false); // Close the menu after navigation
                }}
                className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300"
              >
                Dashboard
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 w-full text-center text-gray-300 hover:text-white transition duration-300"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
