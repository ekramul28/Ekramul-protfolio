/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");

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
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatusMessage("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Contact Information Section */}
        <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold  text-center mb-8">
            Contact Information
          </h2>
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500 text-3xl" />
              <span className="text-xl ">+1 234 567 890</span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-3xl" />
              <span className="text-xl ">example@email.com</span>
            </div>
            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-3xl" />
              <span className="text-xl ">New York, USA</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-3xl font-bold  text-center mb-8">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto  p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            {statusMessage && (
              <p className="text-center  mb-4">{statusMessage}</p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
