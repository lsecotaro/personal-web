import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import './Home.css';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const { personal, skills } = portfolioData;

  // Typewriter effect for the bio
  useEffect(() => {
    const text = personal.bio;
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [personal.bio]);

  // Rotating skills display
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => 
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="matrix-frame">
                <img 
                  src={personal.photo} 
                  alt={personal.name}
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDBmZjAwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0Ij5QUk9GSUxFPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
                <div className="matrix-overlay"></div>
              </div>
            </div>
            
            <div className="profile-info">
              <h1 className="name-title">
                <span className="bracket">{'<'}</span>
                {personal.name}
                <span className="bracket">{'/>'}</span>
              </h1>
              <h2 className="job-title">{personal.title}</h2>
              <div className="location">
                <span className="location-icon">📍</span>
                {personal.location}
              </div>
              
              <div className="bio-container">
                <p className="bio-text">
                  {displayedText}
                  <span className="cursor">|</span>
                </p>
              </div>

              <div className="social-links">
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <span className="link-code">[LINKEDIN]</span>
                </a>
                <a 
                  href={`mailto:${personal.email}`}
                  className="social-link email"
                >
                  <span className="link-code">[EMAIL]</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="section-title">
          <span className="title-bracket">{'<'}</span>
          CORE SKILLS
          <span className="title-bracket">{'/>'}</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className={`skill-category ${index === currentSkillIndex ? 'highlighted' : ''}`}
            >
              <h3 className="category-title">
                <span className="category-code">[{String(index + 1).padStart(2, '0')}]</span>
                {skillCategory.category}
              </h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="matrix-rain">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rain-column" style={{ left: `${i * 5}%` }}>
            {Array.from({ length: 10 }).map((_, j) => (
              <span key={j} className="rain-char">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;