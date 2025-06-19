"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { colors } from "@/utils/const&link/color";

const About = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.05,
      y: -10,
    },
  };

  const button = {
    hover: {
      y: -3,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      id="about"
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
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={item}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden border-4"
                style={{
                  borderColor: colors.light,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  height={320}
                  width={320}
                  src="/img/about.jpg"
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
            </motion.div>
          </motion.div>

          {/* Right Side: About Text */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={container}
          >
            <motion.div variants={item}>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: colors.text }}
              >
                About Me
              </h2>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl leading-relaxed"
              variants={item}
              style={{ color: colors.text }}
            >
              My name is{" "}
              <span
                className="font-bold"
                style={{
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ekramul
              </span>
              . I am a professional and enthusiastic programmer in my daily
              life. I am a quick learner with a self-learning attitude. I love
              to learn and explore new technologies and am passionate about
              problem-solving. I love almost all the stacks of web application
              development and love to make the web more open to the world. My
              core skill is based on JavaScript and I love to do most of the
              things using JavaScript. I am available for any kind of job
              opportunity that suits my skills and interests.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={item}
            >
              <motion.a
                href="https://drive.usercontent.google.com/u/0/uc?id=1RRW7n2f_pbiwk2DiUxAVexuB_BNmuoFO&export=download"
                download
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center"
                style={{
                  background: colors.gradient,
                  color: colors.light,
                }}
                whileHover="hover"
                whileTap="tap"
                variants={button}
              >
                Download CV
                <HiOutlineArrowNarrowRight className="ml-2" size={20} />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1RRW7n2f_pbiwk2DiUxAVexuB_BNmuoFO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
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
                View CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
