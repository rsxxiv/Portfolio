import React from "react";

import { FiCode, FiBookOpen, FiAward } from "react-icons/fi";

const Skills: React.FC = () => {
  return (
          <section id="skills" className="py-20 bg-[#0c1426]">
            {" "}
            {/* Skills section background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
                  <span className="block">Technical Skills</span>
                </h2>
                <div className="mt-2 h-1 w-20 bg-[#fca311] mx-auto"></div>{" "}
                {/* Underline color */}
              </div>
    
              <div className="flex flex-col md:flex-row gap-8">
                {/* Technical Skills */}
                <div className="flex-1 flex flex-col justify-between  bg-[#000000] bg-opacity-40 p-6 rounded-lg shadow-xl border border-[#0c1426] border-opacity-50">
                  {" "}
                  {/* Card background and border */}
                  <h3 className="text-xl font-bold text-[#fca311] mb-4 flex items-center">
                    {" "}
                    {/* Title color */}
                    <FiCode className="w-5 h-5 mr-2" />
                    Programming & Development
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      "Python",
                      "Django",
                      "REST APIs",
                      "Node.js",
                      "TypeScript",
                      "MongoDB",
                      "PostgreSQL",
                      "VectorDB",
                      "Pinecone",
                      "Postman",
                      "Agile (Jira)",
                      "StreamLit",
                      "Numpy",
                      "Pandas",
                      "Matplotlib",
                      "Sklearn",
                      "CNN",
                      "Arduino",
                      "HTML",
                      "CSS",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#fca311] rounded-full flex-shrink-0"></div>{" "}
                        {/* Bullet point color */}
                        <span className="text-[#e5e5e5] break-words">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Visual & Soft Skills */}
                <div className="flex-1 flex flex-col justify-between space-y-8">
                  <div className="bg-[#000000] bg-opacity-40 p-6 rounded-lg shadow-xl border border-[#0c1426] border-opacity-50">
                    {" "}
                    {/* Card background and border */}
                    <h3 className="text-xl font-bold text-[#fca311] mb-4 flex items-center">
                      {" "}
                      {/* Title color */}
                      <FiBookOpen className="w-5 h-5 mr-2" />
                      Graphic Design
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Logos", "Posters", "Banners", "Flyers", "Mock-ups"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-[#0c1426] bg-opacity-70 text-white rounded-full text-sm" // Tag colors
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
    
                  <div className="bg-[#000000] bg-opacity-40 p-6 rounded-lg shadow-xl border border-[#0c1426] border-opacity-50">
                    {" "}
                    {/* Card background and border */}
                    <h3 className="text-xl font-bold text-[#fca311] mb-4 flex items-center">
                      {" "}
                      {/* Title color */}
                      <FiAward className="w-5 h-5 mr-2" />
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Teamwork",
                        "Problem Solving",
                        "Critical Thinking",
                        "Leadership",
                        "Team Management",
                        "Communications",
                        "Public Speaking",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#0c1426] bg-opacity-70 text-white rounded-full text-sm" // Tag colors
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Skill Bars - Visual representation */}
              <div className="mt-12 bg-[#000000] bg-opacity-40 p-6 rounded-lg shadow-xl border border-[#0c1426] border-opacity-50">
                {" "}
                {/* Card background and border */}
                <h3 className="text-xl font-bold text-[#fca311] mb-6">
                  {" "}
                  {/* Title color */}
                  Key Competencies
                </h3>
                <div className="space-y-6">
                  {[
                    { name: "Backend Development", percentage: 90 },
                    { name: "AI & Machine Learning", percentage: 85 },
                    { name: "Database Management", percentage: 80 },
                    { name: "API Development", percentage: 90 },
                    { name: "Web Scraping & Automation", percentage: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#e5e5e5]">{skill.name}</span>
                        <span className="text-orange-400">
                          {skill.percentage}%
                        </span>{" "}
                        {/* Percentage color */}
                      </div>
                      <div className="w-full h-2 bg-[#0c1426] rounded-full overflow-hidden">
                        {" "}
                        {/* Bar background */}
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  );
};

export default Skills;