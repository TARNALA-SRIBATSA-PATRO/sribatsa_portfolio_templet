import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/your-username/ecommerce-platform",
      live: "https://your-ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "placeholder.svg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/your-username/task-manager",
      live: "https://your-task-manager.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful animations.",
      image: "placeholder.svg",
      technologies: ["React", "TypeScript", "API Integration", "CSS3"],
      github: "https://github.com/your-username/weather-dashboard",
      live: "https://your-weather-app.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode, and contact form integration.",
      image: "placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.vercel.app",
    },
    {
      title: "Blog Platform",
      description:
        "A full-featured blog platform with markdown support, user authentication, and admin dashboard for content management.",
      image: "placeholder.svg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      github: "https://github.com/your-username/blog-platform",
      live: "https://your-blog.vercel.app",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with user authentication, message history, and file sharing capabilities using WebSocket technology.",
      image: "placeholder.svg",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/your-username/chat-app",
      live: "https://your-chat-app.vercel.app",
    },
  ];

  const extraPlaceholders = [
    {
      title: "Recipe Finder",
      description: "A recipe discovery app that helps users find recipes based on available ingredients. Features include recipe search, filtering, and favorite recipes.",
      image: "placeholder.svg",
      technologies: ["React", "TypeScript", "Spoonacular API", "CSS3"],
      github: "https://github.com/your-username/recipe-finder",
      live: "https://your-recipe-app.vercel.app",
    },
    {
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout planning, progress tracking, and nutrition logging features.",
      image: "placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      github: "https://github.com/your-username/fitness-tracker",
      live: "https://your-fitness-app.vercel.app",
    },
  ];

  const displayedProjects = showMore ? [...projects, ...extraPlaceholders] : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that demonstrate my skills in full-stack development, 
            problem-solving, and creative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      {project.live.includes("README.md") ? "Readme" : "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
