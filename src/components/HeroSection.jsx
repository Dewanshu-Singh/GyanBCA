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
  const [showBanner, setShowBanner] = useState(true);

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

      {showBanner && (
        <div className="banner-overlay">
          <div className="banner-content square-banner animate-fade-up">
            <button className="banner-close" onClick={() => setShowBanner(false)}>×</button>
            
            <div className="square-banner-img-container">
              <img src="/web-banner.webp" alt="Special Offer Banner" className="clear-banner-img" />
            </div>
            
            <div className="square-banner-footer">
              <button className="btn btn-accent banner-btn" onClick={() => {
                setShowBanner(false);
                document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <div className="badge mb-4">Admissions Open 2026</div>
          <h1 className="hero-title">
            Premier BCA & MCA Programs at <br/>
            <span className="hero-text-gradient">Gyan Vihar University</span>
          </h1>

          
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
            <a href="/Learning Centre of Excellence - google.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-btn hover-lift">
              Download Brochure
            </a>
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
