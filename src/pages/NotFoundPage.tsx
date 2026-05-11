import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 py-20 text-center">
      <p className="font-display text-7xl text-brand-accent">404</p>
      <h1 className="font-display text-2xl md:text-3xl mt-4">
        We couldn't find that story.
      </h1>
      <p className="mt-3 text-brand-muted max-w-md">
        The page may have moved, or the URL might be a typo. Try the homepage or browse the archive.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-brand-text text-brand-bg px-8 py-3 text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
