// Site-wide brand constants for Agora Media.

export const site = {
  name: 'Agora Media',
  tagline: 'Collective Intelligence for Systemic Renaissance',
  description:
    `Agora Media is an innovation intelligence news agency highlighting novel emerging technologies in tech, health and wellness, defense, entertainment, and cross\u2011industry discoveries. Through rigorous reporting, data research, and executive briefings, we guide Fortune 500s, governments and organizations accelerating systemic renaissance on a global scale.`,
  contactEmail: 'info@theagoramedia.com',
  contactPhone: '+1 424 384 7249',
  regions: ['Africa', 'Asia', 'Australia', 'North America', 'South America'],
  copyrightLine: '\u00a9 The Agora Media\u2122 2026',
  nav: [
    { label: 'Home',    href: '/' },
    { label: 'Media',   href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
} as const;
