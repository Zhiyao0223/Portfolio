import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import ImageSlider from "./ImageSlider";

// Project list
const projectData = [
  {
    id: 1,
    title: "JohorSage",
    description: "Chatbot Project for Johor Premium Outlet.",
    image: ["/projects/placeholder.jpg", "/about-me.jpg"],
    gitUrl:
      "https://web.powerva.microsoft.com/environments/Default-0fed03a3-402d-4633-a8cd-8b308822253e/bots/76e25366-cecf-4c01-9390-072c0744bb8a/canvas",
  },
  {
    id: 2,
    title: "Galaxy Pet Store",
    description: "A Website for Purchasing Pet & Pet Accessories.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Galaxy-Pet-Store",
  },
  {
    id: 3,
    title: "Engineiva",
    description: "A Website for Trading Car.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Engineiva",
  },
  {
    id: 9,
    title: "Expenses Tracking System",
    description: "A Mobile App for tracking expenses.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/PocketGuardian",
  },
  {
    id: 4,
    title: "Not Popcat",
    description: "HTML Project for fun",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Not-Popcat",
  },
  {
    id: 5,
    title: "Car Rental System",
    description: "Desktop GUI for renting car.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Car_Rental_System",
  },
  {
    id: 10,
    title: "Hotel Management System",
    description: "A desktop GUI for managing hotel booking.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Hotel-Management-System",
  },
  {
    id: 6,
    title: "Simple Car Rental Service",
    description: "A CLI program for renting car.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Simple-Car-Rental-Service",
  },
  {
    id: 7,
    title: "Simple Laravel Project",
    description: "Learn CRUD operation in Laravel.",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/Laravel_Workshop",
  },
  {
    id: 8,
    title: "University Rating System",
    description: "A CLI program focus on OOP concepts and data structures",
    image: ["/projects/placeholder.jpg"],
    gitUrl: "https://github.com/Zhiyao0223/University-Rating-System-CLI",
  },
];

// Project Section
const Projects = () => {
  return (
    <div id="projects" className="mb-10">
      <div className="text-4xl font-semibold mb-4">Projects</div>
      <>
        <p className="text-white text-opacity-70 mb-4">
          Below are some of the projects that I have done. Click on the image to
          view more details.
        </p>
      </>
      <div className="w-full">
        <Accordion>
          {projectData.map((project) => (
            <AccordionItem
              key={project.id}
              aria-label={project.title}
              title={project.title}
              classNames={{
                base: "mb-4",
                title:
                  "text-lg font-semibold text-white text-opacity-90 text-start pl-4",
                subtitle: "text-white text-opacity-70 pl-4",
                indicator: "bg-primary place-items-end",
                content: "text-white text-opacity-70 pl-4",
              }}
              indicator={<></>}
              subtitle={project.description}
              startContent={
                <Avatar
                  isBordered
                  color="primary"
                  radius="lg"
                  src={project.image[0]}
                />
              }
            >
              <div className="my-4">
                {/* Source code attach giturl */}
                <div className="mb-4">
                  Source code:{" "}
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Here
                  </a>
                </div>
                <ImageSlider images={project.image} />
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;
