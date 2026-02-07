import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import './Experience.css';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const { experience } = portfolioData;

  const formatDate = (dateString) => {
    if (dateString === 'Present') return 'PRESENT';
    const [year, month] = dateString.split('-');
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
                   'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
    if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  };

  return (
    <div className="experience">
      <div className="experience-header">
        <h1 className="page-title">
          <span className="title-bracket">{'<'}</span>
          PROFESSIONAL EXPERIENCE
          <span className="title-bracket">{'/>'}</span>
        </h1>
        <p className="experience-subtitle">
          Building scalable systems and leading engineering teams
        </p>
      </div>

      <div className="experience-content">
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div 
              key={exp.id}
              className={`timeline-item ${selectedExperience === index ? 'active' : ''}`}
              onClick={() => setSelectedExperience(index)}
            >
              <div className="timeline-marker">
                <span className="marker-code">[{String(index + 1).padStart(2, '0')}]</span>
              </div>
              <div className="timeline-content">
                <h3 className="company-name">
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="position-title">{exp.position}</p>
                <p className="industry-tag">{exp.industry}</p>
                <div className="date-range">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </div>
                <div className="duration">
                  {calculateDuration(exp.startDate, exp.endDate)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-details">
          {experience[selectedExperience] && (
            <div className="detail-card">
              <div className="detail-header">
                <h2 className="detail-position">
                  {experience[selectedExperience].position}
                </h2>
                <h3 className="detail-company">
                  <a 
                    href={experience[selectedExperience].companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-company-link"
                  >
                    @ {experience[selectedExperience].company}
                  </a>
                </h3>
                <div className="detail-meta">
                  <span className="detail-industry">
                    {experience[selectedExperience].industry}
                  </span>
                  <span className="detail-dates">
                    {formatDate(experience[selectedExperience].startDate)} - {formatDate(experience[selectedExperience].endDate)}
                  </span>
                </div>
              </div>

              <div className="detail-description">
                <p>{experience[selectedExperience].description}</p>
              </div>

              <div className="achievements-section">
                <h4 className="achievements-title">
                  <span className="achievements-bracket">{'<'}</span>
                  KEY ACHIEVEMENTS
                  <span className="achievements-bracket">{'/>'}</span>
                </h4>
                <ul className="achievements-list">
                  {experience[selectedExperience].achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      <span className="achievement-bullet">▶</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="linkedin-cta">
        <div className="cta-content">
          <h3 className="cta-title">Want to know more?</h3>
          <p className="cta-description">
            Check out my complete professional profile on LinkedIn
          </p>
          <a 
            href="https://www.linkedin.com/in/leonardo-secotaro"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <span className="button-code">[LINKEDIN_PROFILE]</span>
            <span className="button-text">View Full Profile</span>
          </a>
        </div>
      </div>

      <div className="matrix-code-bg">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="code-line" style={{ animationDelay: `${i * 0.2}s` }}>
            {Array.from({ length: 50 }).map((_, j) => (
              <span key={j} className="code-char">
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;