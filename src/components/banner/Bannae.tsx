// components/Banner.tsx

import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // You can use any icons you prefer

const Banner: React.FC = () => {
  return (
    <section className="w-full   py-16">
      <div className="  px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Side: Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a
            href="https://github.com/ekramul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/ekramul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com/ekramul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={32} />
          </a>
        </div>

        {/* Middle Side: About Me */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Ekramul Haque</h2>
          <p className="text-lg mb-6">
            I am a passionate and self-taught web developer with a strong
            commitment to continuous learning and improvement. Over the years,
            I've honed my skills in both frontend and backend development.
          </p>
          <a
            href="#contact-me"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            height={200}
            width={200}
            src="/profile.jpg" // Update this path to your profile image
            alt="Ekramul Haque"
            className="w-40 h-40 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
