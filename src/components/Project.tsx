import React, { useState } from "react";
import mock01 from "../assets/images/stemless.png";
import mock02 from "../assets/images/adjarabet.png";
import mock03 from "../assets/images/kyc.png";
import mock04 from "../assets/images/advidi.png";
import "../assets/styles/Project.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  backText: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Stemless.co",
    description: "E-commerce platform for cannabis industry with comprehensive inventory management.",
    backText: "E-commerce platform for cannabis industry.\n\nHIGHLIGHTS:\n• Developed frontend using React and TypeScript\n• Implemented comprehensive testing strategy\n• Integrated payment processing and inventory management\n• Ensured compliance with industry regulations",
    image: mock01,
    tags: ["React", "TypeScript", "E2E Testing"],
  },
  {
    id: 2,
    title: "Adjarabet.com & Adjarabet.am",
    description: "Online gaming and betting platform with multi-region support.",
    backText: "Online gaming and betting platform.\n\nHIGHLIGHTS:\n• Built responsive frontend interfaces\n• Implemented secure payment systems\n• Developed automated testing frameworks\n• Ensured cross-browser compatibility",
    image: mock02,
    tags: ["Angular", "Node.js", "Automation"],
  },
  {
    id: 3,
    title: "KnowYourCustomer.com",
    description: "Digital identity verification and compliance platform.",
    backText: "Digital identity verification platform.\n\nHIGHLIGHTS:\n• Developed secure verification workflows\n• Implemented API integrations\n• Created comprehensive test suites\n• Maintained high security standards",
    image: mock03,
    tags: ["React", "Node.js", "API Testing"],
  },
  {
    id: 4,
    title: "Advidi.com Integration",
    description: "Performance marketing network platform integration.",
    backText: "Performance marketing network integration.\n\nHIGHLIGHTS:\n• Integrated tracking systems\n• Developed reporting dashboards\n• Implemented automated testing\n• Optimized platform performance",
    image: mock04,
    tags: ["Full Stack", "Testing", "Analytics"],
  },
  
];

function ProjectCard() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesTag = selectedTag
      ? project.tags.includes(selectedTag)
      : true;
    return matchesTag;
  });

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="content-wrapper">
        <h1>Projects</h1>
        <div className="tags">
          
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <div className="project-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <p className="modal-text">
              {selectedProject.backText.split("\n").map((line, index) => (
                <span key={index}>
                  {line.includes("HIGHLIGHTS:") ? (
                    <>
                      <strong>HIGHLIGHTS:</strong>
                      {line.replace("HIGHLIGHTS:", "")}
                    </>
                  ) : (
                    line
                  )}
                  <br />
                </span>
              ))}
            </p>
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
