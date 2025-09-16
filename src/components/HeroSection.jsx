"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight transition-all duration-700 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* UPDATED: Added the animation class to the gradient text */}
          <span className="bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 bg-clip-text text-transparent animate-text-gradient">
            Forge Your Legacy
          </span>
        </h1>
        <p
          className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl transition-all duration-700 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Join Central India’s largest Business Plan Junior Competition. A chance to bring your innovative ideas to light and vision into successful business ventures.
        </p>
        <button
          onClick={() => scrollTo("register")}
          className={`group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 ease-out flex items-center gap-2 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Register Now
          <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;