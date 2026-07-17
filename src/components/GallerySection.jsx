import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './GallerySection.css';

const GallerySection = () => {
  const campusImages = [
    '/hero-bg-compressed.webp',
    '/DSC08273.webp',
    '/1-compressed.webp',
    '/DSC08521.webp',
    '/new5.webp',
    '/new6.webp',
    '/new9.webp',
    '/DSC02917.webp',
    '/DSC02968.webp',
    '/for-poster.webp'
  ];

  return (
    <section id="campus" className="section gallery-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <p className="section-subtitle" style={{ color: '#eab308', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            Life at Campus
          </p>
          <h2 className="section-title">Experience Our Vibrant Campus</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="campus-swiper"
          >
            {campusImages.map((src, index) => (
              <SwiperSlide key={index} className="campus-slide">
                <img src={src} alt={`Campus Image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
