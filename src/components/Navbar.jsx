import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

/**
 * Navbar Component:
 * - Brand wordmark (single text element)
 * - Clean text navigation links with subtle hover underlines
 * - Primary CTA button ("Message on WhatsApp")
 * - Sticky, responsive with working mobile drawer
 * - Immediate readability on load over hero imagery with subtle protective surface
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--color-border)' : 'rgba(226, 232, 240, 0.7)'}`,
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {business.name}
        </a>

        {/* Zone 2: 4-5 Clean text navigation links (Desktop) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
          className="desktop-nav"
        >
          {business.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                textDecoration: 'none',
                position: 'relative',
                padding: '6px 0',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-16)',
          }}
        >
          <div className="desktop-cta">
            <Button
              href={business.ctas.primary.href}
              isExternal={business.ctas.primary.isExternal}
              variant="primary"
              size="sm"
            >
              {business.ctas.primary.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--color-primary)',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--color-border)',
            boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.08)',
            padding: 'var(--space-24) var(--space-24) var(--space-32)',
          }}
          className="mobile-drawer"
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-16)',
              marginBottom: 'var(--space-24)',
            }}
          >
            {business.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--color-borderLight)',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)',
            }}
          >
            <Button
              href={business.ctas.primary.href}
              isExternal={business.ctas.primary.isExternal}
              variant="primary"
              size="md"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMobileMenu}
            >
              {business.ctas.primary.label}
            </Button>
            <Button
              href={business.phoneLink}
              isExternal={true}
              variant="outline"
              size="md"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMobileMenu}
            >
              Call {business.phoneDisplay}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
        @media (max-width: 819px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
