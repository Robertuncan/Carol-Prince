import React from 'react';
import { business } from '../config/business.js';

/**
 * Footer Component:
 * - Wordmark
 * - Calm summary
 * - Contact links (WhatsApp, Phone, Directions)
 * - Navigation links
 * - Current year copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0a0a0c',
        color: '#ffffff',
        borderTop: '1px solid #1e293b',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-64)',
          }}
        >
          {/* Brand Info */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                display: 'block',
                marginBottom: 'var(--space-12)',
              }}
            >
              {business.name}
            </span>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.footer.summary}
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              {business.footer.locationNote}
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#ffffff',
                display: 'block',
                marginBottom: 'var(--space-16)',
              }}
            >
              Navigation
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-12)',
              }}
            >
              {business.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#ffffff',
                display: 'block',
                marginBottom: 'var(--space-16)',
              }}
            >
              Direct Inquiries
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-12)',
              }}
            >
              <a
                href={business.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                WhatsApp: {business.phoneDisplay}
              </a>
              <a
                href={business.phoneLink}
                style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                Tel: {business.phoneDisplay}
              </a>
              <a
                href={business.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                Find us in Ilford
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div
          style={{
            paddingTop: 'var(--space-32)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-16)',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <span>
            © {currentYear} {business.footer.copyright}
          </span>
          <span>
            {business.footer.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
