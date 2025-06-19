"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { colors } from "@/utils/const&link/color";

const Footer: React.FC = () => {
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

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      color: colors.secondary,
    },
    tap: { scale: 0.95 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    {
      icon: <FaPhone size={18} />,
      label: "Phone",
      value: "+8801762477828",
      href: "tel:+8801762477828",
    },
    {
      icon: <FaEnvelope size={18} />,
      label: "Email",
      value: "mdekramulhassan168@gmail.com",
      href: "mailto:mdekramulhassan168@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt size={18} />,
      label: "Location",
      value: "Jessore, Dhaka, Bangladesh",
      href: "https://maps.google.com/?q=Jessore,Dhaka,Bangladesh",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={20} />,
      href: "https://www.facebook.com/ekramulhassan28",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com/@ekramul_28",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/ekramul_28",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/in/ekramul57",
      color: "hover:text-blue-700",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/ekramul28",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div variants={item}>
            <h3
              className="text-2xl font-bold mb-6 text-white"
              style={{ color: colors.light }}
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: colors.gradient,
                      color: colors.light,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: colors.light }}
                    >
                      {info.label}
                    </p>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-300"
                      style={{ color: colors.light }}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: colors.light }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-sm transition-all duration-300 hover:font-semibold"
                    style={{ color: colors.light }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={item}>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: colors.light }}
            >
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-300 ${social.color}`}
                  style={{
                    background: colors.gradient,
                    color: colors.light,
                  }}
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-600 pt-8 pb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm mb-4" style={{ color: colors.light }}>
            &copy; {new Date().getFullYear()} Ekramul. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: colors.light }}>
            Crafted with ❤️ using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        style={{
          background: colors.gradient,
          color: colors.light,
        }}
        whileHover={{
          y: -5,
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
