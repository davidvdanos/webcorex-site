"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            WebCore<span className="text-accent">X</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#process" className="font-medium hover:text-primary transition-colors">
            Process
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="p-2 text-gray-600 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              Services
            </a>
            <a href="#about" className="font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              About
            </a>
            <a href="#process" className="font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              Process
            </a>
            <a href="#contact" className="btn btn-primary mt-2 text-center" onClick={toggleMenu}>
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 