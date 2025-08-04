import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch project");
        console.error(err);
      });
  }, [projectId]);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        }
      }
    ]
  };

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {project.projectName}
          </h1>
          
          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Source Code
            </a>
          </div>
        </div>
        
        {/* Image Slider */}
        <div className="border-t border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/50 p-4">
          <Slider {...sliderSettings} className="rounded-xl overflow-hidden shadow-lg">
            {project.Images.map((imgFileName, index) => (
              <div key={index} className="outline-none focus:outline-none">
                <div className="aspect-w-12 aspect-h-9 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={`http://localhost:5000/uploads/${encodeURIComponent(imgFileName)}`}
                    alt={`Project screenshot ${index + 1}`}
                    className="w-fit h-fit object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Project Summary */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.projectSummary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;