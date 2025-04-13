import React from "react";

import { FiBriefcase } from "react-icons/fi";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#000000]">
      {" "}
      {/* Experience section background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
            <span className="block">Work Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#fca311] mx-auto"></div>{" "}
          {/* Underline color */}
        </div>

        <div className="relative before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-[#0c1426] before:bg-opacity-70 md:before:left-1/2 md:before:-translate-x-1/2">
          {/* Timeline Entry: Baari Labs */}
          <div className="relative md:flex items-center md:justify-between mb-12 group">
            <div className="md:w-1/2 md:pr-8 flex md:justify-end items-center mb-4 md:mb-0 space-x-4">
              <div className="text-gray-400 text-right">
                January 2025 - Present
              </div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#0c1426] rounded-full shadow-md">
                <FiBriefcase className="w-5 h-5 text-[#fca311]" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-[#0c1426] p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-60 group-hover:border-[#fca311] group-hover:shadow-[#fca311]/10 transition-all">
                <h3 className="text-xl font-bold text-[#fca311]">
                  AI & Backend Developer Intern
                </h3>
                <p className="text-[#e5e5e5] mb-4">Baari Labs</p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      Built a Django-based document verification application
                      using Pinecone vector DB, OpenAI, Gemini and Tailwind,
                      reducing document validation time by 10x.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      Developed an AI-powered chatbot with a
                      Node.js/Express/TypeScript backend and React frontend,
                      optimizing document data retrieval.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      Implemented web scraping solutions using Selenium,
                      Beautiful Soup, and MongoDB to automate data collection.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Entry: HighScores.AI */}
          <div className="relative md:flex items-center md:justify-between group">
            <div className="md:w-1/2 md:pl-8 md:order-2 flex md:justify-start items-center mb-4 md:mb-0 space-x-4">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#0c1426] rounded-full shadow-md">
                <FiBriefcase className="w-5 h-5 text-[#fca311]" />
              </div>
              <div className="text-gray-400 text-left">
                January 2024 - September 2024
              </div>
            </div>
            <div className="md:w-1/2 md:pr-8 md:order-1">
              <div className="bg-[#0c1426] p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-60 group-hover:border-[#fca311] group-hover:shadow-[#fca311]/10 transition-all">
                <h3 className="text-xl font-bold text-[#fca311]">
                  Content Design and Lead Intern
                </h3>
                <p className="text-[#e5e5e5] mb-4">HighScores.AI</p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      Led a remote team of 10+ interns, creating and reviewing
                      100+ SAT/ACT assessments.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      Managed 10+ content projects in a non-technical
                      environment using Agile methodology and Jira.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      Designed 50+ digital assets, including educational
                      graphics and marketing materials.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
