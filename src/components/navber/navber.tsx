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
        <div className="px-4  flex items-center justify-between ">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold">
            <Link href="/">Ekramul Portfolio</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          {/* Dark Mode Toggle Button */}
          <div className="flex gap-2 justify-center items-center">
            <nav
              className={`md:flex space-x-6 ${isMenuOpen ? "block" : "hidden"}`}
            >
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
                    className="hover:text-blue-500 ml-3"
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
                className="px-4 py-3 w-[90px] bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="px-6 py-3 w-full bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block hover:text-gray-400"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
