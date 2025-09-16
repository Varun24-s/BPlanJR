import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const team = [
  // Team data remains the same...
  { name: "jojo", role: "Competition Head", email: "ravi@ecellmanit.ac.in", linkedin: "...", instagram: "...", img: "https://picsum.photos/400?random=1" },
  { name: "john doe", role: "Operations Lead", email: "ananya@ecellmanit.ac.in", linkedin: "...", instagram: "...", img: "https://picsum.photos/400?random=2" },
  { name: "aqua", role: "Mentorship Coordinator", email: "karan@ecellmanit.ac.in", linkedin: "...", instagram: "...", img: "https://picsum.photos/400?random=3" },
  { name: "river", role: "Sponsorship Head", email: "neha@ecellmanit.ac.in", linkedin: "...", instagram: "...", img: "https://picsum.photos/400?random=4" },
  { name: "xoxo", role: "Media & PR Lead", email: "arjun@ecellmanit.ac.in", linkedin: "...", instagram: "...", img: "https://picsum.photos/400?random=5" },
];

const TeamCard = ({ member }) => {
  // TeamCard component logic remains the same
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`relative bg-white/10 backdrop-blur-lg border border-yellow-500/20 rounded-2xl shadow-lg shadow-yellow-500/10 transition-all duration-500 overflow-hidden cursor-pointer w-full max-w-xs ${expanded ? "scale-105" : "hover:scale-105"}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className={`transition-all duration-500 ${expanded ? "absolute inset-0 w-full h-full" : "w-24 h-24 mx-auto mt-6 rounded-full border-2 border-yellow-400 shadow-md overflow-hidden"}`}>
        <img src={member.img} alt={member.name} className={`object-cover transition-all duration-500 ${expanded ? "w-full h-full rounded-none" : "w-full h-full rounded-full"}`} />
      </div>
      {!expanded && (
        <div className="p-6 text-center mt-4">
          <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{member.role}</p>
          <div className="flex justify-center gap-4 mt-6">
            <a href={member.linkedin} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Linkedin className="text-gray-300 hover:text-yellow-400 transition-colors" />
            </a>
            <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Mail className="text-gray-300 hover:text-yellow-400 transition-colors" />
            </a>
            <a href={member.instagram} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <FaInstagram className="text-gray-300 hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactUs = () => (
  // UPDATED: Background is now transparent
  <section id="contact" className="py-20 bg-transparent">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-glow">
          Meet the Core Team
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactUs;