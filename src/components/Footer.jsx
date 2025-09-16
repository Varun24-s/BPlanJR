import React from "react";
import { Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-6 bg-transparent border-t border-yellow-500/10 text-center text-sm">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-6">
      
      {/* Email Section */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Mail className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors duration-300" />
        <a 
          href="mailto:contact@ecellnitb.in" 
          className="text-white group-hover:text-yellow-400 transition-colors duration-300"
        >
          contact@ecellnitb.in
        </a>
      </div>
      
      {/* Location Section */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <MapPin className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors duration-300" />
        <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">
          Maulana Azad National Institute of Technology, Bhopal
        </span>
      </div>
    </div>

    <div className="mt-4 text-gray-400">
      © {new Date().getFullYear()} E-Cell MANIT | All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
