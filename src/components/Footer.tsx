import { Link } from 'react-router-dom';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-brand-footer-bg text-brand-footer-text mt-20 border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-5 py-12 flex flex-col items-center text-center gap-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {site.nav.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className="text-xs uppercase tracking-[0.25em] hover:text-brand-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <div className="font-display font-bold text-2xl">{site.name}</div>
          <p className="text-sm leading-relaxed text-brand-muted">{site.description}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
            {site.regions.join(' | ')}
          </p>
          <p className="text-xs text-brand-muted">
            {site.copyrightLine} —{' '}
            <a className="hover:text-brand-accent" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
