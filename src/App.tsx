import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero.sections";
import About from "./sections/About.sections";
import Experience from "./sections/Experiance.sections";
import Skills from "./sections/Skills.sections";
import Projects from "./sections/Projects.sections";
import Education from "./sections/Education.sections";
import Contact from "./sections/Contact.sections";
import Footer from "./components/Footer";

// Removed ParticleBg import as it wasn't used in the provided code.
// If you intended to use it, please re-add the import and the component usage.

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }

      if (current !== "" && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="bg-[#000000] text-[#e5e5e5] min-h-screen font-sans">
      {/* Base background and text */} 
      
      {/* Navigation */}
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Education Section */}
      <Education />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
}
