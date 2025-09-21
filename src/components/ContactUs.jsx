import { useState } from "react";
import { Mail, Linkedin,  Instagram } from "lucide-react"; // replaced Phone with MessageCircle
import { FaWhatsapp } from "react-icons/fa"; 
import HarshSir from "../assets/Harsh malik sir.jpg";
import GurleenMam from "../assets/GurleenMa'am.jpg";
import SannidhiyaSir from "../assets/SannidhyaSir.jpg";
import AshokSir from "../assets/abhinavAshok.jpeg";

const team = [
  { name: "Sannidhya Srivastava", role: "Strategic Lead", email: "sannidhya123567@gmail.com", whatsapp: "+917607476106", linkedin: "https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/", img: SannidhiyaSir },
  { name: "Harsh Malik", role: "Public Relations Lead", email: "harshmalik96433@gmail.com", whatsapp: "+918770377416", linkedin: "https://www.linkedin.com/in/harsh13malik/", img: HarshSir },
  { name: "Gurleen Kaur Bhatia", role: "Public Relations Secretary", email: "gurleenbhatia211359@gmail.com", whatsapp: "+919009027777", linkedin: "https://www.linkedin.com/in/gurleen-kaur-bhatia-8613a2290/", img: GurleenMam },
  { name: "Abhinav Ashok", role: "Operations Lead", email: "", whatsapp: "+919771747257", linkedin: "", img: AshokSir },
];

const TeamCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const iconClass = "text-gray-300 hover:text-yellow-400 transition-colors w-6 h-6";

  return (
    <div
      className={`relative bg-white/10 backdrop-blur-lg border border-yellow-500/20 rounded-2xl shadow-lg shadow-yellow-500/10 transition-all duration-500 overflow-hidden cursor-pointer w-full max-w-xs ${expanded ? "scale-105" : "hover:scale-105"}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className={`transition-all duration-500 flex justify-center ${expanded ? "absolute inset-0 w-full h-full" : ""}`}>
        <div className={`transition-all duration-500 ${expanded ? "w-full h-full" : "w-24 h-24 mt-6 rounded-full border-2 border-yellow-400 shadow-md overflow-hidden"}`}>
          <img src={member.img} alt={member.name} className={`object-cover w-full h-full transition-all duration-500 ${expanded ? "rounded-none" : "rounded-full"}`} />
        </div>
      </div>
      {!expanded && (
        <div className="p-6 text-center space-y-3 mt-4">
          <h3 className="text-l font-bold text-yellow-400">{member.name}</h3>
          <p className="text-gray-300 text-sm">{member.role}</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href={member.linkedin} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Linkedin className={iconClass} />
            </a>
            <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <Mail className={iconClass} />
            </a>
            <a href={`https://wa.me/${member.whatsapp.replace("+", "")}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              <FaWhatsapp className={iconClass} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactUs = () => (
  <section id="contact" className="py-20 bg-transparent">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-glow">
          Contact Us
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactUs;
