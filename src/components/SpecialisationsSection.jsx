import React from 'react';
import { Cloud, Database, Shield, Layout, Cpu } from 'lucide-react';
import './SpecialisationsSection.css';

const SpecialisationsSection = () => {
  const specs = [
    {
      title: "Google Cloud Program (GCP)",
      icon: <Cloud size={32} />,
      desc: "Become the person companies trust to run their entire digital backbone.",
      skills: "Cloud architecture, GCP tools, deployment, cloud security",
      roles: "Cloud Architect, DevOps Engineer, Cloud Consultant",
      color: "#4285F4" // Google Blue
    },
    {
      title: "Data Science (with ICA)",
      icon: <Database size={32} />,
      desc: "Turn raw data into decisions that run businesses.",
      skills: "Python, statistical modelling, data visualisation, machine learning basics",
      roles: "Data Analyst, Business Intelligence Analyst, Data Scientist",
      color: "#34A853" // Google Green
    },
    {
      title: "Cyber Security",
      icon: <Shield size={32} />,
      desc: "Protect the systems that the world depends on.",
      skills: "Ethical hacking, network security, cryptography, threat analysis",
      roles: "Cybersecurity Analyst, Penetration Tester, Security Consultant",
      color: "#EA4335" // Google Red
    },
    {
      title: "Full Stack Development",
      icon: <Layout size={32} />,
      desc: "Build complete products — from what users see to how data flows behind the scenes.",
      skills: "HTML/CSS, React, Node.js, databases, REST APIs",
      roles: "Full Stack Developer, Frontend Engineer, Backend Developer",
      color: "#FBBC05" // Google Yellow
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu size={32} />,
      desc: "Build systems that learn, predict, and automate.",
      skills: "Python, neural networks, NLP, model training, TensorFlow",
      roles: "ML Engineer, AI Developer, Research Analyst",
      color: "#8B5CF6" // Purple
    }
  ];

  return (
    <section id="specialisations" className="section specs-section">
      <div className="container" style={{ maxWidth: '1500px' }}>
        
        <div className="text-center" data-aos="fade-up" style={{ marginBottom: '4rem' }}>
          <p className="section-subtitle" style={{ color: '#4285F4', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            Choose Your Track
          </p>
          <h2 className="section-title">5 Specialisations. One Goal: Your First Job.</h2>
          <p className="specs-lead">
            Pick the tech domain you're most excited about. We'll train you to become a specialist in it.
          </p>
        </div>

        <div className="specs-grid">
          {specs.map((spec, index) => (
            <div key={index} className="spec-card" data-aos="fade-up" data-aos-delay={(index % 5) * 100}>
              <div className="spec-icon-wrapper" style={{ backgroundColor: spec.color + '15', color: spec.color }}>
                {spec.icon}
              </div>
              <h3 className="spec-title">{spec.title}</h3>
              <p className="spec-desc">{spec.desc}</p>
              
              <div className="spec-details">
                <div className="spec-detail-group">
                  <strong>Skills you'll master:</strong>
                  <p>{spec.skills}</p>
                </div>
                <div className="spec-detail-group">
                  <strong>Career roles:</strong>
                  <p>{spec.roles}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialisationsSection;
