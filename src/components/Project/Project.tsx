"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchProjects } from "@/utils/api/projectApi";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaInfoCircle,
  FaCode,
  FaServer,
} from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modern gradient color scheme
  const colors = {
    primary: "#8B5CF6", // Vibrant purple
    secondary: "#EC4899", // Pink
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    dark: "#1F2937", // Dark gray
    light: "#F9FAFB", // Light gray
    accent: "#FCD34D", // Golden yellow
    text: "#374151", // Gray-700
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

  const buttonVariants = {
    hover: {
      y: -2,
      scale: 1.05,
    },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section
        id="project"
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
              My Projects
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
      id="project"
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
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ color: colors.text }}
          >
            My Projects
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projects?.map((project: any, index: any) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src={project?.image[0]}
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.text }}
                  variants={item}
                >
                  {project?.title}
                </motion.h3>

                <motion.p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: colors.text }}
                  variants={item}
                >
                  {project?.description?.length > 100
                    ? `${project.description.slice(0, 100)}...`
                    : project?.description}
                </motion.p>

                {/* Technologies */}
                <motion.div className="space-y-3 mb-6" variants={item}>
                  {project?.frontend && project.frontend.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FaCode className="text-blue-500" size={14} />
                        <h4
                          className="text-sm font-semibold"
                          style={{ color: colors.text }}
                        >
                          Frontend:
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600">
                        {project?.frontend?.join(", ")}
                      </p>
                    </div>
                  )}

                  {project?.backend && project.backend.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FaServer className="text-green-500" size={14} />
                        <h4
                          className="text-sm font-semibold"
                          style={{ color: colors.text }}
                        >
                          Backend:
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600">
                        {project?.backend?.join(", ")}
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Action Buttons */}
                <motion.div className="flex flex-wrap gap-2" variants={item}>
                  {project?.links?.githubFrontend && (
                    <motion.a
                      href={project.links.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded-lg hover:bg-gray-700 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaGithub size={12} />
                      Frontend
                    </motion.a>
                  )}

                  {project?.links?.githubBackend && (
                    <motion.a
                      href={project.links.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded-lg hover:bg-gray-700 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaGithub size={12} />
                      Backend
                    </motion.a>
                  )}

                  {project?.links?.liveDemo && (
                    <motion.a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-white text-xs font-medium rounded-lg"
                      style={{ background: colors.gradient }}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </motion.a>
                  )}

                  {project?.links?.watchVideo && (
                    <motion.a
                      href={project.links.watchVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaPlay size={12} />
                      Watch Video
                    </motion.a>
                  )}

                  <Link href={`/projectDetails/${project._id}`}>
                    <motion.div
                      className="flex items-center gap-2 px-3 py-2 bg-teal-500 text-white text-xs font-medium rounded-lg hover:bg-teal-600 transition-colors cursor-pointer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaInfoCircle size={12} />
                      Details
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
