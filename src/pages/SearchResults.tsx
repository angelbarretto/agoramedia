import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { searchPosts } from '@/lib/searchPosts';
import PostListPage from '@/components/PostListPage';
import { setDocumentMeta } from '@/lib/format';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = (params.get('q') ?? '').trim();
  const [draft, setDraft] = useState(q);
  const navigate = useNavigate();

  useEffect(() => {
    setDocumentMeta(
      q ? `Search: "${q}" | Agora Media` : 'Search | Agora Media',
      q ? `Search results for "${q}".` : 'Search Agora Media stories.',
    );
    setDraft(q);
  }, [q]);

  const results = useMemo(() => (q ? searchPosts(q) : []), [q]);

  if (!q) {
    return (
      <div className="max-w-2xl mx-auto px-5 py-20">
        <h1 className="font-display text-4xl mb-8">Search Agora Media</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (draft.trim()) navigate(`/search?q=${encodeURIComponent(draft.trim())}`);
          }}
          className="flex items-center gap-3 border border-brand-border px-4 py-3"
        >
          <Search size={16} className="text-brand-muted" />
          <input
            autoFocus
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none"
          />
          <button
            type="submit"
            className="text-xs uppercase tracking-widest px-3 py-1.5 bg-brand-text text-brand-bg"
          >
            Go
          </button>
        </form>
      </div>
    );
  }

  return (
    <PostListPage
      title={`Search: "${q}"`}
      subtitle={`${results.length} ${results.length === 1 ? 'story' : 'stories'} found.`}
      posts={results}
    />
  );
}
