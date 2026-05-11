import { useEffect } from 'react';
import { privacyPolicy } from '@/content/privacy';
import { setDocumentMeta } from '@/lib/format';

export default function PrivacyPage() {
  useEffect(() => {
    setDocumentMeta('Privacy Policy | Agora Media', 'How Agora Media handles your data.');
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display text-4xl md:text-5xl">{privacyPolicy.title}</h1>
      <p className="mt-2 text-sm text-brand-muted">
        Effective date: {privacyPolicy.effectiveDate}
      </p>

      <div className="prose-agora mt-10">
        {privacyPolicy.sections.map(section => (
          <section key={section.heading} className="mb-8">
            <h2>{section.heading}</h2>
            {section.body ? (
              section.body.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p className="text-brand-muted italic">
                [Section body — paste from your existing policy.]
              </p>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
