import React from 'react';
import { ArrowRight, CheckCircle2, Monitor, Server } from 'lucide-react';
import './ProgramsSection.css';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'BCA (Bachelor of Computer Applications)',
      duration: '3 Years',
      eligibility: '10+2 with minimum 50%',
      image: '/DSC08521.jpg',
      icon: <Monitor size={32} />,
      features: [
        'Foundation in Computer Science',
        'Industry-oriented curriculum',
        'Hands-on programming experience',
        'Gateway to IT career'
      ]
    },
    {
      title: 'MCA (Masters in Computer Application)',
      duration: '2 Years',
      eligibility: 'Graduation with minimum 50%',
      image: '/DSC08273 (1).png',
      icon: <Server size={32} />,
      features: [
        'The Ultimate Tech Credential',
        '2-year advanced programme',
        'Specialisations in Data Science & Cloud',
        'Premium placement bracket eligibility'
      ]
    }
  ];

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <p className="section-subtitle" style={{ color: '#4285F4', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            For the Ambitious
          </p>
          <h2 className="section-title">Don't Stop at a Bachelor's.</h2>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card glass" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="card-image-wrapper">
                <img src={program.image} alt={program.title} className="program-image" />
                <div className={`icon-badge ${index === 1 ? 'mca-icon' : 'text-primary'}`}>
                  {program.icon}
                </div>
              </div>
              <div className="program-card-body">
                <div className="card-top" style={{marginTop: '1.5rem'}}>
                  <h3 className="program-title">{program.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(66, 133, 244, 0.1)', color: '#4285F4', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>{program.duration}</span>
                    <span style={{ background: 'rgba(0,0,0,0.05)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '500' }}>Elig: {program.eligibility}</span>
                  </div>
                </div>
                <div className="card-features">
                  <h4 className="feature-title">Key Highlights</h4>
                  <ul>
                    {program.features.map((feature, fIndex) => (
                      <li key={fIndex}><CheckCircle2 size={16} className="text-primary" /> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-bottom">
                  <a href="#admissions" className="btn btn-primary full-width">
                    Apply Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
