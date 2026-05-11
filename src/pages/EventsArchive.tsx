import { useEffect } from 'react';
import { posts } from '@/content/posts';
import PostListPage from '@/components/PostListPage';
import { setDocumentMeta } from '@/lib/format';

export default function EventsArchive() {
  useEffect(() => {
    setDocumentMeta('Media | Agora Media', 'All coverage — events, briefings, and analysis.');
  }, []);
  return (
    <PostListPage
      title="Media"
      subtitle="All coverage — events, briefings, and analysis from across our beats."
      posts={posts}
    />
  );
}
