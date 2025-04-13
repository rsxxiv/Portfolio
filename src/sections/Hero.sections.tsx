import React from "react";

import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
} from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full pt-16 relative min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#000000] to-[#0c1426] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/4 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-[#fca311] mt-1">Rudraksh Saraf</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl text-[#e5e5e5]">
              AI & Backend Developer
            </p>
            <p className="mt-5 text-gray-400 max-w-md">
              Building AI-driven applications and scalable backend systems with
              a focus on efficiency and innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#fca311] hover:opacity-90 text-[#000000] font-medium flex items-center space-x-2"
              >
                <span>Contact Me</span>
                <FiArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-transparent hover:bg-[#0c1426] hover:bg-opacity-50 text-[#fca311] border border-[#fca311] font-medium"
              >
                View Projects
              </a>
            </div>
            <div className="mt-8 flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/rsxxiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fca311]"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/rudrakshsaraf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fca311]"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:rudrakshsaraf24@gmail.com"
                className="text-gray-400 hover:text-[#fca311]"
              >
                <FiMail className="h-6 w-6" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fca311]"
              >
                <FiFileText className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-[#0c1426] rounded-lg backdrop-blur-md border-3 border-[#fca311] border-opacity-50"></div>
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-[#fca311] to-[#e5e5e5] shadow-2xl shadow-[#fca311]/20 flex items-center justify-center">
                  <img
                    src="profile-pic2.png"
                    alt="Rudraksh Saraf"
                    className="h-56 w-56 object-cover rounded-full shadow-lg shadow-[#0c1426]/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="animate-bounce mt-2 w-1 h-2 bg-[#fca311] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
