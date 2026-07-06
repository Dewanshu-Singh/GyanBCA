import React from 'react';
import { Award, Briefcase, Microscope, CheckCircle2, Cloud, Monitor, Layers } from 'lucide-react';
import './WhyChooseSection.css';

const WhyChooseSection = () => {
  const features = [
    {
      title: 'Google Cloud Integration',
      icon: <Cloud size={36} />,
      points: [
        'Train on enterprise-level GCP platforms',
        'Graduate with verified Google cloud proficiency'
      ]
    },
    {
      title: 'High-Speed Lab Infrastructure',
      icon: <Monitor size={36} />,
      points: [
        'Advanced computer labs for real-world dev',
        'Simulate actual tech workplaces'
      ]
    },
    {
      title: 'Compulsory Industry Internships',
      icon: <Briefcase size={36} />,
      points: [
        'Structured industry placements before graduation',
        'Build a verified professional portfolio'
      ]
    },
    {
      title: 'Active Faculty Research',
      icon: <Microscope size={36} />,
      points: [
        'Research in IoT, cryptography, big data',
        'Participate in live projects as a student'
      ]
    },
    {
      title: 'Full-Stack Employability',
      icon: <Layers size={36} />,
      points: [
        'Front-end design to cloud deployment',
        'Capable of handling the entire digital stack'
      ]
    },
    {
      title: 'NAAC A+ Accredited',
      icon: <Award size={36} />,
      points: [
        "India's highest institutional quality grade",
        'Nationwide recognition & employer trust'
      ]
    }
  ];

  return (
    <section id="why-choose-us" className="section why-choose-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <p className="section-subtitle" style={{ color: '#eab308', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            6 Reasons Students Choose Us
          </p>
          <h2 className="section-title" style={{ color: 'white' }}>Not Just a Degree. A Complete Career System.</h2>
        </div>

        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card" data-aos="fade-up" data-aos-delay={(index % 4) * 100}>
              <div className="why-card-inner">
                <div className="why-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="why-card-title">{feature.title}</h3>
                <ul className="why-points-list">
                  {feature.points.map((point, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} className="text-primary why-point-icon" /> 
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
