// src/components/AllProjects.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data.projects))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            to={`/projectInfo/${project.projectId}`}
            key={project.projectId}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
          >
            <div className="relative">
              {project.Images && project.Images.length > 0 && (
                <img
                  src={`http://localhost:5000/${
                    project.Images[0].startsWith("uploads/")
                      ? project.Images[0]
                      : `uploads/${project.Images[0]}`
                  }`}
                  alt={project.projectName}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              {project.isFeatured && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs text-black px-2 py-1 rounded-full font-bold">
                  Featured
                </span>
              )}
            </div>

            <div className="p-4 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.projectName}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {project.projectSummary}
              </p>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-between items-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
