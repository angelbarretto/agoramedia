// Auto-generated from WordPress export. Editable by hand if needed.
export interface Author {
  id: number;
  slug: string;
  name: string;
  description: string;
  avatar: string;
  url: string;
}

export const authors: Author[] = [
  {
    id: 3,
    slug: `agora-media`,
    name: `Agora Media`,
    description: `Agora  Media is an innovation intelligence news agency highlighting novel emerging technologies in tech, health and wellness, defense, entertainment, and cross‑industry discoveries. Through rigorous reporting, data research, and executive briefings, we guide Fortune 500s, governments and organizations accelerating systemic renaissance on a global scale.`,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/agora-media_avatar-96x96.png`,
    url: ``,
  },
  {
    id: 2,
    slug: `amywellington`,
    name: `Amy Wellington`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/11/amy-wellington_avatar_1-96x96.jpeg`,
    url: ``,
  },
  {
    id: 5,
    slug: `anubha`,
    name: `Dr Anubha Tripathi`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/dr-anubha-tripathi_avatar_1-96x96.jpeg`,
    url: ``,
  },
  {
    id: 6,
    slug: `dr-jens-gudmundsson`,
    name: `Dr Jens Gudmundsson`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/dr-jens-gudmundsson_avatar-96x96.jpeg`,
    url: ``,
  },
  {
    id: 7,
    slug: `nisha`,
    name: `Dr Nisha Money`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/dr-nisha-money_avatar-96x96.jpeg`,
    url: ``,
  },
  {
    id: 8,
    slug: `olivia`,
    name: `Dr Olivia Lesslar`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/dr-olivia-lesslar_avatar-96x96.png`,
    url: ``,
  },
  {
    id: 1,
    slug: `angelnoworries-fi`,
    name: `Elizabeth Angel`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/agora-media_avatar_1-96x96.png`,
    url: `http://theagoramedia.com`,
  },
  {
    id: 11,
    slug: `kim`,
    name: `Kim Henwood`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/kim-henwood_avatar-96x96.png`,
    url: ``,
  },
  {
    id: 13,
    slug: `thiago`,
    name: `Thiago Ferreira`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/thiago-ferreira_avatar-96x96.png`,
    url: ``,
  },
  {
    id: 4,
    slug: `tony-long`,
    name: `Tony Long`,
    description: ``,
    avatar: `https://theagoramedia.com/wp-content/uploads/2025/08/tony-long_avatar-96x96.jpeg`,
    url: ``,
  },
  {
    id: 19,
    slug: `uyen-pham`,
    name: `Uyen Pham`,
    description: ``,
    avatar: `https://secure.gravatar.com/avatar/637fd41a3b5c7f8785e54c0604a36910c2907ab771f311186952939ed5f5aaf7?s=96&d=mm&r=g`,
    url: ``,
  },
  {
    id: 16,
    slug: `yuviraaj-nasir`,
    name: `Yuviraaj Nasir`,
    description: ``,
    avatar: `https://secure.gravatar.com/avatar/7cef2c24f99d95867e942cc444df12e430f3c76f22df63a33a11731a6849be92?s=96&d=mm&r=g`,
    url: ``,
  },
];

export const authorBySlug = (slug: string): Author | undefined =>
  authors.find(a => a.slug === slug);
