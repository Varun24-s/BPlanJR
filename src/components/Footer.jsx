import React from "react";

const Footer = () => (
  // UPDATED: Background is now transparent to blend with the main page background
  <footer className="py-6 bg-transparent border-t border-yellow-500/10 text-center text-gray-400 text-sm">
    © {new Date().getFullYear()} E-Cell MANIT | All Rights Reserved.
  </footer>
);

export default Footer;