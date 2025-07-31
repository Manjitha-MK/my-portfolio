import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AdminEditprojectForm = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const project = location.state.project;

  useEffect(() => {
    if (!project) {
      toast.error("Error loading project");
      navigate("/admin/projects");
    }
  }, [project]);

  const [projectId, setProjectId] = useState(project.projectId);
  const [title, setTitle] = useState(project.projectName);
  const [description, setDescription] = useState(project.description);
  const [summary, setSummary] = useState(project.projectSummary);
  const [category, setCategory] = useState(project.category);
  const [technologies, setTechnologies] = useState(project.technologies || []);
  const [projectUrl, setProjectUrl] = useState(project.projectUrl);
  const [githubUrl, setGithubUrl] = useState(project.githubUrl);
  const [existingImages, setExistingImages] = useState(project?.Images || []);
  const [newImages, setNewImages] = useState([]);
  const [newTech, setNewTech] = useState("");
  const [isFeatured, setIsFeatured] = useState(project.isFeatured);

  const handleTechAdd = () => {
    const trimmed = newTech.trim();
    if (trimmed && !technologies.includes(trimmed)) {
      setTechnologies([...technologies, trimmed]);
      setNewTech("");
    }
  };

  const handleTechRemove = (tech) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectId", projectId);
    formData.append("projectName", title);
    formData.append("description", description);
    formData.append("Project Summary", summary);
    formData.append("category", category);
    formData.append("projectUrl", projectUrl);
    formData.append("githubUrl", githubUrl);
    formData.append("isFeatured", isFeatured ? "true" : "false");

    technologies.forEach((tech, index) => {
      formData.append(`technologies[${index}]`, tech);
    });
    formData.append("existingImages", JSON.stringify(existingImages));
    newImages.forEach((file) => {
      formData.append("newImages", file);
    });

    // Optional: send list of existing image file names
    existingImages.forEach((img, index) => {
      formData.append(`existingImages[${index}]`, img);
    });

    try {
      await axios.put(
        `http://localhost:5000/api/projects/${projectId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Project updated successfully!");
      navigate("/admin/projects");
    } catch (error) {
      toast.error("Failed to update project",error);
    }
  };
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Update Project
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Update project to portfolio
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
      >
        <div className="p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Project ID */}
              <div>
                <label
                  htmlFor="projectId"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Project ID
                </label>
                <input
                  type="text"
                  name="projectId"
                  id="projectId"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter project ID"
                />
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter project title"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Describe your project..."
                />
              </div>

              {/*Project summary */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Project Summary
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Describe your project..."
                />
              </div>

              {/* Technologies */}
              <div>
                <label
                  htmlFor="technologies"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Technologies
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    className="block w-full border border-gray-300 dark:border-gray-600 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Add a technology"
                  />
                  <button
                    type="button"
                    onClick={handleTechAdd}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleTechRemove(tech)}
                        className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800"
                      >
                        <span className="sr-only">Remove</span>
                        <svg
                          className="w-2 h-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>

              {/* Project URL */}
              <div>
                <label
                  htmlFor="projectUrl"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Project URL
                </label>
                <input
                  type="url"
                  name="projectUrl"
                  id="projectUrl"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="https://example.com"
                />
              </div>

              {/* GitHub URL */}
              <div>
                <label
                  htmlFor="githubUrl"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  GitHub URL
                </label>
                <input
                  type="url"
                  name="githubUrl"
                  id="githubUrl"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="https://github.com"
                />
              </div>
              {existingImages.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Existing Images
                  </label>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {existingImages.map((img, index) => (
                      <img
                        key={index}
                        src={`http://localhost:5000/uploads/${img}`} // adjust if necessary
                        alt="project"
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div>
                <label
                  htmlFor="images"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Upload New Images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-400"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                />
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Feature this project
                </label>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate("/admin/projects")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Update Project
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminEditprojectForm;
