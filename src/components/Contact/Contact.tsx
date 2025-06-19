"use client";
import React, { useState } from "react";
import {
  MdOutlinePhone,
  MdOutlineEmail,
  MdLocationOn,
  MdSend,
} from "react-icons/md";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { colors } from "@/utils/const&link/color";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Animation configurations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
    },
  };

  const buttonVariants = {
    hover: {
      y: -2,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
    },
    tap: { scale: 0.98 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch (e) {
      console.log(e)
      setStatusMessage(
        "Error sending message. Please check your connection.",
      } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <MdOutlinePhone className="text-2xl" />,
      title: "Phone",
      value: "+8801762477828",
      href: "tel:+8801762477828",
    },
    {
      icon: <MdOutlineEmail className="text-2xl" />,
      title: "Email",
      value: "mdekramulhassan168@gmail.com",
      href: "mailto:mdekramulhassan168@gmail.com",
    },
    {
      icon: <MdLocationOn className="text-2xl" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: colors.light }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: colors.gradient,
                WebkitBackgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.text }}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="lg:w-1/3 bg-white p-8 rounded-2xl shadow-lg"
          >
            <motion.h3
              className="text-2xl font-bold mb-8"
              style={{ color: colors.text }}
              variants={item}
            >
              Contact Information
            </motion.h3>

            <motion.div className="space-y-8" variants={container}>
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: colors.gradient,
                      color: colors.light,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: colors.text }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: colors.text }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-lg"
          >
            <motion.h3
              className="text-2xl font-bold mb-8"
              style={{ color: colors.text }}
              variants={item}
            >
              Send Me a Message
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={container}
            >
              <motion.div className="space-y-2" variants={item}>
                <label
                  htmlFor="name"
                  className="block font-medium"
                  style={{ color: colors.text }}
                >
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    style={{ backgroundColor: colors.light }}
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              <motion.div className="space-y-2" variants={item}>
                <label
                  htmlFor="email"
                  className="block font-medium"
                  style={{ color: colors.text }}
                >
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    style={{ backgroundColor: colors.light }}
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>

              <motion.div className="space-y-2" variants={item}>
                <label
                  htmlFor="message"
                  className="block font-medium"
                  style={{ color: colors.text }}
                >
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-4 text-gray-400">
                    <FiMessageSquare />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
                    style={{ backgroundColor: colors.light }}
                    rows={5}
                    placeholder="Hello, I would like to talk about..."
                  />
                </div>
              </motion.div>

              {statusMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-medium ${
                    statusMessage.includes("🎉")
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {statusMessage}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: colors.gradient }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <MdSend size={20} /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
