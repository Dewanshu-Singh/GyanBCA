import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus', href: '#campus' },
    { name: 'Admissions', href: '#admissions' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">
          <a href="#home" className="logo">
            <img src="/sgvu-logo.png" alt="Gyan Vihar University Logo" className="navbar-logo-img" />
          </a>
          <div className="navbar-extra-logos">
            <img src="/naac-logo.png" alt="NAAC A++" className="navbar-extra-img" />
            <img src="/nirf-logo.png" alt="NIRF" className="navbar-extra-img" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#admissions" className="btn btn-primary nav-btn">Apply Now</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          style={{ 
            color: isMobileMenuOpen ? 'white' : 'var(--primary-color)',
            position: 'relative',
            zIndex: 1001
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''} glass-dark`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#admissions" 
          className="btn btn-accent mobile-nav-btn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
