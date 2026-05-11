import { useEffect, useMemo } from 'react';
import { posts } from '@/content/posts';
import { site } from '@/content/site';
import PostListPage from '@/components/PostListPage';
import PostCard from '@/components/PostCard';
import SectionLabel from '@/components/SectionLabel';
import { setDocumentMeta } from '@/lib/format';

export default function HomePage() {
  useEffect(() => {
    setDocumentMeta(
      `${site.name} — ${site.tagline}`,
      site.description,
    );
  }, []);

  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  const hero = sorted.find(p => p.sticky) ?? sorted[0];
  const rest = sorted.filter(p => p.id !== hero?.id);

  return (
    <PostListPage
      title={site.name}
      subtitle={site.tagline}
      posts={rest}
      heroBefore={
        hero && (
          <div className="mb-4">
            <SectionLabel>Featured</SectionLabel>
            <PostCard post={hero} variant="hero" />
          </div>
        )
      }
    />
  );
}
