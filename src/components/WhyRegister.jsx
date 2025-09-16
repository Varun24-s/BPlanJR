import React from "react";

const WhyRegister = () => {
  const items = [
    
    { title: "Certificate", desc: "Receive a certificate of participation." },
    { title: "Skill Building", desc: "Build professional and business acumen." },
    { title: "Communication", desc: "An opportunity to improve communication and problem-solving skills." },
    { title: "Resume Booster", desc: "Strengthen your resume with the experience." },
    { title: "Investor Access", desc: "Network with VCs, investors, and founders during E-Summit '26." },
    { title: "Competition", desc: "Compete for the Main Stage prize presented by the Chief Guest." },
    { title: "Pitching Experience", desc: "Gain a real pitching experience in front of industry leaders." },
  ];

  return (
    <section id="why-register" className="py-20 bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-glow">
            Why Should You Register?
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {items.map((item) => (
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
};

export default WhyRegister;
