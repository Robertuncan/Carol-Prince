import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Contact Section:
 * - Direct contact cards: WhatsApp Direct, Phone Call, Directions
 * - Fully styled, comfortable contact form with validation and instant feedback
 * - Supports pre-selection of service from the Services grid
 * - All content sourced from business.js
 */
export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.title}
          description={business.contact.description}
          align="left"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Direct Contact Methods & Address */}
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-rest)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-24)',
              }}
            >
              {/* WhatsApp Direct Action */}
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  {business.contact.whatsappLabel}
                </span>
                <p
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-12)',
                  }}
                >
                  {business.phoneDisplay}
                </p>
                <Button
                  href={business.whatsappLink}
                  isExternal={true}
                  variant="primary"
                  size="sm"
                >
                  {business.ctas.primary.label}
                </Button>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--color-borderLight)' }} />

              {/* Telephone Action */}
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  {business.contact.phoneLabel}
                </span>
                <p
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-12)',
                  }}
                >
                  {business.phoneDisplay}
                </p>
                <Button
                  href={business.phoneLink}
                  isExternal={true}
                  variant="outline"
                  size="sm"
                >
                  {business.ctas.callNow.label}
                </Button>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--color-borderLight)' }} />

              {/* Location & Directions */}
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  {business.contact.addressLabel}
                </span>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-12)',
                  }}
                >
                  {business.address}
                </p>
                <Button
                  href={business.googleMapsLink}
                  isExternal={true}
                  variant="secondary"
                  size="sm"
                >
                  {business.ctas.directions.label}
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-32)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-rest)',
            }}
          >
            {isSubmitted ? (
              <div
                style={{
                  padding: 'var(--space-32)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: 'var(--space-16)',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  Inquiry Received
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-24)',
                  }}
                >
                  {business.contact.form.successMessage}
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', service: '', message: '' });
                  }}
                  variant="outline"
                  size="sm"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-20)' }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {business.contact.form.nameLabel} *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={business.contact.form.namePlaceholder}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-button)',
                      border: '1px solid var(--color-border)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {business.contact.form.phoneLabel} *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={business.contact.form.phonePlaceholder}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-button)',
                      border: '1px solid var(--color-border)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {business.contact.form.serviceLabel}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-button)',
                      border: '1px solid var(--color-border)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      outline: 'none',
                    }}
                  >
                    <option value="">General Public Relations Inquiry</option>
                    {business.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {business.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={business.contact.form.messagePlaceholder}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-button)',
                      border: '1px solid var(--color-border)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {isSubmitting ? business.contact.form.submittingText : business.contact.form.submitButton}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
