// components/Banner.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Banner: React.FC = () => {
  return (
    <section id="banner" className="w-full py-16 mt-16 relative">
      {/* SVG Background */}

      <div className="px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Side: Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a
            href="https://github.com/ekramul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/ekramul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com/ekramul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter size={32} />
          </a>
        </div>

        {/* Middle Side: About Me */}
        <div className="text-center md:text-left max-w-md z-10">
          <h2 className="text-3xl font-bold mb-4">Hi, Im Ekramul Haque</h2>
          <p className="text-lg mb-6">
            I am a passionate and self-taught web developer with a strong
            commitment to continuous learning and improvement. Over the years,
            Ive honed my skills in both frontend and backend development.
          </p>
          <a
            href="#contact-me"
            className="px-6 py-3 w-44 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 flex items-center space-x-2"
          >
            <span>Contact Me</span>
            <IoSend size={16} />
          </a>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                className="home__blob-img"
                x="-79"
                y="-46"
                xlinkHref="/img/Pro1.jpeg" // Update this path to your profile image path
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Banner;
