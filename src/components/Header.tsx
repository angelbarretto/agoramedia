import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { site } from '@/content/site';
import { useDarkMode } from '@/lib/useDarkMode';

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMobileOpen(false);
    setQuery('');
  };

  return (
    <header className="bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5 py-6 flex items-start justify-between gap-6">
        {/* Brand */}
        <Link to="/" className="block shrink-0 hover:opacity-90 transition-opacity">
          <div className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-none">
            {site.name}
          </div>
          <div className="mt-1 text-xs md:text-sm text-brand-muted font-medium">
            {site.tagline}
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 mt-2">
          {site.nav.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium uppercase tracking-[0.18em] hover:text-brand-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setSearchOpen(s => !s)}
            aria-label="Search"
            className="p-2 hover:text-brand-accent transition-colors"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 hover:text-brand-accent transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1 mt-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Open menu"
            className="p-2"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Desktop search drawer */}
      {searchOpen && (
        <div className="hidden md:block border-t border-brand-border bg-brand-surface">
          <form
            onSubmit={submitSearch}
            className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-3"
          >
            <Search size={16} className="text-brand-muted" />
            <input
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search Agora Media…"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-text"
            >
              Close
            </button>
          </form>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg">
          <nav className="flex flex-col px-5 py-4 gap-4">
            {site.nav.map(item => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.18em] hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
            <form onSubmit={submitSearch} className="flex items-center gap-2 pt-2 border-t border-brand-border">
              <Search size={16} className="text-brand-muted" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search…"
                className="flex-1 bg-transparent outline-none text-sm py-2"
              />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}
