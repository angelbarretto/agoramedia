import { categories } from '@/content/categories';

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export function formatDate(iso: string): string {
  return dateFmt.format(new Date(iso));
}

const ACCENTS = [
  'var(--badge-rose)',
  'var(--badge-teal)',
  'var(--badge-sage)',
  'var(--badge-beige)',
  'var(--badge-purple)',
  'var(--badge-tan)',
] as const;

export function categoryAccent(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return ACCENTS[Math.abs(h) % ACCENTS.length];
}

export function getCategoryName(slug: string): string {
  return categories.find(c => c.slug === slug)?.name ?? slug;
}

export function setDocumentMeta(title: string, description: string) {
  document.title = title;
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
}

export function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
