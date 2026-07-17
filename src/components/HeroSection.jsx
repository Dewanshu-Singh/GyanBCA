import React, { useState } from 'react';
import { BookOpen, Users, Trophy, Send } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'BCA',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our admission counselor will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: 'BCA' });
  };

  return (
    <section id="home" className="hero">
      {/* Background with gradient and subtle texture */}
      <div className="hero-bg"></div>
      
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <div className="badge mb-4">Admissions Open 2026</div>
          <h1 className="hero-title">
            Shape Your Future at <br/>
            <span className="hero-text-gradient">Gyan Vihar University</span>
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
            Join the premier institution for BCA & MCA programs in Jaipur. 
            Experience world-class education, cutting-edge facilities, and 
            outstanding placement opportunities.
          </p>
          
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
            <a href="/Learning Centre of Excellence - google.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn hover-lift">
              Download Brochure
            </a>
          </div>

          <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-item">
              <Users className="stat-icon" />
              <div>
                <h4 className="stat-number">10k+</h4>
                <p className="stat-label">Alumni Network</p>
              </div>
            </div>
            <div className="stat-item">
              <Trophy className="stat-icon" />
              <div>
                <h4 className="stat-number">A++</h4>
                <p className="stat-label">NAAC Accredited</p>
              </div>
            </div>
            <div className="stat-item">
              <BookOpen className="stat-icon" />
              <div>
                <h4 className="stat-number">95%</h4>
                <p className="stat-label">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div id="admissions" className="hero-form-wrapper" data-aos="fade-up" data-aos-delay="400">
          <div className="hero-form-card glass">
            <h3 className="hero-form-title">Apply for 2026 Batch</h3>
            <form onSubmit={handleSubmit} className="hero-admission-form">
              <div className="hero-form-group">
                <label htmlFor="hero-name">Full Name</label>
                <input 
                  type="text" 
                  id="hero-name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your Name"
                />
              </div>

              <div className="hero-form-group">
                <label htmlFor="hero-email">Email Address</label>
                <input 
                  type="email" 
                  id="hero-email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="text@example.com"
                />
              </div>

              <div className="hero-form-group">
                <label htmlFor="hero-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="hero-phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="hero-form-group">
                <label htmlFor="hero-program">Interested Program</label>
                <select 
                  id="hero-program" 
                  name="program" 
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="BCA">BCA - Bachelor of Computer Applications</option>
                  <option value="MCA">MCA - Master of Computer Applications</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary submit-btn hero-submit-btn hover-lift">
                Apply Now <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
