import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './CareerPathways.css';

const CareerPathways = () => {
  const careers = [
    "Software Developer",
    "Cloud Architect",
    "Data Scientist",
    "Cybersecurity Analyst",
    "Full Stack Developer",
    "AI/ML Engineer",
    "System Analyst",
    "IT Consultant",
    "Database Administrator",
    "Project Manager"
  ];

  return (
    <section className="section career-pathways-section">
      <div className="container">
        
        <div className="text-center" data-aos="fade-up">
          <p className="section-subtitle" style={{ color: '#4285F4', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            Where Our Graduates Go
          </p>
          <h2 className="section-title">One BCA. Ten Career Doors.</h2>
          <p className="career-lead">
            The tech industry doesn't hire generalists. It hires people who can do specific, valuable things. Your specialisation at SGVU prepares you for exactly that.
          </p>
        </div>

        <div className="career-grid">
          {careers.map((career, index) => (
            <div key={index} className="career-pill" data-aos="fade-up" data-aos-delay={(index % 5) * 50}>
              <span>{career}</span>
              <ArrowUpRight size={18} className="career-arrow" />
            </div>
          ))}
        </div>

        <div className="career-closing text-center" data-aos="fade-up" data-aos-delay="300">
          <p>Every role above is actively hiring. The question is whether you're trained for it.</p>
        </div>

      </div>
    </section>
  );
};

export default CareerPathways;
