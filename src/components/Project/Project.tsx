/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for routing
import Image from "next/image";
import { fetchProjects } from "@/utils/api/projectApi";

const Projects = async () => {
  const projects = await fetchProjects();
  return (
    <section id="project" className="w-full py-6 md:py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold  text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project: any, index: any) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Image
                height={1000}
                width={1000}
                src={project?.image[0]}
                alt={project?.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project?.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project?.description?.length > 30
                    ? `${project.description.slice(0, 100)}...`
                    : project?.description}
                </p>
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Frontend Technologies:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {project?.frontend?.join(", ")}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Backend Technologies:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {project?.backend?.join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project?.links?.githubFrontend && (
                    <a
                      href={project.links.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
                    >
                      GitHub Frontend
                    </a>
                  )}
                  {project?.links?.githubBackend && (
                    <a
                      href={project.links.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600"
                    >
                      GitHub Backend
                    </a>
                  )}
                  {project?.links?.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded hover:bg-purple-600"
                    >
                      Live Demo
                    </a>
                  )}
                  {project?.links?.watchVideo && (
                    <a
                      href={project.links.watchVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
                    >
                      Watch Video
                    </a>
                  )}

                  <Link href={`/projectDetails/${project._id}`}>
                    <p className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded hover:bg-teal-600">
                      Details
                    </p>
                  </Link>
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
