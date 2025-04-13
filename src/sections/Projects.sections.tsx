import React from "react";

import { FiGithub } from "react-icons/fi";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#000000]">
      {" "}
      {/* Projects section background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
            <span className="block">Recent Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#fca311] mx-auto"></div>{" "}
          {/* Underline color */}
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Template */}
          {[
            {
              title: "Profiles REST-API",
              desc: "Designed and implemented RESTful APIs for user profile management using Django REST Framework.",
              tags: ["Django", "REST", "Python", "JWT", "PostgreSQL"],
              img: "/project1.png",
              link: "https://github.com/rsxxiv/profiles-rest-API",
            },
            {
              title: "PreSense-AI",
              desc: "Real-time face recognition system utilizing webcam with pre-trained CNN model for high accuracy.",
              tags: ["OpenCV", "CNN", "Python", "Firebase"],
              img: "/project2.png",
              link: "https://github.com/rsxxiv/PreSense-AI",
            },
            {
              title: "MyMovieRecommender",
              desc: "Content-based movie recommendation engine that analyzes movie attributes to suggest similar titles.",
              tags: ["Python", "ML", "Pandas", "Recoomendation Systems"],
              img: "/project3.png",
              link: "https://github.com/rsxxiv/MyMovieRecommender",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group bg-[#0c1426] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#fca311]/10 border border-[#0c1426] border-opacity-50 hover:border-[#fca311] hover:border-opacity-70"
            >
              {" "}
              {/* Card colors and hover */}
              <div className="h-48 bg-[#000000] bg-opacity-30 relative overflow-hidden">
                {" "}
                {/* Image background */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200" // Image opacity
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1426] to-transparent opacity-70"></div>{" "}
                {/* Image overlay */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#fca311]">
                  {" "}
                  {/* Title color */}
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm h-16 overflow-hidden">
                  {project.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#000000] bg-opacity-40 text-[#fca311] rounded text-xs"
                    >
                      {" "}
                      {/* Tag colors */}
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4 justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-2 bg-transparent hover:bg-[#000000] hover:bg-opacity-30 text-[#fca311] border border-[#fca311] text-sm rounded-md flex items-center space-x-2" // Code button colors
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/rsxxiv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#fca311] hover:opacity-90 text-[#000000] font-medium inline-flex items-center space-x-2" // View More button colors
          >
            <FiGithub className="h-5 w-5" />
            <span>View More on Github</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
