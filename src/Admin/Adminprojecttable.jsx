
import React, {  useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log(res.data.projects);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log("Error fetching projects", err);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            <th className="px-4 py-3 border">Project ID</th>
            <th className="px-4 py-3 border">Project Title</th>
            <th className="px-4 py-3 border">Description</th>
            <th className="px-4 py-3 border">Technologies</th>
            <th className="px-4 py-3 border">Project URL</th>
            <th className="px-4 py-3 border">GitHub URL</th>
            <th className="px-4 py-3 border">Category</th>
            <th className="px-4 py-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={project.projectId}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-colors`}
            >
              <td className="px-4 py-3 border">{project.projectId}</td>
              <td className="px-4 py-3 border font-medium">{project.projectName}</td>
              <td className="px-4 py-3 border">{project.description}</td>
              <td className="px-4 py-3 border">
                {(project.technologies || []).join(", ")}
              </td>
              <td className="px-4 py-3 border">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Live Site
                </a>
              </td>
              <td className="px-4 py-3 border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  GitHub
                </a>
              </td>
              <td className="px-4 py-3 border">{project.category}</td>
              <td className="px-4 py-3 border text-center">
                <div className="flex justify-center items-center gap-2 ">
                  <button
                    
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    title="Edit"
                  >
                    <PencilSquareIcon className="h-5 w-5" />
                  </button>
                  <button
                    
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    title="Delete"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
