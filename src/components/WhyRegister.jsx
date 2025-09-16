import React from "react";

const WhyRegister = () => (
  // UPDATED: Background is now transparent
  <section id="why-register" className="py-20 bg-transparent w-full">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-glow">
          Why Should You Register?
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Big Rewards", desc: "Win cash prizes and seed funding opportunities." },
          { title: "Mentorship", desc: "Guidance from top industry experts and founders." },
          { title: "Networking", desc: "Meet investors, mentors, and like-minded peers." },
          { title: "Exposure", desc: "Showcase your ideas to the world." },
        ].map((item) => (
          // UPDATED: Cards now have a consistent "glassmorphism" style
          <div
            key={item.title}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 w-full"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyRegister;