"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../container/Container";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Apply dark mode to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`w-full py-4 fixed top-0 left-0 mx-auto ${
        isDarkMode ? "bg-black" : "bg-[#f7f7f7]"
      } z-50 ${
        isScrolled
          ? "shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          : ""
      }`}
    >
      <Container>
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="px-4 flex items-center justify-between"
        >
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:text-2xl font-bold flex"
          >
            <Link href="/">
              <p className="flex">
                {" "}
                Ekramul <span className="hidden md:block">Portfolio</span>
              </p>
            </Link>
          </motion.div>

          {/* Dark Mode Toggle Button */}
          <div className="flex gap-2 justify-center items-center">
            <nav className={`flex space-x-6 hidden lg:block`}>
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  custom={index}
                  variants={linkItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-blue-500 relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </nav>

            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:text-blue-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <IoSunnyOutline className="w-6 h-6" />
              ) : (
                <FaMoon className="w-6 h-6" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-4">
              <motion.button
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBars className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                className="bg-gray-800 text-white rounded-lg p-6 w-11/12 max-w-sm shadow-lg space-y-4"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    custom={index}
                    variants={linkItemVariants}
                    onClick={() => {
                      scrollToSection(link.href);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{link.label}</span>
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
                  </motion.button>
                ))}

                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 w-full text-center text-gray-300 hover:text-white transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close Menu
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Navbar;
