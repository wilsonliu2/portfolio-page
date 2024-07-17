import React from "react";
import ProjectCard from "./ProjectCard";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import {
  SiD3Dotjs,
  SiLeaflet,
  SiMysql,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
} from "react-icons/si";

const colors = {
  css: "#1572B6",
  d3: "#F9A03C",
  html: "#E34C26",
  java: "#007396",
  javascript: "#F7DF1E",
  leaflet: "#199900",
  mysql: "#4479A1",
  react: "#61DAFB",
  springboot: "#6DB33F",
  springsecurity: "#6DB33F",
  tailwind: "#38B2AC",
};

const Projects = () => {
  const currentProject = {
    title: "Currently Working On: NYC Health Map v2",
    description:
      "An enhanced version of the health map of New York City, featuring a landing page and navigation to different boroughs. This is a research project with Professor Sheena Philogene.",
    link: "https://github.com/wilsonliu2/nyc-health-map-v2",
    icons: [
      { IconComponent: SiLeaflet, color: colors.leaflet },
      { IconComponent: SiD3Dotjs, color: colors.d3 },
      { IconComponent: IoLogoJavascript, color: colors.javascript },
      { IconComponent: FaHtml5, color: colors.html },
      { IconComponent: FaCss3Alt, color: colors.css },
    ],
  };

  const projects = [
    {
      title: "NYC Health Map",
      description:
        "A detailed health map of New York City, showcasing various health metrics and data points across different neighborhoods. This is a research project with Professor Sheena Philogene.",
      link: "https://github.com/wilsonliu2/nyc-health-map",
      icons: [
        { IconComponent: SiLeaflet, color: colors.leaflet },
        { IconComponent: SiD3Dotjs, color: colors.d3 },
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
    {
      title: "JWT Auth Fullstack",
      description: "A full-stack application with JWT authentication.",
      link: "https://github.com/wilsonliu2/jwt-auth-fullstack",
      icons: [
        { IconComponent: FaJava, color: colors.java },
        { IconComponent: SiSpringboot, color: colors.springboot },
        { IconComponent: SiSpringsecurity, color: colors.springsecurity },
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaReact, color: colors.react },
        { IconComponent: SiTailwindcss, color: colors.tailwind },
        { IconComponent: SiMysql, color: colors.mysql },
      ],
    },
    {
      title: "Fullstack Todo",
      description: "A full-stack todo application.",
      link: "https://github.com/wilsonliu2/fullstack-todo",
      icons: [
        { IconComponent: FaJava, color: colors.java },
        { IconComponent: SiSpringboot, color: colors.springboot },
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaReact, color: colors.react },
        { IconComponent: SiTailwindcss, color: colors.tailwind },
        { IconComponent: SiMysql, color: colors.mysql },
      ],
    },
    {
      title: "Tic Tac Toe",
      description: "A tic-tac-toe game.",
      link: "https://github.com/wilsonliu2/tic-tac-toe",
      icons: [
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
    {
      title: "Library",
      description: "A library management system.",
      link: "https://github.com/wilsonliu2/library",
      icons: [
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
    {
      title: "Dashboard",
      description: "A personal dashboard application.",
      link: "https://github.com/wilsonliu2/dashboard",
      icons: [
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
  ];

  return (
    <section className="container mx-auto p-8" id="projects">
      <div className="flex items-end space-x-2 mb-2">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-gray-500">(Updated as of 7/16/2024)</p>
      </div>
      <div className="mb-8">
        <ProjectCard {...currentProject} />
      </div>
      <p className="text-lg mb-4">Projects (from most recent to oldest):</p>
      <div className="flex overflow-x-auto space-x-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
