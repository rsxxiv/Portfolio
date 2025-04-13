import React, { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#000000] bg-opacity-90 backdrop-blur-sm border-b ]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-[#fca311] font-bold text-xl">
                Rudraksh<span className="text-white"> Saraf</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-[#fca311] text-[#000000]"
                      : "text-[#e5e5e5] hover:bg-[#0c1426] hover:bg-opacity-70 hover:text-[#fca311]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-[#0c1426] bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md text-[#fca311] hover:text-white hover:bg-[#0c1426] focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#000000] bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.toLowerCase()
                    ? "bg-[#fca311] text-[#000000]"
                    : "text-[#e5e5e5] hover:bg-[#0c1426] hover:bg-opacity-70 hover:text-[#fca311]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
