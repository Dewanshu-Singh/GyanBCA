import React from 'react';
import { Cloud, Award, BookOpenCheck } from 'lucide-react';
import './GoogleAdvantage.css';

const GoogleAdvantage = () => {
  const callouts = [
    {
      title: "Google Cloud Labs",
      icon: <Cloud size={40} strokeWidth={1.5} />,
      desc: "Hands-on access to GCP infrastructure from Semester 1. Build, deploy, and test like a professional — before you graduate."
    },
    {
      title: "Google-Recognised Skills",
      icon: <Award size={40} strokeWidth={1.5} />,
      desc: "Complete your program with certifications that carry weight in every hiring room, not just a grade on a transcript."
    },
    {
      title: "Industry-Standard Curriculum",
      icon: <BookOpenCheck size={40} strokeWidth={1.5} />,
      desc: "Built around AI frameworks, cybersecurity standards, and cloud best practices that match what global enterprises actually use."
    }
  ];

  return (
    <section className="section google-advantage-section">
      <div className="container">
        
        <div className="google-header-grid" data-aos="fade-up">
          <div className="google-header-text">
            <p className="section-subtitle" style={{ color: '#4285F4', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
              Why This Is Different
            </p>
            <h2 className="section-title">Your Degree. <br/> <span style={{ color: '#4285F4' }}>Google's Ecosystem.</span></h2>
          </div>
          <div className="google-header-desc">
            <p className="lead-text">
              Most colleges teach you theory. We put you inside the same cloud environment used by the world's biggest companies.
            </p>
            <p>
              At SGVU's Learning Centre of Excellence, your BCA curriculum runs on Google Cloud Platform. You'll earn Google-recognised proficiency that recruiters can verify.
            </p>
          </div>
        </div>

        <div className="google-cards-grid">
          {callouts.map((item, index) => (
            <div key={index} className="google-card" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
              <div className="google-card-inner">
                <div className="google-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="google-decoration"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoogleAdvantage;
