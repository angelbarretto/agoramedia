import { posts, type Post } from '@/content/posts';
import { stripHtml } from './format';

export function searchPosts(query: string): Post[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return posts.filter(p => {
    const haystack = [
      p.title,
      p.excerpt,
      stripHtml(p.contentHtml),
      p.authorName,
      p.categorySlugs.join(' '),
      p.tagSlugs.join(' '),
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}
