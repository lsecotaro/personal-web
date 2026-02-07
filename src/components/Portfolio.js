import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const { portfolio } = portfolioData;

  // Get all unique technologies for filtering
  const allTechnologies = [...new Set(portfolio.flatMap(project => project.technologies))];

  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? portfolio 
    : portfolio.filter(project => project.technologies.includes(filter));

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1 className="page-title">
          <span className="title-bracket">{'<'}</span>
          PORTFOLIO
          <span className="title-bracket">{'/>'}</span>
        </h1>
        <p className="portfolio-subtitle">
          Showcasing innovative solutions and technical excellence
        </p>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">
          <span className="filter-bracket">{'<'}</span>
          FILTER BY TECHNOLOGY
          <span className="filter-bracket">{'/>'}</span>
        </h3>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span className="btn-code">[ALL]</span>
          </button>
          {allTechnologies.map((tech, index) => (
            <button 
              key={index}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              <span className="btn-code">[{tech.toUpperCase()}]</span>
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openModal(project)}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="250" fill="#000"/>
                      <text x="200" y="130" text-anchor="middle" fill="#00ff00" font-family="monospace" font-size="16">${project.title}</text>
                      <text x="200" y="150" text-anchor="middle" fill="#00ff00" font-family="monospace" font-size="12">PROJECT IMAGE</text>
                    </svg>
                  `)}`;
                }}
              />
              <div className="project-overlay">
                <div className="overlay-content">
                  <span className="view-project">VIEW PROJECT</span>
                  <div className="project-links">
                    {project.demoUrl && (
                      <span className="link-indicator">[DEMO]</span>
                    )}
                    {project.githubUrl && (
                      <span className="link-indicator">[CODE]</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-title">
                <span className="project-number">[{String(index + 1).padStart(2, '0')}]</span>
                {project.title}
              </h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <span className="close-code">[X]</span>
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">
                <span className="modal-bracket">{'<'}</span>
                {selectedProject.title}
                <span className="modal-bracket">{'/>'}</span>
              </h2>
            </div>

            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="600" height="400" fill="#000"/>
                        <text x="300" y="200" text-anchor="middle" fill="#00ff00" font-family="monospace" font-size="20">${selectedProject.title}</text>
                        <text x="300" y="230" text-anchor="middle" fill="#00ff00" font-family="monospace" font-size="14">PROJECT PREVIEW</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>

              <div className="modal-details">
                <div className="modal-description">
                  <h4 className="detail-section-title">
                    <span className="section-bracket">{'<'}</span>
                    DESCRIPTION
                    <span className="section-bracket">{'/>'}</span>
                  </h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-technologies">
                  <h4 className="detail-section-title">
                    <span className="section-bracket">{'<'}</span>
                    TECHNOLOGIES
                    <span className="section-bracket">{'/>'}</span>
                  </h4>
                  <div className="modal-tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn demo-btn"
                    >
                      <span className="btn-code">[LIVE_DEMO]</span>
                      <span className="btn-text">View Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn github-btn"
                    >
                      <span className="btn-code">[SOURCE_CODE]</span>
                      <span className="btn-text">View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="matrix-grid-bg">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i} 
            className="grid-cell"
            style={{ 
              animationDelay: `${Math.random() * 5}s`,
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`
            }}
          >
            {Math.random() > 0.7 ? '█' : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;