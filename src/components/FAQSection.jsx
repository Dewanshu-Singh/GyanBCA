import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the eligibility for BCA at SGVU?',
      answer: 'The eligibility for the BCA program is 10+2 from a recognized board with a minimum of 50% aggregate marks.'
    },
    {
      question: 'What is the eligibility for MCA at SGVU?',
      answer: 'For the MCA program, candidates must have a graduation degree with Mathematics at the 10+2 level or graduation level, securing at least 50% marks.'
    },
    {
      question: 'How can I apply for admission?',
      answer: 'You can apply online by visiting our official website and filling out the admission form. Alternatively, you can contact our admission counselors for assistance.'
    },
    {
      question: 'What is the duration of the BCA and MCA programs?',
      answer: 'The BCA program has a duration of 3 years (6 semesters), whereas the MCA program is a 2-year (4 semesters) postgraduate program.'
    },
    {
      question: 'Are internships or industry training included in the curriculum?',
      answer: 'Yes, both BCA and MCA programs include mandatory internships and industry training to provide practical exposure and enhance employability.'
    },
    {
      question: 'Does SGVU offer placement support?',
      answer: 'Absolutely! SGVU has a dedicated placement cell that works closely with top IT companies to provide robust placement support and career guidance to our students.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="faq-wrapper" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer-wrapper" style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FAQSection;
