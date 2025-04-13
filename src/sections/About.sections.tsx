import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0c1426]">
      {" "}
      {/* About section background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-5 mb-16">
          {" "}
          {/* Adjusted margin */}
          <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
            <span className="block">About Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#fca311] mx-auto"></div>{" "}
          {/* Underline color */}
        </div>

        <div className="md:flex md:items-center md:space-x-10">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden shadow-xl flex justify-center">
                {/* About image shadow */}
                <img
                  src="Aboutillustration.gif"
                  alt="About Rudraksh"
                  className="w-2/3 h-2/3 object-cover rounded-3xl shadow-lg shadow-black"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#fca311] mb-4">
              {" "}
              {/* Subheading color */}
              AI & Backend Developer
            </h3>
            <p className="text-[#e5e5e5] mb-4">
              B.Tech student in Artificial Intelligence and Machine Learning
              with experience in developing AI-driven applications, backend
              systems, and automation solutions. Passionate about building
              efficient, data-driven applications that solve real-world
              problems.
            </p>
            <p className="text-[#e5e5e5] mb-6">
              I specialize in integrating AI models with scalable architectures,
              optimizing system performance, and implementing web scraping
              solutions. My technical expertise includes Python, Django,
              Node.js, TypeScript, as well as RESTful API design.
            </p>
            {/* Removed the details grid and contact button as they were commented out */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
