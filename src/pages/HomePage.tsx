import { useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { posts } from '@/content/posts';
import { site } from '@/content/site';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import SectionLabel from '@/components/SectionLabel';
import { setDocumentMeta } from '@/lib/format';

const PER_PAGE = 10;

export default function HomePage() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, parseInt(params.get('page') ?? '1', 10) || 1);

  useEffect(() => {
    setDocumentMeta(`${site.name} — ${site.tagline}`, site.description);
  }, []);

  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  const hero = useMemo(
    () => sorted.find(p => p.sticky) ?? sorted[0],
    [sorted],
  );
  const rest = useMemo(
    () => sorted.filter(p => p.id !== hero?.id),
    [sorted, hero],
  );

  // Page 1: curated two-section layout matching theagoramedia.com
  // ("The Latest" = hero + 4 recent, then "Featured" = next 6).
  // Pages 2+: flat archive-style grid so deep links keep working.
  const latest = rest.slice(0, 4);
  const featured = rest.slice(4, 10);
  const totalPages = Math.max(1, Math.ceil(rest.length / PER_PAGE));
  const deepSlice = rest.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const setPage = (n: number) => {
    const next = new URLSearchParams(params);
    if (n <= 1) next.delete('page');
    else next.set('page', String(n));
    setParams(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 lg:py-14">
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_312px]">
        <div>
          {page === 1 ? (
            <>
              <SectionLabel>The Latest</SectionLabel>
              {hero && (
                <div className="mb-12">
                  <PostCard post={hero} variant="hero" />
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {latest.map(p => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>

              {featured.length > 0 && (
                <>
                  <SectionLabel>Featured</SectionLabel>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                    {featured.map(p => (
                      <PostCard key={p.id} post={p} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <SectionLabel>The Latest</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {deepSlice.map(p => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
            </>
          )}

          {totalPages > 1 && (
            <nav className="mt-14 flex items-center justify-center gap-2 text-sm">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
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
                    n === page
                      ? 'border-brand-text bg-brand-text text-brand-bg'
                      : 'border-brand-border hover:bg-brand-surface'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1.5 border border-brand-border disabled:opacity-40 hover:bg-brand-surface"
              >
                Next →
              </button>
            </nav>
          )}

          <p className="mt-12">
            <Link
              to="/events"
              className="text-xs uppercase tracking-[0.2em] text-brand-muted hover:text-brand-text"
            >
              Browse all coverage →
            </Link>
          </p>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
