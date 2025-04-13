import React from "react";

import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#000000] relative">
      {" "}
      {/* Contact section background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>{" "}
      {/* Grid pattern opacity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
            <span className="block">Get In Touch</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#fca311] mx-auto"></div>{" "}
          {/* Underline color */}
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#0c1426] p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-60">
              {" "}
              {/* Info card background and border */}
              <h3 className="text-xl font-bold text-[#fca311] mb-6">
                {" "}
                {/* Title color */}
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Contact Item Template */}
                {[
                  {
                    icon: FiMail,
                    label: "Email",
                    value: "rudrakshsaraf24@gmail.com",
                    href: "mailto:rudrakshsaraf24@gmail.com",
                  },
                  {
                    icon: FiGithub,
                    label: "Github",
                    value: "github.com/rsxxiv",
                    href: "https://github.com/rsxxiv",
                  },
                  {
                    icon: FiLinkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/rudrakshsaraf",
                    href: "https://linkedin.com/in/rudrakshsaraf",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#000000] bg-opacity-40 flex items-center justify-center">
                      {" "}
                      {/* Icon background */}
                      <item.icon className="h-5 w-5 text-[#fca311]" />{" "}
                      {/* Icon color */}
                    </div>
                    <div>
                      <p className="text-gray-400">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.label !== "Email" ? "_blank" : undefined}
                        rel={
                          item.label !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[#ffffff] hover:text-[#fca311] break-all" // Link color and hover
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0c1426] bg-opacity-70 p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-60">
              {" "}
              {/* CTA card background and border */}
              <h3 className="text-lg font-bold text-[#ffffff] mb-2">
                Ready to work together?
              </h3>
              <p className="text-[#e5e5e5]">Let's build something amazing!</p>
              <a
                href="mailto:rudrakshsaraf24@gmail.com"
                className="mt-4 px-6 py-2 rounded-full bg-[#fca311] hover:opacity-90 text-[#000000] font-medium inline-flex items-center space-x-2" // Hire Me button colors
              >
                <span>Hire Me</span>
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-[#0c1426] p-6 rounded-lg shadow-lg border border-[#0c1426] border-opacity-60">
            {" "}
            {/* Form card background and border */}
            <h3 className="text-xl font-bold text-[#fca311] mb-6">
              {" "}
              {/* Title color */}
              Send Me a Message
            </h3>
            <form
              className="space-y-4"
              target="_blank"
              action={import.meta.env.VITE_FORMSUBMIT} // Keep your formsubmit endpoint
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-[#000000] bg-opacity-50 border border-[#0c1426] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent text-[#ffffff] placeholder-gray-500" // Input field colors
                    placeholder="Mr Awesome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-[#000000] bg-opacity-50 border border-[#0c1426] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent text-[#ffffff] placeholder-gray-500" // Input field colors
                    placeholder="MrAwesome@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-[#000000] bg-opacity-50 border border-[#0c1426] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent text-[#ffffff] placeholder-gray-500" // Input field colors
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#000000] bg-opacity-50 border border-[#0c1426] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent text-[#ffffff] placeholder-gray-500" // Textarea colors
                  placeholder="I would like to work with you..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md bg-[#fca311] text-[#fca311] font-medium" // Submit button colors
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
