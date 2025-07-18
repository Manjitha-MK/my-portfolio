import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectOverview = () => {
  const { id: projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/" + projectId)
      .then((res) => {
        if (res.data == null) {
          toast.error("Project not found");
        } else {
          setProject(res.data.project);
          console.log(res.data)
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch project");
        console.error(err);
      });
  }, [projectId]);

  // 👉 Optional loading state
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-red-500 h-full w-full p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{project.projectName}</h1>
      <p className="mb-4">{project.description}</p>
      <p className="mb-2"><strong>Category:</strong> {project.category}</p>
      <p className="mb-2">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      <div className="mt-4">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline mr-4"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline"
        >
          Source Code
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.Images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-auto rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
