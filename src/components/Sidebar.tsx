import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { posts } from '@/content/posts';
import { categories } from '@/content/categories';
import { tags } from '@/content/tags';

function WidgetTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xs uppercase tracking-[0.25em] font-semibold pb-3 mb-4 border-b border-brand-border">
      {children}
    </h3>
  );
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function Sidebar() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');

  const archives = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of posts) {
      const key = p.date.slice(0, 7); // YYYY-MM
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .sort((a, b) => b[0].localeCompare(a[0]))
      .map(([key, count]) => {
        const [year, month] = key.split('-');
        return {
          key,
          year,
          month,
          label: `${MONTHS[parseInt(month, 10) - 1]} ${year}`,
          count,
        };
      });
  }, []);

  const popularTags = tags.slice(0, 20);
  const trendingTags = tags.slice(20, 30);

  return (
    <aside className="flex flex-col gap-10 text-sm">
      <section>
        <WidgetTitle>Archives</WidgetTitle>
        <ul className="flex flex-col gap-1.5 max-h-72 overflow-y-auto pr-2">
          {archives.map(a => (
            <li key={a.key}>
              <Link
                to={`/archive/${a.year}/${a.month}`}
                className="hover:text-brand-accent transition-colors"
              >
                {a.label} <span className="text-brand-muted">({a.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <WidgetTitle>Categories</WidgetTitle>
        <ul className="flex flex-col gap-1.5 max-h-96 overflow-y-auto pr-2">
          {categories.map(c => (
            <li key={c.slug}>
              <Link
                to={`/category/${c.slug}`}
                className="hover:text-brand-accent transition-colors"
              >
                {c.name} <span className="text-brand-muted">({c.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <WidgetTitle>Search</WidgetTitle>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
          }}
          className="flex items-center gap-2 border border-brand-border px-3 py-2"
        >
          <Search size={14} className="text-brand-muted" />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search…"
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </form>
      </section>

      <section>
        <WidgetTitle>Tags</WidgetTitle>
        <div className="flex flex-wrap gap-1.5">
          {popularTags.map(t => {
            const size = Math.min(16, 11 + (t.count > 1 ? Math.log2(t.count) * 2 : 0));
            return (
              <Link
                key={t.slug}
                to={`/tag/${t.slug}`}
                className="inline-block px-2 py-1 border border-brand-border hover:bg-brand-surface transition-colors"
                style={{ fontSize: `${size}px` }}
              >
                {t.name}
              </Link>
            );
          })}
        </div>
      </section>

      {trendingTags.length > 0 && (
        <section>
          <WidgetTitle>Popular Tags</WidgetTitle>
          <div className="flex flex-wrap gap-1.5">
            {trendingTags.map(t => (
              <Link
                key={t.slug}
                to={`/tag/${t.slug}`}
                className="inline-block text-xs px-2 py-1 border border-brand-border hover:bg-brand-surface transition-colors"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}
