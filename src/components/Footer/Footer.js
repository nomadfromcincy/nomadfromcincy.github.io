import React from 'react';
import placeholder from '../../assets/temp.png'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-4 border-primary mt-auto px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">
          © 2025 Damon Levy · Thyone Consulting
        </p>
        <img
          src={placeholder}
          alt="Logo"
          className="w-12 h-12 mt-4 sm:mt-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
