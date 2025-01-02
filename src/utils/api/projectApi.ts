// Define the function to fetch projects
export async function fetchProjects() {
  try {
    const res = await fetch(
      "https://protfolio-web-server-orcin.vercel.app/projects"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const projects = await res.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array as a fallback
  }
}
