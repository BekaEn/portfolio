import React from 'react';
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about" className="about-section2">
      <div className="about-container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm Beka, a passionate Full Stack Developer and QA Engineer with expertise in 
              frontend, backend development, and test automation.
            </p>
            <p className="intro">
              I specialize in building reliable, scalable applications while ensuring 
              high-quality through comprehensive testing strategies.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Georgia</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">enuqidzebeqa@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Availability:</span>
                <span className="value">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
