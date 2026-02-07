import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const { contact, personal } = portfolioData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      type: 'email',
      label: 'EMAIL',
      value: contact.email,
      link: `mailto:${contact.email}`,
      icon: '📧',
      code: '[EMAIL_PROTOCOL]'
    },
    {
      type: 'linkedin',
      label: 'LINKEDIN',
      value: 'leonardo-secotaro',
      link: contact.linkedin,
      icon: '💼',
      code: '[LINKEDIN_API]'
    },
    {
      type: 'github',
      label: 'GITHUB',
      value: 'leonardo-secotaro',
      link: contact.github,
      icon: '💻',
      code: '[GITHUB_REPO]'
    },
    {
      type: 'phone',
      label: 'PHONE',
      value: contact.phone,
      link: `tel:${contact.phone}`,
      icon: '📱',
      code: '[PHONE_CALL]'
    }
  ];

  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="page-title">
          <span className="title-bracket">{'<'}</span>
          GET IN TOUCH
          <span className="title-bracket">{'/>'}</span>
        </h1>
        <p className="contact-subtitle">
          Let's connect and discuss opportunities, projects, or just tech in general
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h2 className="info-title">
              <span className="info-bracket">{'<'}</span>
              CONTACT_METHODS
              <span className="info-bracket">{'/>'}</span>
            </h2>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.type !== 'email' && method.type !== 'phone' ? '_blank' : '_self'}
                  rel={method.type !== 'email' && method.type !== 'phone' ? 'noopener noreferrer' : ''}
                  className="contact-method"
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <span className="method-code">{method.code}</span>
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                  <div className="method-arrow">→</div>
                </a>
              ))}
            </div>
          </div>

          <div className="location-section">
            <h3 className="location-title">
              <span className="location-bracket">{'<'}</span>
              LOCATION
              <span className="location-bracket">{'/>'}</span>
            </h3>
            <div className="location-info">
              <span className="location-icon">🌍</span>
              <span className="location-text">{contact.location}</span>
            </div>
            <div className="timezone-info">
              <span className="timezone-code">[TIMEZONE]</span>
              <span className="timezone-text">GMT-3 (Argentina)</span>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="form-title">
            <span className="form-bracket">{'<'}</span>
            SEND_MESSAGE
            <span className="form-bracket">{'/>'}</span>
          </h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                <span className="label-code">[NAME]</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your name..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="label-code">[EMAIL]</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="label-code">[SUBJECT]</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter subject..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="label-code">[MESSAGE]</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Enter your message..."
                rows="6"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span className="btn-code">
                {isSubmitting ? '[SENDING...]' : '[SEND_MESSAGE]'}
              </span>
              <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                <span className="success-code">[MESSAGE_SENT]</span>
                <span className="success-text">Message sent successfully!</span>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="matrix-terminal-bg">
        <div className="terminal-lines">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="terminal-line" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="line-number">{String(i + 1).padStart(3, '0')}</span>
              <span className="line-content">
                {i % 3 === 0 && '> connecting to leonardo.secotaro...'}
                {i % 3 === 1 && '> establishing secure connection...'}
                {i % 3 === 2 && '> ready to receive transmission...'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;