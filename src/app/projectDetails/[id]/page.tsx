import { fetchSingleProjects } from "@/utils/api/projectApi";
import Image from "next/image";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = await fetchSingleProjects(id);
  console.log(id);
  console.log(project);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.image.map((imgUrl: string, index: number) => (
          <Image
            height={200}
            width={200}
            key={index}
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
