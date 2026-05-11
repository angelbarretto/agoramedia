import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contributors } from '@/content/contributors';
import { site } from '@/content/site';
import { setDocumentMeta } from '@/lib/format';

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block bg-brand-text text-brand-bg px-8 py-3 text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
    >
      {children}
    </a>
  );
}

export default function ContactPage() {
  useEffect(() => {
    setDocumentMeta(
      'Get in Touch | Agora Media',
      `Contact Agora Media: ${site.contactEmail} or ${site.contactPhone}.`,
    );
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <section>
        <h1 className="font-display text-4xl md:text-6xl">Get in Touch</h1>
        <p className="mt-5 text-brand-muted max-w-2xl leading-relaxed">
          {site.description.split('.')[0]}.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-2xl">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted">Email</p>
            <a href={`mailto:${site.contactEmail}`} className="block mt-1 text-lg hover:text-brand-accent">
              {site.contactEmail}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted">Phone</p>
            <a href={`tel:${site.contactPhone.replace(/\s/g, '')}`} className="block mt-1 text-lg hover:text-brand-accent">
              {site.contactPhone}
            </a>
          </div>
        </div>

        <div className="mt-10">
          <PrimaryButton href={`mailto:${site.contactEmail}`}>Contact me</PrimaryButton>
        </div>
      </section>

      <hr className="border-brand-border my-16" />

      <section>
        <h2 className="font-display text-3xl md:text-4xl">Lead Contributors</h2>
        <p className="mt-3 text-brand-muted">A global bench of beat reporters and domain experts.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {contributors.map(c => {
            const card = (
              <div className="border border-brand-border p-6 h-full hover:bg-brand-surface transition-colors">
                <p className="font-display text-xl">{c.name}</p>
                <p className="mt-1.5 text-sm text-brand-muted italic">{c.focus}</p>
              </div>
            );
            return c.authorSlug ? (
              <Link key={c.name} to={`/author/${c.authorSlug}`}>{card}</Link>
            ) : (
              <div key={c.name}>{card}</div>
            );
          })}
        </div>
      </section>

      <hr className="border-brand-border my-16" />

      <section>
        <h2 className="font-display text-3xl md:text-4xl">Would you like us to cover your event?</h2>
        <p className="mt-4 text-brand-muted max-w-2xl leading-relaxed">
          Send us a brief with dates, location, expected attendance, and the topics you most want
          on the record. We'll get back within a few working days.
        </p>
        <div className="mt-8">
          <PrimaryButton href={`mailto:${site.contactEmail}?subject=Event coverage request`}>
            Contact me
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}
