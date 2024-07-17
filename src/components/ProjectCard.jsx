import React from "react";

const ProjectCard = ({ title, description, link, icons }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md min-w-[300px] flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      <div className="mt-auto">
        <div className="flex space-x-2 mb-2">
          {icons.map(({ IconComponent, color }, index) => (
            <IconComponent
              key={index}
              style={{ color: color }}
              className="text-2xl"
            />
          ))}
        </div>
        <a
          href={link}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
