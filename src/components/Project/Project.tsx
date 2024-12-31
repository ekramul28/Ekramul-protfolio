import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for routing
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "An e-commerce platform for seamless online shopping experience with real-time inventory tracking.",
    frontend: ["React", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express", "MongoDB"],
    image: "/images/ecommerce.jpg",
    links: {
      githubFrontend: "https://github.com/user/frontend-ecommerce",
      githubBackend: "https://github.com/user/backend-ecommerce",
      liveDemo: "https://ecommerce.live",
      watchVideo: "https://youtube.com/ecommerce-demo",
      details: "/projects/e-commerce", // Link to detailed project page
    },
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and contact details.",
    frontend: ["Next.js", "Material UI"],
    backend: ["N/A"],
    image: "/images/portfolio.jpg",
    links: {
      githubFrontend: "https://github.com/user/portfolio",
      githubBackend: "",
      liveDemo: "https://portfolio.live",
      watchVideo: "https://youtube.com/portfolio-demo",
      details: "/projects/portfolio", // Link to detailed project page
    },
  },
];

const Projects: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Image
                height={200}
                width={200}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Frontend Technologies:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {project.frontend.join(", ")}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Backend Technologies:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {project.backend.join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.links.githubFrontend && (
                    <a
                      href={project.links.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
                    >
                      GitHub Frontend
                    </a>
                  )}
                  {project.links.githubBackend && (
                    <a
                      href={project.links.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600"
                    >
                      GitHub Backend
                    </a>
                  )}
                  {project.links.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded hover:bg-purple-600"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.watchVideo && (
                    <a
                      href={project.links.watchVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
                    >
                      Watch Video
                    </a>
                  )}
                  {project.links.details && (
                    <Link href={project.links.details}>
                      <p className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded hover:bg-teal-600">
                        Details
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
