"use client"; // Assuming Next.js App Router

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ecellLogo from "../assets/logo.png";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "ABOUT US", id: "about-us" },
  { name: "WHY REGISTER?", id: "why-register" },
  { name: "GALLERY", id: "gallery" },
  { name: "CONTACT US", id: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      // UPDATED: Made initial background transparent for a more impactful scroll effect
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-black/80 backdrop-blur-lg shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="cursor-pointer flex items-center" onClick={() => scrollToSection("home")}>
          <img src={ecellLogo} alt="E-Cell Logo" className="h-22 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              // UPDATED: Added accessible focus ring and removed default outline
              className="relative font-medium hover:text-yellow-400 transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection("register")}
            // UPDATED: Added accessible focus ring and removed default outline
            className="ml-6 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-yellow-400/50 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            REGISTER
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          // UPDATED: Added accessible focus ring and removed default outline
          className="lg:hidden text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        // UPDATED: Replaced simple fade with a smoother slide-down and fade transition
        className={`lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-semibold hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("register")}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;