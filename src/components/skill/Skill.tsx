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

// Map skill categories to icons
const skillIcons: Record<string, React.ReactNode> = {
  Frontend: <FiCode className="text-blue-500" size={24} />,
  Backend: <FiServer className="text-green-500" size={24} />,
  Database: <FiDatabase className="text-purple-500" size={24} />,
  DevOps: <FiCloud className="text-orange-500" size={24} />,
  "AI/ML": <FiCpu className="text-red-500" size={24} />,
  Other: <FiLayers className="text-yellow-500" size={24} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {
  const [level1Skills, setLevel1Skills] = useState([]);
  const [level2Skills, setLevel2Skills] = useState([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const skills = await fetchSkills();
      const skills2 = await fetchSkillsLevel2();
      const userInfo = await isUserLoggedIn();
      setLevel1Skills(skills);
      setLevel2Skills(skills2);
      setUser(userInfo);
    };

    fetchData();
  }, []);

  return (
    <section id="skill" className="w-full py-6 md:py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            My Skills
          </h2>
        </motion.div>

        <div className="mb-12">
          <motion.h3
            className="text-2xl font-semibold mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Core Skills
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {level1Skills?.map((skill: any, index: any) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="p-3 bg-blue-50 rounded-full">
                  {skillIcons[skill.category] || skillIcons["Other"]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{skill.level}%</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.div
            className="mb-6 border-t border-gray-200"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h3
            className="text-2xl font-semibold mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Additional Skills
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {level2Skills?.map((skill: any, index: any) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-blue-50 rounded-full mb-3">
                  {skillIcons[skill.category] || skillIcons["Other"]}
                </div>
                <h3 className="text-lg font-medium text-gray-800 text-center">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
