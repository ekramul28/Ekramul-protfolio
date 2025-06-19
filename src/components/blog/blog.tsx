"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlog } from "@/utils/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";
import { colors } from "@/utils/const&link/color";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      x: 5,
      scale: 1.05,
    },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const posts = await fetchBlog();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <section
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
              Latest Blog Posts
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
            Latest{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: colors.gradient,
                WebkitBackgroundClip: "text",
              }}
            >
              Blog Posts
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.text }}
          >
            Explore my thoughts on technology, development, and industry
            insights
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {blogPosts?.length === 0 ? (
            <motion.div
              className="col-span-full text-center py-16"
              variants={item}
            >
              <h3
                className="text-2xl font-semibold"
                style={{ color: colors.text }}
              >
                No Blogs Added Yet
              </h3>
              <p className="text-lg mt-2" style={{ color: colors.text }}>
                Check back soon for new content!
              </p>
            </motion.div>
          ) : (
            blogPosts?.map((post: any) => (
              <motion.div
                key={post._id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <Image
                    height={200}
                    width={200}
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-4 line-clamp-2"
                    style={{ color: colors.text }}
                    variants={item}
                  >
                    {post.title}
                  </motion.h3>

                  <motion.div
                    className="mb-4 text-sm text-gray-600 line-clamp-3"
                    variants={item}
                    dangerouslySetInnerHTML={{
                      __html:
                        post?.content?.length > 150
                          ? `${post?.content?.slice(0, 150)}...`
                          : post.content,
                    }}
                  />

                  {/* Blog Meta */}
                  <motion.div
                    className="flex items-center justify-between mb-4"
                    variants={item}
                  >
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaUser size={12} />
                        <span>Admin</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar size={12} />
                        <span>Recent</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Read More Button */}
                  <Link href={`Blog/${post._id}`}>
                    <motion.div
                      className="flex items-center gap-2 text-sm font-semibold cursor-pointer"
                      style={{ color: colors.primary }}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Read More
                      <FaArrowRight size={12} />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
