import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials Section:
 * Rendered ONLY if real testimonials exist in business.js.
 * If empty, returns null cleanly without creating empty placeholders or filler.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Client Endorsements"
          title="What Our Clients Say"
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-rest)',
              }}
            >
              <blockquote
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 'var(--line-height-body)',
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-24)',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </blockquote>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-text)',
                  }}
                >
                  {t.author}
                </strong>
                {t.role && (
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {t.role}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
