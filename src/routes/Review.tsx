import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { allOrbs, orbContext } from '../content';
import { load, setCard } from '../engines/storage';
import { review, isDue, memoryHealth, DAILY_GOAL, type Quality } from '../engines/sm2';
import type { Orb } from '../types';

export default function Review() {
  // Bouw de wachtrij één keer op bij binnenkomst (snapshot).
  const queue = useMemo<Orb[]>(() => {
    const state = load();
    const learned = allOrbs().filter(o => state.completed.includes(o.id));
    const due = learned.filter(o => isDue(state.cards[o.id]));
    const pool = due.length > 0 ? due : learned; // niets due? frissen op de zwakste
    return [...pool]
      .sort((a, b) => memoryHealth(state.cards[a.id]) - memoryHealth(state.cards[b.id]))
      .slice(0, DAILY_GOAL);
  }, []);

  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  if (queue.length === 0) {
    return (
      <div className="space-y-4 text-center py-10">
        <div className="text-4xl">🛡️</div>
        <h1 className="text-xl font-semibold">Niets om op te frissen</h1>
        <p className="text-sm opacity-70">
          Je hebt nog geen orbs geleerd, of alles zit goed in je geheugen.
        </p>
        <Link to="/" className="inline-block mt-2 px-4 py-2 rounded-xl font-medium text-zinc-950 bg-glow-500">
          Naar de kaart →
        </Link>
      </div>
    );
  }

  if (idx >= queue.length) {
    return (
      <div className="space-y-4 text-center py-10">
        <div className="text-4xl">✓</div>
        <h1 className="text-xl font-semibold">Review klaar</h1>
        <p className="text-sm opacity-70">{reviewed} orb{reviewed === 1 ? '' : 's'} opgefrist.</p>
        <Link to="/" className="inline-block mt-2 px-4 py-2 rounded-xl font-medium text-zinc-950 bg-glow-500">
          Naar de kaart →
        </Link>
      </div>
    );
  }

  const orb = queue[idx];
  const ctx = orbContext(orb.id);
  const accent = ctx?.island.color ?? '#f97316';

  const grade = (q: Quality) => {
    setCard(orb.id, review(load().cards[orb.id], q));
    setReviewed(r => r + 1);
    setRevealed(false);
    setIdx(i => i + 1);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-sm">
        <span className="opacity-60">{ctx?.island.icon} {ctx?.island.title}</span>
        <span className="opacity-60 tabular-nums">{idx + 1}/{queue.length}</span>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 min-h-48">
        <div className="text-xs uppercase tracking-wide opacity-60 mb-2">Wat weet je hier nog van?</div>
        <h1 className="text-lg font-semibold">{orb.title}</h1>

        {revealed && (
          <ul className="mt-4 space-y-2">
            {orb.summary.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span style={{ color: accent }}>•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full py-3 rounded-xl font-medium text-zinc-950"
          style={{ background: accent }}
        >
          Toon samenvatting
        </button>
      ) : (
        <div>
          <div className="text-xs opacity-60 mb-1 text-center">Hoe goed wist je het?</div>
          <div className="flex gap-2">
            <button onClick={() => grade(0)} className="flex-1 py-3 rounded-xl border border-zinc-700 hover:border-red-400">Kwijt</button>
            <button onClick={() => grade(3)} className="flex-1 py-3 rounded-xl border border-zinc-700 hover:border-amber-400">Twijfel</button>
            <button onClick={() => grade(5)} className="flex-1 py-3 rounded-xl border border-zinc-700 hover:border-green-400">Weet ik</button>
          </div>
        </div>
      )}
    </div>
  );
}
