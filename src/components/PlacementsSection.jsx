import React from 'react';
import { TrendingUp, Building, Target } from 'lucide-react';
import './PlacementsSection.css';

const PlacementsSection = () => {
  return (
    <section id="placements" className="section placements-section">
      <div className="container">
        
        <div className="text-center" data-aos="fade-up">
          <p className="section-subtitle" style={{ color: '#eab308', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            Real Results
          </p>
          <h2 className="section-title">Don't Just Take Our Word For It.</h2>
        </div>

        <div className="placements-stats-bar" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-box">
            <TrendingUp size={32} className="stat-box-icon" />
            <div className="stat-box-content">
              <h4>₹8 LPA</h4>
              <p>Highest Package</p>
            </div>
          </div>
          <div className="stat-box">
            <Building size={32} className="stat-box-icon" />
            <div className="stat-box-content">
              <h4>50+</h4>
              <p>Top Recruiters</p>
            </div>
          </div>
          <div className="stat-box">
            <Target size={32} className="stat-box-icon" />
            <div className="stat-box-content">
              <h4>100%</h4>
              <p>Placement Assistance</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PlacementsSection;
