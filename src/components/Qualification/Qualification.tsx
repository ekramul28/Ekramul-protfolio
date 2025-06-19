"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import { colors } from "@/utils/const&link/color";

const education = [
  {
    degree:
      " BSS Studying Political Science. Passion about computer science and engineering ",
    institution: "National University",
    year: "2021 - 2026",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "A.B.C.D. College,Chowjacha,Jessore",
    year: "2018 - 2020",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Patibila H.S.A High School,Chowjacha,Jessore",
    year: "2016 - 2017",
  },
];

// const certifications = [
//   { title: "Full-Stack Web Development", provider: "Programing Hero", year: "2023" },
//   { title: "React & Redux Mastery", provider: "Udemy", year: "2022" },
//   { title: "MongoDB Essentials", provider: "MongoDB University", year: "2021" },
// ];

// const workExperience = [
//   {
//     role: "Frontend Developer",
//     company: "Tech Solutions Inc.",
//     year: "2023 - Present",
//   },
//   {
//     role: "Web Development Intern",
//     company: "Startup Hub",
//     year: "2022 - 2023",
//   },
// ];

const Qualification = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
    },
  };

  return (
    <section
      id="qualification"
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
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: colors.gradient,
                WebkitBackgroundClip: "text",
              }}
            >
              Qualifications
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.text }}
          >
            My educational journey and academic achievements
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: colors.text }}
            variants={item}
          >
            Education
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative gradient overlay */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: colors.gradient }}
                ></div>

                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: colors.gradient,
                      color: colors.light,
                    }}
                  >
                    <FaGraduationCap size={20} />
                  </div>
                  <div
                    className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: colors.gradient,
                      color: colors.light,
                    }}
                  >
                    <FaUniversity size={16} />
                  </div>
                </div>

                {/* Content */}
                <motion.h4
                  className="text-lg font-bold mb-3 leading-tight"
                  style={{ color: colors.text }}
                >
                  {item.degree}
                </motion.h4>
                <motion.p
                  className="text-sm mb-2 font-medium"
                  style={{ color: colors.primary }}
                >
                  {item.institution}
                </motion.p>
                <motion.div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt size={12} />
                  <span>{item.year}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certification Section - Commented out for now */}
        {/* <motion.div className="mb-12" variants={container}>
          <motion.h3 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.text }} variants={item}>
            Certifications
          </motion.h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={container}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-3 bg-blue-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCertificate className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: colors.text }}>
                  {cert.title}
                </h4>
                <p className="text-sm mb-2" style={{ color: colors.primary }}>
                  {cert.provider}
                </p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

        {/* Work Experience Section - Commented out for now */}
        {/* <motion.div variants={container}>
          <motion.h3 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.text }} variants={item}>
            Work Experience
          </motion.h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={container}>
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-3 bg-green-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaBriefcase className="text-green-600" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: colors.text }}>
                  {work.role}
                </h4>
                <p className="text-sm mb-2" style={{ color: colors.primary }}>
                  {work.company}
                </p>
                <p className="text-sm text-gray-500">{work.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Qualification;
