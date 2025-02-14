import React from 'react';
import '../assets/styles/Qualifications.scss';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface QualificationItem {
  title: string;
  institution: string;
  year: string;
  description: string;
  link?: string;
}

interface Qualifications {
  education: QualificationItem[];
  certifications: QualificationItem[];
  achievements: QualificationItem[];
}

function Qualifications() {
  const qualifications: Qualifications = {
    education: [
      {
        title: "Bachelor's in Information Technology",
        institution: "Ilia State University",
        year: "2016 - 2020",
        description: "Focus on Computer Science and Software Development",
        link: "https://iliauni.edu.ge/en/"
      },
      {
        title: "Frontend Development Certification",
        institution: "Digital Institute Georgia",
        year: "2019",
        description: "Advanced web development course focusing on modern frontend technologies",
        link: "https://digitalinstitute.ge/"
      }
    ],
    certifications: [
      {
        title: "Full Stack Development",
        institution: "IT Academy Step Georgia",
        year: "2018",
        description: "Comprehensive training in full-stack web development and testing",
        link: "https://step.ge/"
      }
    ],
    achievements: [
      {
        title: "Lead QA Engineer",
        institution: "Adjarabet.com",
        year: "2021",
        description: "Led implementation of automated testing reducing bug rate by 60%"
      },
      {
        title: "Frontend Development Lead",
        institution: "KnowYourCustomer.com",
        year: "2020",
        description: "Successfully delivered major platform features and improvements"
      }
    ]
  };

  return (
    <div id="qualifications" className="qualifications-section">
      <div className="qualifications-container">
        <h1>Qualifications</h1>
        
        <div className="qualifications-grid">
          {/* Education Section */}
          <div className="qualification-category">
            <div className="category-header">
              <SchoolIcon />
              <h2>Education</h2>
            </div>
            <div className="qualification-items">
              {qualifications.education.map((item, index) => (
                <div key={index} className="qualification-item">
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="year">{item.year}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="qualification-category">
            <div className="category-header">
              <WorkspacePremiumIcon />
              <h2>Certifications</h2>
            </div>
            <div className="qualification-items">
              {qualifications.certifications.map((item, index) => (
                <div key={index} className="qualification-item">
                  <h3>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p className="institution">{item.institution}</p>
                  <p className="year">{item.year}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="qualification-category">
            <div className="category-header">
              <EmojiEventsIcon />
              <h2>Achievements</h2>
            </div>
            <div className="qualification-items">
              {qualifications.achievements.map((item, index) => (
                <div key={index} className="qualification-item">
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="year">{item.year}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
