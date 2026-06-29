import { useState } from 'react';
import type { Orb } from '../types';
import MarkdownLite from './MarkdownLite';

type Props = { orb: Orb; color: string };

export default function OrbReader({ orb, color }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">{orb.title}</h1>

      <MarkdownLite text={orb.body} className="text-zinc-200" />

      {orb.glossary && orb.glossary.length > 0 && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-60 mb-2">
            Begrippen — tik om te bekijken
          </div>
          <div className="flex flex-wrap gap-2">
            {orb.glossary.map((g, i) => (
              <button
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                className="text-sm px-2.5 py-1 rounded-full border transition"
                style={{
                  borderColor: open === i ? color : '#3f3f46',
                  color: open === i ? color : undefined,
                }}
              >
                {g.term}
              </button>
            ))}
          </div>
          {open !== null && orb.glossary[open] && (
            <div className="mt-3 text-sm text-zinc-300">
              <p>
                <span className="font-semibold" style={{ color }}>
                  {orb.glossary[open].term}:
                </span>{' '}
                {orb.glossary[open].def}
              </p>
            </div>
          )}
        </div>
      )}

      {orb.sources && orb.sources.length > 0 && (
        <div className="text-xs opacity-60">
          <span className="font-semibold uppercase tracking-wide">Bronnen:</span>{' '}
          {orb.sources.map((s, i) => (
            <span key={i}>
              {i > 0 && ' · '}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
                {s.label}
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
