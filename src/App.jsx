import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

/**
 * Carol Prince — Public Relations Firm
 * Single, cohesive, premium one-page experience.
 */
export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
