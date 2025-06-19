"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../container/Container";
import { colors } from "@/utils/const&link/color";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Apply dark mode to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem("darkMode", String(!isDarkMode));
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "qualification", label: "Qualification" },
    { href: "projects", label: "Projects" },
    { href: "contact-me", label: "Contact" },
    { href: "blog", label: "Blog" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.4,
      },
    }),
  };

  const buttonVariants = {
    hover: {
      y: -2,
      scale: 1.05,
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`w-full py-4 fixed top-0 left-0 mx-auto z-50 transition-all duration-300 ${
        isScrolled
          ? `shadow-lg backdrop-blur-md  ${
              isDarkMode ? "bg-gray-900/90" : "bg-white/90"
            }`
          : "bg-transparent"
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
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-xl font-bold flex"
          >
            <Link href="/" className="flex items-center">
              <span
                className="font-extrabold"
                style={{
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ekramul
              </span>
              <span
                className="hidden md:block ml-2 font-medium"
                style={{ color: colors.text }}
              >
                Portfolio
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  custom={index}
                  variants={linkItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium relative transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                  style={{
                    background:
                      activeSection === link.href
                        ? colors.gradient
                        : "transparent",
                  }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute left-1/2 -bottom-1 h-0.5 w-6 bg-white -translate-x-1/2 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 rounded-xl transition-all duration-300"
              style={{
                background: colors.gradient,
                color: colors.light,
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <IoSunnyOutline className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 rounded-xl transition-all duration-300"
              style={{
                background: colors.gradient,
                color: colors.light,
              }}
              onClick={toggleMenu}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

              {/* Menu Panel */}
              <motion.div
                className="absolute top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-xl font-bold">
                      <span
                        style={{
                          background: colors.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Menu
                      </span>
                    </div>
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-xl transition-all duration-300"
                      style={{
                        background: colors.gradient,
                        color: colors.light,
                      }}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaTimes className="w-5 h-5" />
                    </motion.button>
                  </div>

                  <nav className="flex-1 space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.href}
                        custom={index}
                        variants={linkItemVariants}
                        onClick={() => {
                          scrollToSection(link.href);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full px-4 py-3 rounded-xl text-left flex items-center justify-between transition-all duration-300 ${
                          activeSection === link.href
                            ? "text-white"
                            : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        }`}
                        style={{
                          background:
                            activeSection === link.href
                              ? colors.gradient
                              : "transparent",
                        }}
                        whileHover={{ x: 5 }}
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
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </motion.button>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Dark Mode</span>
                      <motion.button
                        onClick={toggleDarkMode}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isDarkMode ? "bg-purple-600" : "bg-gray-300"
                        }`}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isDarkMode ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Navbar;
