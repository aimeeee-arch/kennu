import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const tab = (to: string, label: string, title?: string) => {
    const active = loc.pathname === to;
    return (
      <Link
        to={to}
        title={title}
        className={
          'px-2.5 py-1 rounded-lg transition ' +
          (active
            ? 'bg-zinc-100 dark:bg-zinc-800 font-medium'
            : 'hover:bg-zinc-100 dark:hover:bg-zinc-800')
        }
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-svh flex flex-col">
      <header className="safe-top px-4 pb-3 sticky top-0 z-10 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">🏝️</span>
            <span>Kennu</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {tab('/', 'Kaart')}
            {tab('/review', 'Review')}
            {tab('/bank', 'Bank')}
            {tab('/settings', '⚙', 'Instellingen')}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-5">{children}</main>

      <div className="safe-bottom" />
    </div>
  );
}
