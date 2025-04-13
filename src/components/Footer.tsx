import React from "react";

import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c1426] border-t border-[#0c1426]">
      {" "}
      {/* Footer background and border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {" "}
        {/* Adjusted padding */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/rsxxiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#fca311]" // Footer icon hover
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/rudrakshsaraf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#fca311]" // Footer icon hover
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:rudrakshsaraf24@gmail.com"
              className="text-gray-400 hover:text-[#fca311]" // Footer icon hover
            >
              <FiMail className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Rudraksh Saraf. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
