import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'BCA',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    alert('Thank you for your interest! Our admission counselor will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: 'BCA', message: '' });
  };

  return (
    <section id="admissions" className="section admission-section">
      <div className="container">
        <div className="admission-container glass animate-fade-up">
          <div className="admission-content-wrapper">
            <div className="admission-content">
              <h2 className="section-title">Seats Are Limited for 2025–26. Don't Wait.</h2>
              <p className="admission-subtitle">
                The best time to apply was yesterday. The next best time is right now.
              </p>
            </div>
            
            <div className="admission-image-card">
              <img src="/new5.webp" alt="Campus Students" className="admission-image" />
              <div className="contact-info-overlay glass">
                <div className="info-item">
                  <strong>Email:</strong> admissions@gyanvihar.org
                </div>
                <div className="info-item">
                  <strong>Phone:</strong> +91 1800 200 1234
                </div>
                <div className="info-item">
                  <strong>Location:</strong> Mahal, Jagatpura, Jaipur, Rajasthan
                </div>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="admission-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="program">Interested Program *</label>
                <select 
                  id="program" 
                  name="program" 
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="BCA - Google Cloud Program (GCP)">BCA — Google Cloud Program (GCP)</option>
                  <option value="BCA - Data Science (with ICA)">BCA — Data Science (with ICA)</option>
                  <option value="BCA - Cyber Security">BCA — Cyber Security</option>
                  <option value="BCA - Full Stack Development">BCA — Full Stack Development</option>
                  <option value="BCA - AI & Machine Learning">BCA — AI & Machine Learning</option>
                  <option value="Integrated MCA">Integrated MCA</option>
                  <option value="MCA (Masters in Computer Application)">MCA (Masters in Computer Application)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Reserve My Seat <Send size={18} />
              </button>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center', lineHeight: '1.4' }}>
                Admissions are open now. Our counsellor will get in touch within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
