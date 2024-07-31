import React, { useState } from "react";
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
  const [showAllProjects, setShowAllProjects] = useState(false);

  const currentProject = {
    title: "Real-time Chat App",
    description: "Work in progress",
    link: "https://github.com/wilsonliu2/",
    icons: [
      { IconComponent: FaJava, color: colors.java },
      { IconComponent: SiSpringboot, color: colors.springboot },
      { IconComponent: SiSpringsecurity, color: colors.springsecurity },
      { IconComponent: IoLogoJavascript, color: colors.javascript },
      { IconComponent: FaReact, color: colors.react },
      { IconComponent: SiTailwindcss, color: colors.tailwind },
      { IconComponent: SiMysql, color: colors.mysql },
    ],
  };

  const featuredProjects = [
    {
      title: "NYC Health Map",
      description:
        "An enhanced version of the health map of New York City, featuring a landing page and navigation to different boroughs. A research project with Prof. Sheena Philogene.",
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
      title: "Full-stack Todo",
      description:
        "A todo list application built with React and Spring Boot. Features task management, categorization, and completion, with tasks saved to a MySQL database.",
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
  ];

  const projects = [
    {
      title: "NYC Health Map",
      description:
        "An enhanced version of the health map of New York City, featuring a landing page and navigation to different boroughs. A research project with Prof. Sheena Philogene.",
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
      title: "Sunset Park Health Map",
      description:
        "An interactive health map of Sunset Park, Brooklyn, visualizing key health metrics and demographic data to provide insights into the community's health status and needs.",
      link: "https://github.com/wilsonliu2/sunset-park-health-map",
      icons: [
        { IconComponent: SiLeaflet, color: colors.leaflet },
        { IconComponent: SiD3Dotjs, color: colors.d3 },
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
    {
      title: "NYC Data Jenks Natural Breaks",
      description:
        "This project uses the Jenks Natural Breaks Algorithm to determine optimal breakpoints for categorizing health and demographic data for my health maps.",
      link: "https://github.com/wilsonliu2/nyc-health-data-jenks-breaks",
      icons: [
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
    {
      title: "NYC Health Map Demo",
      description:
        "A detailed health map of New York City, showcasing various health metrics and data points across different neighborhoods.",
      link: "https://github.com/wilsonliu2/nyc-health-map-demo",
      icons: [
        { IconComponent: SiLeaflet, color: colors.leaflet },
        { IconComponent: SiD3Dotjs, color: colors.d3 },
        { IconComponent: IoLogoJavascript, color: colors.javascript },
        { IconComponent: FaHtml5, color: colors.html },
        { IconComponent: FaCss3Alt, color: colors.css },
      ],
    },
    {
      title: "JWT Auth Full-stack",
      description:
        "A full-stack application that implements and tests JWT authentication and authorization.",
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
      title: "Full-stack Todo",
      description:
        "A todo list application built with React and Spring Boot. Features task management, categorization, and completion, with tasks saved to a MySQL database.",
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
      description: "A book management system.",
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
        <p className="text-gray-500">(Updated as of 7/31/2024)</p>
      </div>
      <h3 className="text-2xl font-semibold mb-4">I am working on:</h3>
      <div className="mb-8">
        <ProjectCard {...currentProject} />
      </div>
      <h3 className="text-2xl font-semibold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex items-end space-x-2 mb-2">
        <h3 className="text-2xl font-semibold">All Projects</h3>
        <button
          className="ml-auto text-blue-500"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? (
            <p className="hover:underline">Hide</p>
          ) : (
            <p className="hover:underline">Expand</p>
          )}
        </button>
      </div>
      {showAllProjects && (
        <p className="text-gray-500">(From most recent to oldest)</p>
      )}
      {showAllProjects && (
        <div className="flex overflow-x-auto space-x-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
