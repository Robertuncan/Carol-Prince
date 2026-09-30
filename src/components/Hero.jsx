import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

/**
 * Hero Section:
 * - min-height: 90vh
 * - High-end full-bleed background image with single tonal dark overlay
 * - Strict hierarchy: Eyebrow -> H1 -> Supporting line -> Primary + Secondary CTAs -> Trust line
 * - All content strictly sourced from business.js
 */
export default function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: 'var(--space-96)',
        backgroundColor: '#0a0a0c',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background image container with single dark tonal scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <img
          src={business.hero.backgroundImage}
          alt={business.hero.imageAlt}
          referrerPolicy="no-referrer"
          onLoad={() => setBgLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: bgLoaded ? 0.35 : 0.2,
            transform: 'scale(1.02)',
            transition: 'opacity 600ms ease',
          }}
        />
        {/* Subtle directional gradient overlay ensuring WCAG AAA legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10, 10, 12, 0.94) 0%, rgba(10, 10, 12, 0.85) 60%, rgba(10, 10, 12, 0.75) 100%)',
          }}
        />
      </div>

      {/* Hero Content Box */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1000px',
        }}
      >
        {/* Eyebrow: city + business type */}
        <div style={{ marginBottom: 'var(--space-24)' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.82)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'inline-block',
              }}
            />
            {business.hero.eyebrow}
          </span>
        </div>

        {/* Large confident H1 headline */}
        <h1
          style={{
            color: '#ffffff',
            marginBottom: 'var(--space-24)',
            maxWidth: '900px',
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
          }}
        >
          {business.hero.title}
        </h1>

        {/* Short supporting line */}
        <p
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: 'var(--space-48)',
            maxWidth: '680px',
          }}
        >
          {business.hero.description}
        </p>

        {/* Primary CTA + Secondary CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--space-16)',
            marginBottom: 'var(--space-48)',
          }}
        >
          <Button
            href={business.ctas.primary.href}
            isExternal={business.ctas.primary.isExternal}
            variant="white"
            size="lg"
          >
            {business.ctas.primary.label}
          </Button>

          <Button
            href={business.ctas.secondary.href}
            isExternal={business.ctas.secondary.isExternal}
            variant="outline"
            size="lg"
            style={{
              color: '#ffffff',
              borderColor: 'rgba(255, 255, 255, 0.35)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            {business.ctas.secondary.label}
          </Button>
        </div>

        {/* Quiet trust line below */}
        {business.hero.trustLine && (
          <div
            style={{
              paddingTop: 'var(--space-24)',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-16)',
            }}
          >
            <span
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {business.hero.trustLine}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
