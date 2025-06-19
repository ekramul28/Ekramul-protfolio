"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchSkillsLevel2 } from "@/utils/api/level2SkillApi";
import { fetchSkills } from "@/utils/api/skillApi";
import { isUserLoggedIn } from "@/utils/api/userApi";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCpu,
  FiLayers,
  FiCloud,
} from "react-icons/fi";
import { colors } from "@/utils/const&link/color";

const Skills = () => {
  const [level1Skills, setLevel1Skills] = useState([]);
  const [level2Skills, setLevel2Skills] = useState([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Map skill categories to icons with gradient backgrounds
  const skillIcons: Record<string, React.ReactNode> = {
    Frontend: <FiCode size={24} />,
    Backend: <FiServer size={24} />,
    Database: <FiDatabase size={24} />,
    DevOps: <FiCloud size={24} />,
    "AI/ML": <FiCpu size={24} />,
    Other: <FiLayers size={24} />,
  };

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skills = await fetchSkills();
        const skills2 = await fetchSkillsLevel2();
        const userInfo = await isUserLoggedIn();
        setLevel1Skills(skills);
        setLevel2Skills(skills2);
        setUser(userInfo);
      } catch (error) {
        console.error("Error loading skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section
        id="skill"
        className="w-full py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: colors.light }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-8"
              style={{ color: colors.text }}
            >
              My Skills
            </h2>
          </motion.div>
          <div className="flex justify-center items-center h-64">
            <div
              className="animate-spin rounded-full h-12 w-12 border-b-2"
              style={{ borderColor: colors.primary }}
            ></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skill"
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
              Skills
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.text }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: colors.text }}
            variants={item}
          >
            Core Skills
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
          >
            {level1Skills?.map((skill: any, index: any) => (
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

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: colors.gradient,
                      color: colors.light,
                    }}
                  >
                    {skillIcons[skill.category] || skillIcons["Other"]}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: colors.text }}
                    >
                      {skill.name}
                    </h3>
                    <p className="text-sm" style={{ color: colors.primary }}>
                      {skill.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.text }}
                    >
                      Proficiency
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: colors.primary }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-3 rounded-full"
                      style={{ background: colors.gradient }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            className="mb-8 border-t border-gray-200"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h3
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: colors.text }}
            variants={item}
          >
            Additional Skills
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={container}
          >
            {level2Skills?.map((skill: any, index: any) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div
                  className="p-4 rounded-xl mb-4 mx-auto w-fit transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: colors.gradient,
                    color: colors.light,
                  }}
                >
                  {skillIcons[skill.category] || skillIcons["Other"]}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: colors.text }}
                >
                  {skill.name}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  {skill.level}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
