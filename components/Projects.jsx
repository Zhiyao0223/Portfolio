import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "JohorSage",
    description: "Chatbot Project for Johor Premium Outlet.",
    image: "/projects/placeholder.jpg",
    gitUrl:
      "https://web.powerva.microsoft.com/environments/Default-0fed03a3-402d-4633-a8cd-8b308822253e/bots/76e25366-cecf-4c01-9390-072c0744bb8a/canvas",
  },
  {
    id: 2,
    title: "Galaxy Pet Store",
    description: "A Website for Purchasing Pet & Pet Accessories.",
    image: "/projects/placeholder.jpg",
    gitUrl: "https://github.com/Zhiyao0223/Galaxy-Pet-Store",
  },
  {
    id: 3,
    title: "Engineiva",
    description: "A Website for Trading Car.",
    image: "/projects/placeholder.jpg",
    gitUrl: "https://github.com/Zhiyao0223/Engineiva",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-4xl font-semibold mb-8">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-x-8 gap-y-4 md:gap-12 h-full">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
