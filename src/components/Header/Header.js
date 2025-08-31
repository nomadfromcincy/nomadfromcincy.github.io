import React, { useState } from 'react';
import { FaLinkedin, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import placeholder from '../../assets/temp.png';
import example_cv from '../../assets/example_cv.pdf';
import logo from '../../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#clients' },
    { label: 'Why Me', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-blue-700 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/damonlevy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            {/* CV Download Button */}
            {/* <a
              href={example_cv}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 hover:bg-yellow-500 text-blue-700 px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-200 font-medium"
            >
              <FaDownload className="w-4 h-4" />
              <span className="hidden sm:inline">CV</span>
            </a> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-blue-700 hover:text-yellow-300 p-2"
            >
              {menuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-blue-700 hover:text-yellow-300 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;