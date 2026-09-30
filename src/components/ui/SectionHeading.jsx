import React from 'react';

/**
 * SectionHeading adhering strictly to the typography and layout rules.
 * Small caps eyebrow + clamp-scaled H2 + bounded paragraph width.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={className}
      style={{
        textAlign: isCentered ? 'center' : 'left',
        marginBottom: 'var(--space-48)',
        maxWidth: isCentered ? '780px' : '720px',
        marginLeft: isCentered ? 'auto' : '0',
        marginRight: isCentered ? 'auto' : '0',
      }}
    >
      {eyebrow && (
        <span
          className={`section-eyebrow ${onDark ? 'on-dark' : ''}`}
          style={{
            display: 'inline-block',
            marginBottom: 'var(--space-16)',
            color: onDark ? '#ffffff' : 'var(--color-accent)',
          }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          style={{
            color: onDark ? '#ffffff' : 'var(--color-text)',
            marginBottom: description ? 'var(--space-16)' : '0',
            textWrap: 'balance',
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            fontSize: 'var(--text-base-desktop)',
            color: onDark ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-text-muted)',
            margin: isCentered ? '0 auto' : '0',
            lineHeight: 'var(--line-height-body)',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
