import React, { useState, useEffect } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCaretDown, faCaretUp, faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

interface Career {
  id: number;
  title: string;
  company: string;
  location: string;
  subtitle: string;
  description: string;
  achievements: string[];
}

const careers: Career[] = [
  {
    id: 1,
    title: "Full Stack Developer & QA Engineer",
    company: "Adjarabet.com & Adjarabet.am",
    location: "Georgia",
    subtitle: "2021 — Present",
    description: "Leading development and QA for major online gaming platforms",
    achievements: [
      "Developed and maintained high-traffic betting platform features",
      "Implemented end-to-end testing strategies with Cypress and Selenium",
      "Built responsive interfaces using React and Angular",
      "Integrated secure payment systems and user verification"
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "KnowYourCustomer.com",
    location: "Remote",
    subtitle: "2020 — 2021",
    description: "Identity verification platform development",
    achievements: [
      "Developed secure verification workflows using React and Node.js",
      "Created automated testing frameworks for critical features",
      "Built and maintained RESTful APIs",
      "Implemented secure data handling protocols"
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Advidi.com",
    location: "Remote",
    subtitle: "2019 — 2020",
    description: "Marketing platform development",
    achievements: [
      "Built responsive marketing platform interfaces",
      "Developed performance tracking dashboards",
      "Implemented automated testing solutions",
      "Optimized frontend performance and user experience"
    ],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Stemless.co",
    location: "Remote",
    subtitle: "2018 — 2019",
    description: "E-commerce platform development",
    achievements: [
      "Developed full-stack e-commerce features",
      "Built inventory management system",
      "Implemented automated testing suites",
      "Integrated payment processing systems"
    ],
  }
];

function Timeline() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>(() => {
    const initialState: { [key: number]: boolean } = {};
    careers.forEach(career => {
      initialState[career.id] = true;
    });
    return initialState;
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isLightMode = document.documentElement.classList.contains('light-mode');
    setIsDarkMode(!isLightMode);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(!document.documentElement.classList.contains('light-mode'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleDetails = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="timeline-section" id="career">
      <div className="timeline-container">
        <div className="section-header">
          <h1>Career History</h1>
          <p className="section-subtitle">My professional journey and experience</p>
        </div>

        <VerticalTimeline animate={true} lineColor={"#2b98c2"}>
          {careers.map((career) => (
            <VerticalTimelineElement
              key={career.id}
              className={`vertical-timeline-element--work ${!isDarkMode ? 'light-mode-element' : ''}`}
              contentArrowStyle={{ 
                borderRight: isDarkMode
                  ? "7px solid rgba(10, 25, 47, 0.7)"
                  : "7px solid rgba(255, 255, 255, 0.95)"
              }}
              date={career.subtitle}
              iconStyle={{ 
                background: "rgb(43, 152, 194)", 
                color: "#fff", 
                boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.2)"
              }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <div className="timeline-header">
                <h3 className="timeline-title">{career.title}</h3>
                <div className="company-info">
                  <h4 className="company-name">{career.company}</h4>
                  <span className="location">{career.location}</span>
                </div>
              </div>

              <p className="timeline-description">{career.description}</p>

              <div
                className={`timeline-details ${expanded[career.id] ? 'expanded' : ''}`}
                onClick={() => toggleDetails(career.id)}
              >
                <div className="toggle-button">
                  <span>{expanded[career.id] ? 'Show Less' : 'Show More'}</span>
                  <FontAwesomeIcon
                    icon={expanded[career.id] ? faCaretUp : faCaretDown}
                    className="toggle-icon"
                  />
                </div>
              </div>

              {expanded[career.id] && (
                <div className="expanded-content">
                  <div className="achievements">
                    <h5>
                      <FontAwesomeIcon icon={faTrophy} className="section-icon" />
                      Key Achievements
                    </h5>
                    <ul>
                      {career.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;