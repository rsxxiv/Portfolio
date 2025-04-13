import React from "react";

import { FiBookOpen, FiAward, FiArrowRight } from "react-icons/fi";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0c1426]">
      {" "}
      {/* Education section background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
            <span className="block">Education & Certifications</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#fca311] mx-auto"></div>{" "}
          {/* Underline color */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Education */}
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-[#fca311] mb-6 flex items-center">
              <FiBookOpen className="w-6 h-6 mr-2" />
              Education
            </h3>

            <div className="space-y-6 flex-1">
              {[
                {
                  degree: "B.Tech in AI and Machine Learning",
                  school: "MITS Gwalior",
                  date: "2021 - 2025",
                  detail: "CGPA: 7.68/10.0",
                },
                {
                  degree: "Class 12th ISC Board",
                  school: "Christ Church School ISC, Jabalpur",
                  date: "2020",
                  detail: "Percentage: 91.4%",
                },
                {
                  degree: "Class 10th ISC Board",
                  school: "Christ Church School ISC, Jabalpur",
                  date: "2018",
                  detail: "Percentage: 80.8%",
                },
              ].map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-[#000000] bg-opacity-40 p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-50 hover:border-[#fca311] hover:border-opacity-70 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-[#ffffff] group-hover:text-[#fca311] transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-[#fca311] text-sm ">{edu.school}</p>
                    </div>
                    <div className="text-gray-400 text-sm flex-shrink-0 ml-4">
                      {edu.date}
                    </div>
                  </div>
                  <div className="mt-2 text-gray-400">{edu.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-[#fca311] mb-6 flex items-center">
              <FiAward className="w-6 h-6 mr-2" />
              Certifications
            </h3>

            <div className="space-y-6 flex-1">
              {[
                {
                  name: "Responsible & Safe AI Systems",
                  provider: "NPTEL Online Certification",
                  date: "Jul-Oct 2024",
                  link:"https://drive.google.com/file/d/1pJBe47Q3N4H5aK8i6i3AU-g3paGmXLKJ/view?usp=sharing",
                },
                {
                  name: "Python For Data Science",
                  provider: "NPTEL Online Certification",
                  date: "Jul-Aug 2023",
                  link:"https://drive.google.com/file/d/1VDAT7IJx06B8JY6k1LeNWubG9bxsWt3Z/view?usp=sharing",
                },
                {
                  name: "Cyber Security & Privacy",
                  provider: "NPTEL Online Certification",
                  date: "Jul-Oct 2023",
                  link:"https://drive.google.com/file/d/1rfbaYRB68DyZWUXl2x2J4LhvzO9vRJCK/view?usp=sharing",
                },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="bg-[#000000] bg-opacity-40 p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-50 group hover:border-[#fca311] hover:border-opacity-70 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-[#ffffff] group-hover:text-[#fca311] transition-colors">
                      {cert.name}
                    </h4>
                    <div className="text-gray-400 text-sm flex-shrink-0 ml-4">
                      {cert.date}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[#fca311] text-sm group-hover:text-white">{cert.provider}</p>
                    <button 
                     onClick={() => window.open(`${cert.link}`, "_blank")}
                    className="text-sm text-[#fca311] hover:border-amber-400 flex items-center">
                      <span>View Certificate</span>
                      <FiArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
