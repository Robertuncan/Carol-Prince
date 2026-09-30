import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * FAQ Component:
 * Clean, accessible accordion for PR advisory questions.
 * Sourced entirely from business.js.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '880px' }}>
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.title}
          align="center"
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
            marginTop: 'var(--space-32)',
          }}
        >
          {business.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  backgroundColor: 'var(--color-surface)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                  boxShadow: isOpen ? 'var(--shadow-rest)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: 'var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: 'var(--space-16)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.question}
                  </span>
                  
                  {/* Plus/minus indicator */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                      color: isOpen ? '#ffffff' : 'var(--color-text)',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      flexShrink: 0,
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-24) var(--space-24)',
                      borderTop: '1px solid var(--color-borderLight)',
                      paddingTop: 'var(--space-16)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 'var(--line-height-body)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
