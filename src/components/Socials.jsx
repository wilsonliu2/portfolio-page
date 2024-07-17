import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
      <div className="flex space-x-8">
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-blue-500" size={24} />
          <a
            href="https://www.linkedin.com/in/wilson-liu-780255237/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub className="text-gray-900" size={24} />
          <a
            href="https://github.com/wilsonliu2"
            className="text-gray-900 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
