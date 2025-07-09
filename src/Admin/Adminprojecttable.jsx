import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [projetsLoad, setProjectLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log(res.data.projects);
        setProjects(res.data.projects);
        setProjectLoad(true);
      })
      .catch((err) => {
        console.log("Error fetching projects", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [projetsLoad]);

  const handleEdit = (project) => {
    navigate(`/admin/projects/editProject/${project.projectId}`,{
      state : { project },
    });
     
  };

  const handleDelete = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      axios
        .delete(`http://localhost:5000/api/projects/${projectId}`)
        .then((res) => {
          console.log();
          toast.success("Project deleted..");
          setProjectLoad((prev) => !prev);
        })
        .catch((err) => {
          toast.error("Failed to delete Project");
          console.error(err);
        });
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <Link
        to={"/admin/projects/addprojects"}
        className="absolute right-[5px] bottom-[60px]"
      >
        <PlusIcon className="h-[40px] w-[40px] bg-amber-100 rounded-full text-green-500" />
      </Link>
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
                <td className="px-4 py-3 border font-medium">
                  {project.projectName}
                </td>
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
                      onClick={() => handleEdit(project)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                      title="Edit"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.projectId)}
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
    </div>
  );
};

export default ProjectTable;
