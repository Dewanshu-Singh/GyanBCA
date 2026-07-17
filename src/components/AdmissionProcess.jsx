import React from 'react';
import { FileText, CheckCircle, Award, UserPlus } from 'lucide-react';
import './AdmissionProcess.css';

const AdmissionProcess = () => {
  const steps = [
    {
      icon: <FileText size={32} />,
      title: "1. Online Registration",
      desc: "Fill out the simple online application form with your basic details to start the journey."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "2. Document Submission",
      desc: "Upload your academic records and necessary documents for quick verification."
    },
    {
      icon: <Award size={32} />,
      title: "3. Selection Process",
      desc: "Candidates are shortlisted based on their academic merit or entrance exam scores."
    },
    {
      icon: <UserPlus size={32} />,
      title: "4. Final Enrollment",
      desc: "Pay the initial semester fee to secure your seat and officially join the Gyan Vihar family."
    }
  ];

  return (
    <section id="admission-process" className="section process-section">
      <div className="container">
        
        <div className="text-center" data-aos="fade-up" style={{ marginBottom: '4rem', textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
          <p className="section-subtitle" style={{ color: 'var(--accent-color)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem', textShadow: '0 1px 2px rgba(255,255,255,0.9)' }}>
            How to Apply
          </p>
          <h2 className="section-title text-gradient" style={{ textShadow: 'none' }}>Your Journey Starts Here</h2>
          <p className="process-lead" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.9)' }}>
            A simple, transparent, and seamless admission process.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card hover-lift" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="process-step-number">Step {index + 1}</div>
              <div className="process-icon">
                {step.icon}
              </div>
              <h3 className="process-title">{step.title.split('. ')[1]}</h3>
              <p className="process-desc">{step.desc}</p>
              {index !== steps.length - 1 && (
                <div className="process-connector"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;
