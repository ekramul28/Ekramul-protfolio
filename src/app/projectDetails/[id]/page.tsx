"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchSingleProjects } from "@/utils/api/projectApi";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaCode,
  FaServer,
  FaArrowLeft,
  FaCalendar,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";

// interface ProjectDetailsProps {
//   params: {
//     id: string;
//   };
// }

const ProjectDetails = ({ params }: any) => {
  const { id } = params;
  const [project, setProject] = useState<any>(null);
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
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
    },
  };

  const buttonVariants = {
    hover: {
      y: -2,
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
    },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectData = await fetchSingleProjects(id);
        setProject(projectData);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: colors.light }}
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2"
          style={{ borderColor: colors.primary }}
        ></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: colors.light }}
      >
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Project not found
          </h2>
          <Link href="/">
            <motion.button
              className="px-6 py-3 rounded-xl font-semibold"
              style={{
                background: colors.gradient,
                color: colors.light,
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Go Back Home
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: colors.light }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold"
              style={{
                background: colors.gradient,
                color: colors.light,
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaArrowLeft size={16} />
              Back to Projects
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Project Header */}
          <motion.div className="mb-8" variants={item}>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              {project.title}
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text }}
            >
              {project.description}
            </p>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            className="mb-8 bg-white p-6 rounded-2xl shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: colors.text }}
            >
              Technologies Used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.frontend && project.frontend.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        background: colors.gradient,
                        color: colors.light,
                      }}
                    >
                      <FaCode size={16} />
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: colors.text }}
                    >
                      Frontend
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.text }}>
                    {project.frontend.join(", ")}
                  </p>
                </div>
              )}

              {project.backend && project.backend.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        background: colors.gradient,
                        color: colors.light,
                      }}
                    >
                      <FaServer size={16} />
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: colors.text }}
                    >
                      Backend
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.text }}>
                    {project.backend.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="mb-8 bg-white p-6 rounded-2xl shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: colors.text }}
            >
              Project Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.links?.githubFrontend && (
                <motion.a
                  href={project.links.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: colors.gradient,
                    color: colors.light,
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaGithub size={16} />
                  <span className="text-sm font-medium">Frontend</span>
                </motion.a>
              )}

              {project.links?.githubBackend && (
                <motion.a
                  href={project.links.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: colors.gradient,
                    color: colors.light,
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaGithub size={16} />
                  <span className="text-sm font-medium">Backend</span>
                </motion.a>
              )}

              {project.links?.liveDemo && (
                <motion.a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: colors.gradient,
                    color: colors.light,
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaExternalLinkAlt size={16} />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.a>
              )}

              {project.links?.watchVideo && (
                <motion.a
                  href={project.links.watchVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: colors.gradient,
                    color: colors.light,
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaPlay size={16} />
                  <span className="text-sm font-medium">Watch Video</span>
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Project Images */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: colors.text }}
            >
              Project Screenshots
            </h2>
            <div
              className={`grid gap-6 ${
                project.image.length === 3
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : project.image.length === 4
                  ? "grid-cols-1 md:grid-cols-2"
                  : project.image.length === 5
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {project.image.map((imgUrl: string, index: number) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    height={1000}
                    width={1000}
                    src={imgUrl}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
