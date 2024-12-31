"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Define the navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#qualification", label: "Qualification" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-me", label: "Contact Me" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header className="w-full   py-4">
      <div className=" px-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold">
          <Link href="/">Ekramul Portfolio</Link>
        </div>

        {/* Navigation Links */}

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
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700"
          >
            {isDarkMode ? (
              <FaSun className="w-6 h-6" />
            ) : (
              <FaMoon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
