import React, { useState } from 'react';

/**
 * ServiceCard:
 * - 16px radius
 * - Image filling top with aspect-ratio 16/10
 * - Tonal hover zoom
 * - Title and 1-line description below
 * - Soft resting shadow and soft hover shadow
 * - Direct click triggers smooth scroll to contact or WhatsApp consultation
 */
export default function ServiceCard({
  service,
  onSelectService,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelectService && onSelectService(service.title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {/* Top Image Container */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-alt)',
        }}
      >
        {!imageError && service.image ? (
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 400ms ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1.0)',
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
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            {service.title}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: 'var(--space-24)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: 'var(--space-8)',
            letterSpacing: '-0.015em',
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.55,
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-16)',
            flexGrow: 1,
          }}
        >
          {service.description}
        </p>

        {/* Quiet text action affordance */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '0.875rem',
            fontWeight: 600,
            fontFamily: 'var(--font-display)',
            color: isHovered ? 'var(--color-primary)' : 'var(--color-text-muted)',
            transition: 'color var(--transition-fast)',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          Inquire about service
          <span
            style={{
              marginLeft: 'var(--space-8)',
              transition: 'transform var(--transition-fast)',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}
          >
            →
          </span>
        </div>
      </div>
    </article>
  );
}
