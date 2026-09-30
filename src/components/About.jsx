import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

/**
 * About Section:
 * - Refined two-column editorial layout
 * - High-resolution imagery with 16px border-radius
 * - Plain, warm, specific copywriting representing Carol Prince in Ilford
 */
export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Image container */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-rest)',
              backgroundColor: 'var(--color-bg-alt)',
              aspectRatio: '4 / 3',
            }}
          >
            {!imgError ? (
              <img
                src={business.about.image}
                alt={business.about.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-bg-alt)',
                  color: 'var(--color-text-muted)',
                }}
              >
                Carol Prince PR
              </div>
            )}
            
            {/* Subtle accent border */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: 'var(--radius-card)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Column 2: Text Narrative */}
          <div>
            <span
              className="section-eyebrow"
              style={{ color: 'var(--color-accent)' }}
            >
              {business.about.eyebrow}
            </span>

            <h2
              style={{
                marginBottom: 'var(--space-24)',
                letterSpacing: '-0.025em',
              }}
            >
              {business.about.title}
            </h2>

            <p
              style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.about.lead}
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--line-height-body)',
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.about.paragraph1}
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--line-height-body)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {business.about.paragraph2}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-16)',
                alignItems: 'center',
              }}
            >
              <Button
                href={business.ctas.primary.href}
                isExternal={business.ctas.primary.isExternal}
                variant="primary"
                size="md"
              >
                {business.ctas.primary.label}
              </Button>
              <Button
                href={business.phoneLink}
                isExternal={true}
                variant="outline"
                size="md"
              >
                Call {business.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
