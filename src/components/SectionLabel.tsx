import type { ReactNode } from 'react';

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <hr className="flex-1 border-brand-border" />
      <span className="font-display text-xs uppercase tracking-[0.3em] text-brand-muted">
        {children}
      </span>
      <hr className="flex-1 border-brand-border" />
    </div>
  );
}
