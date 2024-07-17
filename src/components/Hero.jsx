import React from "react";
import dog from "../assets/dog.jpg";
import background from "../assets/background.png";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-95"></div>
      <div className="relative text-white h-full w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src={dog}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Wilson Liu</h1>
            <p className="text-xl mb-8">
              Computer Science student at Brooklyn College.
            </p>
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-full text-lg transition duration-300"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
