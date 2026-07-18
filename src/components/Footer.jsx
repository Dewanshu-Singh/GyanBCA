import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/sgvu-logo.png" alt="SGVU Logo" className="footer-logo-img" />
              <h3>SGVU Learning Centre of Excellence</h3>
            </div>
            <p className="footer-desc">
              India's first Google-powered tech degree — where your BCA isn't just a certificate, it's a career launchpad.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/sureshgyanvihar.university?igsh=Z3lmYzlqbTJjOWo0" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com/share/1C4Cf1TkNF/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://www.linkedin.com/school/sgvu/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://www.youtube.com/@SGVUYoutube" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Youtube"><FaYoutube size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Important Links</h4>
            <ul className="footer-links">
              <li><a href="#specialisations">Programs</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#campus">Life at SGVU</a></li>
              <li><a href="#placements">Placements</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Trust Badges</h4>
            <div className="footer-badges">
              <div className="footer-badge">
                <span className="badge-icon">🏅</span> NAAC A+ Accredited
              </div>
              <div className="footer-badge">
                <span className="badge-icon">🏛️</span> UGC Approved
              </div>
              <div className="footer-badge">
                <span className="badge-icon">☁️</span> Google Cloud Integrated
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Details</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 1800 200 1234</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>admissions@gyanvihar.org</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Mahal, Jagatpura, Jaipur,<br />Rajasthan 302017</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Suresh Gyan Vihar University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
