import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = Number(target);
          const stepAmount = Math.max(1, Math.ceil(end / 60));
          const step = () => {
            start += stepAmount;
            if (start < end) {
              setCount(start);
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center bg-black/40 p-8 rounded-lg border border-yellow-500/10 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
      <div className="text-4xl font-bold text-yellow-400 mb-2">{count}+</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const MetricsSection = () => (
  <section id="metrics" className="py-20 bg-black">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          Our Impact in Numbers
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Counter target={130} label="Participants" />
        <Counter target={50} label="Colleges" />
        <Counter target={30} label="Mentors" />
        <Counter target={25} label="Startups Launched" />
      </div>
    </div>
  </section>
);

export default MetricsSection;
