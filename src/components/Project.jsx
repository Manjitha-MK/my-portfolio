import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/featured")
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[35px] text-center font-serif tracking-[0.1em]">
          PROJECTS
        </h2>
        <div className="w-10 h-1 bg-purple-600 mx-auto mt-2 mb-10 rounded"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              to={`/projectInfo/${project.projectId}`}
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-2xl hover:border-l-red-900 hover:border-b-red-900 transition border-l-2 border-b-2"
            >
              {/* Show image if available */}
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

              <h3 className="text-xl font-semibold tracking-[0.1em] mb-2">
                {project.projectName}
              </h3>
              <p className="text-sm text-gray-600">{project.description}</p>

              {/* Optional buttons or links */}
              <div className="mt-4">
                <span href="#" className="text-indigo-600 hover:underline mr-4">
                  Demo
                </span>
                <span href="#" className="text-gray-600 hover:underline">
                  Code
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to={`/allprojects`}
          className="relative sm:left-[100px] md:left-[300px] lg:left-[650px] xl:left-[950px] top-10 bg-white text-black border-2 border-black no-underline 
          text-[14px] animate-pulse tracking-[0.1em] rounded-3xl px-[30px] py-[10px] transition-all duration-500 hover:text-red-900 hover:border-red-900 shadow hover:shadow-2xl"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
