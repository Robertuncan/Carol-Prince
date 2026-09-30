import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * WhyChooseUs Section:
 * - 3 concise trust points drawn ONLY from USPs, hours, and location provided.
 * - Human editorial numbering (01, 02, 03)
 * - Clean layout, zero fake statistics or arbitrary cockpits
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.title}
          description={business.whyChooseUs.subtitle}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-48)',
          }}
        >
          {business.whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'var(--space-32)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-rest)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Clean editorial index (no mechanical comments or slashes) */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: 'var(--space-16)',
                }}
              >
                {point.number}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-12)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.015em',
                }}
              >
                {point.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 'var(--line-height-body)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
