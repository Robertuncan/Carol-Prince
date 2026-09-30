import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

/**
 * Services Section:
 * - Elevated grid layout of image cards
 * - 3 across on desktop, 2 on tablet, 1 on mobile
 * - Consistent aspect ratios, tonal hover zoom
 * - Clicking a card pre-selects the service in the contact form
 */
export default function Services({ onSelectService }) {
  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.servicesHeading.eyebrow}
          title={business.servicesHeading.title}
          description={business.servicesHeading.description}
          align="left"
        />

        <div className="grid-services">
          {business.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
