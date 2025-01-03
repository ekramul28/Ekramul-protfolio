import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-16 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              height={200}
              width={200}
              src="/img/about.jpg" // Update this path to your profile image
              alt="Ekramul Haque"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: About Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold ">About Me</h2>
          <p className="text-lg ">
            My name is <strong>Ekramul</strong>. I am a professional and
            enthusiastic programmer in my daily life. I am a quick learner with
            a self-learning attitude. I love to learn and explore new
            technologies and am passionate about problem-solving. I love almost
            all the stacks of web application development and love to make the
            web more open to the world. My core skill is based on JavaScript and
            I love to do most of the things using JavaScript. I am available for
            any kind of job opportunity that suits my skills and interests.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1ZaRd2LhVl27sAWjnsAuYO8PcLI9PSv7B&export=download" // Update with your CV link
              download
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="https://drive.google.com/file/d/1ZaRd2LhVl27sAWjnsAuYO8PcLI9PSv7B/view?usp=sharing" // Update with your CV viewing link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
