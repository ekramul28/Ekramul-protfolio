/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchSingleProjects } from "@/utils/api/projectApi";
import Image from "next/image";

// interface ProjectDetailsProps {
//   params: {
//     id: string;
//   };
// }

const ProjectDetails = async ({ params }: any) => {
  const { id } = params;
  const project = await fetchSingleProjects(id);

  if (!project) {
    return <div className="text-center text-red-500">Project not found.</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-gray-700">{project.description}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Frontend:</strong> {project.frontend.join(", ")}
          </li>
          <li>
            <strong>Backend:</strong> {project.backend.join(", ")}
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Links:</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              href={project.links.githubFrontend}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Frontend
            </a>
          </li>
          <li>
            <a
              href={project.links.githubBackend}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Backend
            </a>
          </li>
          <li>
            <a
              href={project.links.liveDemo}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
          <li>
            <a
              href={project.links.watchVideo}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`grid gap-4 ${
          project.image.length === 3
            ? "grid-cols-3"
            : project.image.length === 4
            ? "grid-cols-4"
            : project.image.length === 5
            ? "grid-cols-5"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {project.image.map((imgUrl: string, index: number) => (
          <Image
            key={index}
            height={200}
            width={200}
            src={imgUrl}
            alt={`Screenshot ${index + 1}`}
            className="rounded shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
