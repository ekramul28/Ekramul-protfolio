"use client";
import React, { useState } from "react";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [frontendTechnologies, setFrontendTechnologies] = useState("");
  const [backendTechnologies, setBackendTechnologies] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [githubFrontend, setGithubFrontend] = useState("");
  const [githubBackend, setGithubBackend] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const data = {
      projectName,
      description,
      frontendTechnologies: frontendTechnologies
        .split(",")
        .map((tech) => tech.trim()),
      backendTechnologies: backendTechnologies
        .split(",")
        .map((tech) => tech.trim()),
      startDate,
      endDate,
      githubFrontend,
      githubBackend,
      liveLink,
      videoLink,
    };

    try {
      setLoading(true);

      // Replace `API_URL` with your actual backend endpoint
      const response = await fetch(
        "https://your-backend-url.com/api/addProject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setMessage("Project added successfully!");
        setProjectName("");
        setDescription("");
        setFrontendTechnologies("");
        setBackendTechnologies("");
        setStartDate("");
        setEndDate("");
        setGithubFrontend("");
        setGithubBackend("");
        setLiveLink("");
        setVideoLink("");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to add project.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Error adding project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Add a New Project
      </h1>
      <p className="text-gray-600 text-center mt-2 mb-6">
        Share details about your project to showcase your work.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 bg-white p-4 rounded-lg shadow-md"
      >
        {/* Project Name */}
        <div>
          <label
            htmlFor="projectName"
            className="block text-sm font-medium text-gray-700"
          >
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter project name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter a brief description of the project"
            required
          ></textarea>
        </div>

        {/* Frontend Technologies */}
        <div>
          <label
            htmlFor="frontendTechnologies"
            className="block text-sm font-medium text-gray-700"
          >
            Frontend Technologies
          </label>
          <input
            type="text"
            id="frontendTechnologies"
            value={frontendTechnologies}
            onChange={(e) => setFrontendTechnologies(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter frontend technologies (comma-separated)"
            required
          />
        </div>

        {/* Backend Technologies */}
        <div>
          <label
            htmlFor="backendTechnologies"
            className="block text-sm font-medium text-gray-700"
          >
            Backend Technologies
          </label>
          <input
            type="text"
            id="backendTechnologies"
            value={backendTechnologies}
            onChange={(e) => setBackendTechnologies(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter backend technologies (comma-separated)"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* End Date */}
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* GitHub Frontend Link */}
        <div>
          <label
            htmlFor="githubFrontend"
            className="block text-sm font-medium text-gray-700"
          >
            GitHub Frontend Link
          </label>
          <input
            type="url"
            id="githubFrontend"
            value={githubFrontend}
            onChange={(e) => setGithubFrontend(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter GitHub Frontend URL"
          />
        </div>

        {/* GitHub Backend Link */}
        <div>
          <label
            htmlFor="githubBackend"
            className="block text-sm font-medium text-gray-700"
          >
            GitHub Backend Link
          </label>
          <input
            type="url"
            id="githubBackend"
            value={githubBackend}
            onChange={(e) => setGithubBackend(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter GitHub Backend URL"
          />
        </div>

        {/* Live Link */}
        <div>
          <label
            htmlFor="liveLink"
            className="block text-sm font-medium text-gray-700"
          >
            Live Project Link
          </label>
          <input
            type="url"
            id="liveLink"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Live Project URL"
          />
        </div>

        {/* Video Link */}
        <div>
          <label
            htmlFor="videoLink"
            className="block text-sm font-medium text-gray-700"
          >
            Project Video Link
          </label>
          <input
            type="url"
            id="videoLink"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Project Video URL"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            }`}
            disabled={loading}
          >
            {loading ? "Adding Project..." : "Add Project"}
          </button>
        </div>
      </form>

      {/* Message */}
      {message && (
        <div
          className={`mt-4 p-2 text-center rounded ${
            message.includes("success")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AddProject;