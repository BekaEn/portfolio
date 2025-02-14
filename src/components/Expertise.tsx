import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord} from "@fortawesome/free-brands-svg-icons";
import { faCode, faServer, faVial } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

// Define type for chipLinks
type ChipLinksType = {
  [key: string]: string;
};

const chipLinks: ChipLinksType = {
  // Frontend
  React: "https://reactjs.org/",
  Angular: "https://angular.io/",
  TypeScript: "https://www.typescriptlang.org/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Redux: "https://redux.js.org/",
  "Material UI": "https://mui.com/",

  // Backend
  "Node.js": "https://nodejs.org/",
  "Next.js": "https://nextjs.org/",
  Express: "https://expressjs.com/",
  MySQL: "https://www.mysql.com/",
  PostgreSQL: "https://www.postgresql.org/",
  MongoDB: "https://www.mongodb.com/",
  GraphQL: "https://graphql.org/",
  "REST APIs": "https://restfulapi.net/",

  // QA & Testing
  Cypress: "https://www.cypress.io/",
  Selenium: "https://www.selenium.dev/",
  TestRail: "https://www.testrail.com/",
  Postman: "https://www.postman.com/",
  Jest: "https://jestjs.io/",
  Jenkins: "https://www.jenkins.io/",
  Docker: "https://www.docker.com/",
  Git: "https://git-scm.com/"
};

const labelsFirst = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "Material UI"
];

const labelsSecond = [
  "Node.js",
  "Next.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs"
];

const labelsThird = [
  "Cypress",
  "Selenium",
  "TestRail",
  "Postman",
  "Jest",
  "Jenkins",
  "Docker",
  "Git"
];

function Expertise() {
    const handleChipClick = (label: string) => {
      const url = chipLinks[label];
      if (url) {
        window.open(url, "_blank");
      }
    };
  
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <div className="skill-header">
                <FontAwesomeIcon
                  icon={faCode}
                  size="3x"
                  className="skill-icon"
                />
                <h3>Frontend Development</h3>
              </div>
              <p>
                Building responsive and user-friendly web applications with modern frameworks and tools.
              </p>
              <h5>
                <FontAwesomeIcon icon={faCode} className="section-icon" />
                Technologies :
              </h5>
              <div className="flex-chips">
                {labelsFirst.map((label, index) => (
                  <Chip
                    key={index}
                    className="chip"
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
              </div>
            </div>
  
            <div className="skill">
              <div className="skill-header">
                <FontAwesomeIcon
                  icon={faServer}
                  size="3x"
                  className="skill-icon"
                />
                <h3>Backend Development</h3>
              </div>
              <p>
                Developing robust server-side solutions with secure APIs and efficient database management.
              </p>
              <h5>
                <FontAwesomeIcon icon={faCode} className="section-icon" />
                Technologies :
              </h5>
              <div className="flex-chips">
                {labelsSecond.map((label, index) => (
                  <Chip
                    key={index}
                    className="chip"
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
              </div>
            </div>
  
            <div className="skill">
              <div className="skill-header">
                <FontAwesomeIcon
                  icon={faVial}
                  size="3x"
                  className="skill-icon"
                />
                <h3>QA & Test Automation</h3>
              </div>
              <p>
                Implementing comprehensive testing strategies with automated frameworks for quality assurance.
              </p>
              <h5>
                <FontAwesomeIcon icon={faCode} className="section-icon" />
                Technologies : 
              </h5>
              <div className="flex-chips">
                {labelsThird.map((label, index) => (
                  <Chip
                    key={index}
                    className="chip"
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Expertise;