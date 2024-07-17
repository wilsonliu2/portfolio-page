import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Wilson Liu. Thanks for visiting!</p>
    </footer>
  );
};

export default Footer;
