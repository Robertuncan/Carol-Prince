/**
 * Carol Prince - Public Relations Firm
 * ALL business content, colors, services, and image URLs live exclusively in this file.
 * Non-technical owners can edit this file to update the entire website.
 */

export const business = {
  name: "Carol Prince",
  type: "Public Relations Firm",
  tagline: "Building Brands. Growing Visibility.",
  city: "Ilford, England",
  address: "61 Glenham Drive, Ilford, England, IG2 6SF",
  phone: "447915940129",
  phoneDisplay: "+44 7915 940129",
  phoneLink: "tel:447915940129",
  whatsapp: "447915940129",
  whatsappLink: "https://wa.me/447915940129",
  email: null, // Omitted cleanly as no email was provided
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=61+Glenham+Drive+Ilford+England+IG2+6SF",
  brandStyle: "Modern SaaS",
  
  // Design system color palette (Primary: Black, Secondary: White, Modern SaaS styling)
  colors: {
    primary: "#0a0a0c",
    secondary: "#ffffff",
    accent: "#111827",
    background: "#ffffff",
    surface: "#ffffff",
    surfaceMuted: "#f8f9fa",
    surfaceAlt: "#f3f4f6",
    text: "#0f172a",
    textMuted: "#64748b",
    textSubtle: "#94a3b8",
    border: "#e2e8f0",
    borderLight: "#f1f5f9",
    borderDark: "#1e293b",
    darkSurface: "#0f1115",
    darkText: "#f8fafc",
    darkTextMuted: "#94a3b8"
  },

  // Navigation items
  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Call to Actions
  ctas: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447915940129",
      isExternal: true
    },
    secondary: {
      label: "Contact Us",
      href: "#contact",
      isExternal: false
    },
    callNow: {
      label: "Call Now",
      href: "tel:447915940129",
      isExternal: true
    },
    directions: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=61+Glenham+Drive+Ilford+England+IG2+6SF",
      isExternal: true
    }
  },

  // Hero Section
  hero: {
    eyebrow: "Ilford, England · Public Relations Firm",
    title: "Building Brands. Growing Visibility.",
    description: "Strategic public relations, high-impact media engagement, and reputation stewardship designed to position your brand with enduring authority.",
    trustLine: "Direct PR counsel via WhatsApp & phone · 61 Glenham Drive, Ilford",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Executive boardroom and modern agency workspace"
  },

  // About Section
  about: {
    eyebrow: "About Carol Prince",
    title: "Clear, deliberate public relations for modern brands.",
    lead: "Based at 61 Glenham Drive in Ilford, England, Carol Prince provides dedicated public relations and strategic communications advisory.",
    paragraph1: "We believe meaningful brand recognition is built through sustained, high-credibility relationships with media, industry stakeholders, and the public. We help brands articulate their real story without hype.",
    paragraph2: "From targeted press pitching and executive visibility to proactive reputation management, our practice delivers tailored attention and direct partner accessibility every step of the way.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Carol Prince PR team in strategic media consultation"
  },

  // Main Services (Curated elevated layout)
  servicesHeading: {
    eyebrow: "Our Practice Areas",
    title: "Full-Spectrum Public Relations & Brand Growth",
    description: "Tailored communication strategies to establish your presence, secure authoritative coverage, and safeguard your reputation."
  },
  
  services: [
    {
      id: "pr",
      title: "Public Relations",
      description: "End-to-end communication frameworks positioning your brand with clarity and credibility across key markets.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
      featured: true
    },
    {
      id: "brand-management",
      title: "Brand Management",
      description: "Strategic stewardship that protects brand identity, values, and perception across all audience touchpoints.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
      featured: true
    },
    {
      id: "media-relations",
      title: "Media Relations",
      description: "Direct pitching and relationship-building with broadcast, national, trade, and regional journalists.",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1600&q=80",
      featured: true
    },
    {
      id: "digital-pr",
      title: "Digital PR",
      description: "Online PR campaigns driving authoritative mentions, digital presence, and high-value brand association.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "reputation-management",
      title: "Online Reputation Management",
      description: "Proactive narrative shaping, monitoring, and crisis mitigation to protect stakeholder confidence.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Structured editorial calendars and messaging roadmaps built to engage target decision-makers.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "press-release",
      title: "Press Release Writing",
      description: "Journalist-ready press releases crafted with precision, strong angles, and syndication-ready copy.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "brand-promotion",
      title: "Brand Promotion",
      description: "Multi-channel promotional initiatives amplifying your brand voice in front of targeted commercial sectors.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Cohesive social channels aligned with strategic PR narratives to nurture active, loyal communities.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "seo-services",
      title: "SEO Services",
      description: "Organic search optimization harmonizing editorial media mentions with technical search discoverability.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      description: "High-value articles and thought-leadership publications establishing executive industry authority.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "online-visibility",
      title: "Online Visibility Growth",
      description: "Integrated visibility growth programs connecting PR, search, and digital channels for sustained momentum.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
    }
  ],

  // Why Choose Us (Strictly from provided USPs, location, and operational reality)
  whyChooseUs: {
    eyebrow: "Why Carol Prince",
    title: "Dedicated, Agile PR Grounded in Strategic Focus",
    subtitle: "We believe in direct relationships, clear accountability, and pragmatic communications work.",
    points: [
      {
        number: "01",
        title: "Direct Principal Access",
        description: "Work directly with senior PR practitioners. Fast answers and responsive campaign execution via WhatsApp and direct call without corporate bureaucracy."
      },
      {
        number: "02",
        title: "Ilford Base & National Vision",
        description: "Headquartered on Glenham Drive in Ilford, England, providing dedicated local commitment with the capability to orchestrate regional and national PR campaigns."
      },
      {
        number: "03",
        title: "Unified Brand & Reputation Focus",
        description: "We connect media relations with digital PR, SEO, and reputation defense so every press mention builds measurable, long-term brand equity."
      }
    ]
  },

  // Testimonials / Reviews: Omitted cleanly as {{TESTIMONIALS}} contains no real reviews
  testimonials: [],

  // FAQ Section (Genially helpful PR advisory questions)
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Our PR Services",
    items: [
      {
        question: "How does Carol Prince approach a new PR engagement?",
        answer: "We begin with a focused discovery conversation to evaluate your current brand perception, key milestones, and target publications. We then develop a concrete narrative angle, draft essential press materials, and initiate targeted media outreach."
      },
      {
        question: "What types of businesses do you represent?",
        answer: "We represent emerging brands, corporate executives, professional practices, and local growth businesses seeking to establish credible public visibility and protect their industry reputation."
      },
      {
        question: "How do we get started?",
        answer: "The quickest way is to message us directly on WhatsApp (+44 7915 940129) or call us. We will discuss your current objectives and outline the recommended approach."
      },
      {
        question: "Can you help with digital PR and reputation management simultaneously?",
        answer: "Yes. Our practice combines classic press outreach with online visibility growth, SEO alignment, and reputation monitoring so your brand maintains a strong, credible digital footprint."
      }
    ]
  },

  // Contact Section
  contact: {
    eyebrow: "Direct Consultation",
    title: "Ready to grow your brand's visibility?",
    description: "Connect directly with Carol Prince. Message us on WhatsApp for the fastest response or submit an inquiry using the form below.",
    addressLabel: "Office Address",
    phoneLabel: "Telephone",
    whatsappLabel: "WhatsApp Direct",
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Sarah Jenkins",
      phoneLabel: "Phone Number",
      phonePlaceholder: "e.g. +44 7915 940129",
      serviceLabel: "Service of Interest",
      messageLabel: "Tell us about your brand or PR goals",
      messagePlaceholder: "Briefly outline your brand, upcoming news, or visibility goals...",
      submitButton: "Send Inquiry",
      submittingText: "Submitting...",
      successMessage: "Thank you for reaching out. We have received your inquiry and will be in touch shortly."
    }
  },

  // Footer
  footer: {
    tagline: "Building Brands. Growing Visibility.",
    summary: "Dedicated public relations, media engagement, and brand management based in Ilford, England.",
    copyright: "Carol Prince. All rights reserved.",
    locationNote: "61 Glenham Drive, Ilford, England, IG2 6SF"
  }
};
