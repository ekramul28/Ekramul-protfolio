"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaMedium,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { colors } from "@/utils/const&link/color";

const Banner: React.FC = () => {
  // Animation configurations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const socialIcon = (delay: number) => ({
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -5,
      color: colors.secondary,
      transition: { duration: 0.2 },
    },
  });

  const button = {
    hover: {
      y: -3,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
    },
    tap: { scale: 0.98 },
  };

  const socialLinks = [
    {
      icon: <FaGithub size={22} />,
      href: "https://github.com/ekramul28",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin size={22} />,
      href: "https://linkedin.com/in/ekramul57",
      name: "LinkedIn",
    },
    {
      icon: <FaTwitter size={22} />,
      href: "https://twitter.com/@ekramul_28",
      name: "Twitter",
    },
    {
      icon: <FaInstagram size={22} />,
      href: "https://instagram.com/ekramul_28",
      name: "Instagram",
    },
    {
      icon: <FaDiscord size={22} />,
      href: "https://discord.com/mdekramulhassan_25837",
      name: "Discord",
    },
    {
      icon: <HiOutlineMail size={22} />,
      href: "mailto:mdekramulhassan168@gmail.com",
      name: "Email",
    },
  ];

  return (
    <section
      id="banner"
      className="w-full py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: colors.light }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Social Links - Left Side */}
          <motion.div
            className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start space-y-8"
            variants={container}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group relative"
                // variants={socialIcon(i)}
                custom={i}
                animate="active"
                whileHover="hover"
                aria-label={link.name}
              >
                <span
                  className="absolute left-full ml-4 px-3 py-1 text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.light,
                  }}
                >
                  {link.name}
                </span>
                <span
                  className="p-2 rounded-full transition-colors duration-300"
                  style={{
                    color: colors.dark,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Content - Middle */}
          <motion.div
            className="col-span-1 lg:col-span-7 text-center lg:text-left"
            variants={container}
          >
            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span style={{ color: colors.text }}>Hi, I'm </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: colors.gradient,
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Ekramul Haque
                </span>
              </h1>
              <h2
                className="text-xl md:text-2xl mb-8 font-medium"
                style={{ color: colors.primary }}
              >
                Full Stack Developer & UI Specialist
              </h2>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ color: colors.text }}
            >
              I craft high-performance web applications with cutting-edge
              technologies and pixel-perfect interfaces that deliver exceptional
              user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center"
                style={{
                  background: colors.gradient,
                  color: colors.light,
                }}
                whileHover="hover"
                whileTap="tap"
                variants={button}
              >
                Get In Touch
                <HiOutlineArrowNarrowRight className="ml-2" size={20} />
              </motion.a>

              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center border-2"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                }}
                whileHover={{
                  backgroundColor: colors.primary,
                  color: colors.light,
                  y: -3,
                }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="col-span-1 lg:col-span-3 flex justify-center lg:justify-end"
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden border-4"
                style={{
                  borderColor: colors.light,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
                }}
              >
                <img
                  src="/img/Pro1.jpeg"
                  alt="Ekramul Haque"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -z-10 inset-0 rounded-2xl"
                style={{
                  background: colors.gradient,
                  transform: "rotate(5deg)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
