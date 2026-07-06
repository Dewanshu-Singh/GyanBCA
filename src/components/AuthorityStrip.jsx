import React from 'react';
// Removed unused import
import './AuthorityStrip.css';

const AuthorityStrip = () => {
  const companies = ['TCS', 'IBM', 'Wipro', 'Cyntexa', 'Infosys', 'Tech Mahindra', 'Google'];

  return (
    <div className="authority-strip">
      <div className="container">
        <div className="authority-content">
          <div className="marquee-container">
            <div className="marquee">
              {companies.map((company, index) => (
                <div key={index} className="company-logo-placeholder">
                  {company}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {companies.map((company, index) => (
                <div key={`dup-${index}`} className="company-logo-placeholder">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityStrip;
