import { Link, useSearchParams } from 'react-router-dom';
import type { Post } from '@/content/posts';
import PostCard from './PostCard';
import Sidebar from './Sidebar';
import SectionLabel from './SectionLabel';

interface PostListPageProps {
  title: string;
  subtitle?: string;
  posts: Post[];
  pageSize?: number;
  heroBefore?: React.ReactNode;
  showSidebar?: boolean;
}

export default function PostListPage({
  title,
  subtitle,
  posts,
  pageSize = 10,
  heroBefore,
  showSidebar = true,
}: PostListPageProps) {
  const [params, setParams] = useSearchParams();
  const currentPage = Math.max(1, parseInt(params.get('page') ?? '1', 10) || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const slice = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const setPage = (n: number) => {
    const next = new URLSearchParams(params);
    if (n <= 1) next.delete('page');
    else next.set('page', String(n));
    setParams(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 lg:py-14">
      <header className="mb-10">
        <h1 className="font-display text-3xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 text-brand-muted max-w-2xl">{subtitle}</p>}
      </header>

      <div className={`grid gap-10 ${showSidebar ? 'lg:grid-cols-[2fr_1fr]' : ''}`}>
        <div>
          {heroBefore}
          <SectionLabel>The Latest</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {slice.map(p => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-14 flex items-center justify-center gap-2 text-sm">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setPage(currentPage - 1)}
                className="px-3 py-1.5 border border-brand-border disabled:opacity-40 hover:bg-brand-surface"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`px-3 py-1.5 border ${
                    n === currentPage
                      ? 'border-brand-text bg-brand-text text-brand-bg'
                      : 'border-brand-border hover:bg-brand-surface'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => setPage(currentPage + 1)}
                className="px-3 py-1.5 border border-brand-border disabled:opacity-40 hover:bg-brand-surface"
              >
                Next →
              </button>
            </nav>
          )}

          {slice.length === 0 && (
            <p className="text-brand-muted py-12 text-center">No stories yet.</p>
          )}
        </div>

        {showSidebar && <Sidebar />}
      </div>
    </div>
  );
}
