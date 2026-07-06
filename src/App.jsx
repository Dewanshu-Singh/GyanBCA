import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AuthorityStrip from './components/AuthorityStrip';
import GoogleAdvantage from './components/GoogleAdvantage';
import SpecialisationsSection from './components/SpecialisationsSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseSection from './components/WhyChooseSection';
import CareerPathways from './components/CareerPathways';
import PlacementsSection from './components/PlacementsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <GoogleAdvantage />
        <AuthorityStrip />
        <SpecialisationsSection />
        <ProgramsSection />
        <WhyChooseSection />
        <CareerPathways />
        <PlacementsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
