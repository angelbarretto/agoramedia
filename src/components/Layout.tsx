import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Header />
      <hr className="border-brand-border" />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
