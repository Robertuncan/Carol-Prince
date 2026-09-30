import React from 'react';

/**
 * Reusable Button component respecting the strict design system.
 * Supports anchor link or button semantics, with accessible focus and hover states.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'white' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  isExternal = false,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: 'var(--radius-button)',
    transition: 'all var(--transition-fast)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    letterSpacing: '-0.01em',
    lineHeight: 1,
    border: '1px solid transparent',
  };

  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem',
      height: '38px',
    },
    md: {
      padding: '12px 24px',
      fontSize: '1rem',
      height: '46px',
    },
    lg: {
      padding: '16px 32px',
      fontSize: '1.0625rem',
      height: '54px',
    },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-secondary)',
      borderColor: 'var(--color-primary)',
      boxShadow: 'var(--shadow-rest)',
    },
    secondary: {
      backgroundColor: 'var(--color-bg-alt)',
      color: 'var(--color-text)',
      borderColor: 'var(--color-border)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
      borderColor: 'var(--color-border)',
    },
    white: {
      backgroundColor: '#ffffff',
      color: '#0a0a0c',
      borderColor: '#ffffff',
      boxShadow: 'var(--shadow-rest)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
      borderColor: 'transparent',
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const getHoverStyle = () => {
    if (disabled) return {};
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#1e293b',
          borderColor: '#1e293b',
          transform: 'translateY(-1px)',
          boxShadow: 'var(--shadow-hover)',
        };
      case 'white':
        return {
          backgroundColor: '#f1f5f9',
          transform: 'translateY(-1px)',
          boxShadow: 'var(--shadow-hover)',
        };
      case 'secondary':
      case 'outline':
        return {
          borderColor: 'var(--color-primary)',
          color: 'var(--color-primary)',
          backgroundColor: '#ffffff',
          transform: 'translateY(-1px)',
        };
      case 'ghost':
        return {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        };
      default:
        return {};
    }
  };

  const combinedStyle = {
    ...baseStyle,
    ...sizes[size],
    ...variants[variant],
    ...(isHovered ? getHoverStyle() : {}),
  };

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}
