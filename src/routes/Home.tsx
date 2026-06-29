import { Link } from 'react-router-dom';
import { islands, allOrbs, orbContext, findIsland } from '../content';
import { load } from '../engines/storage';
import { isDue } from '../engines/sm2';
import KnowledgeMap from '../components/KnowledgeMap';
import StampGrid from '../components/StampGrid';

export default function Home() {
  const state = load();
  const orbs = allOrbs();
  const completedCount = state.completed.length;
  const total = orbs.length;

  // eerstvolgende orb: na de laatst gedane, anders de eerste ongedane
  const firstUndone = orbs.find(o => !state.completed.includes(o.id));
  const next = firstUndone ?? orbs[0];
  const nextCtx = next ? orbContext(next.id) : undefined;

  const dueCount = orbs.filter(o => state.completed.includes(o.id) && isDue(state.cards[o.id])).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Jouw leer-eilanden</h1>
        <p className="text-sm opacity-70 mt-1">
          Korte sessies, vaste kennis. Kies een eiland of ga verder waar je was.
        </p>
      </div>

      {next && nextCtx && (
        <Link
          to={`/leer/${next.id}`}
          className="block rounded-2xl p-5 text-zinc-950 shadow-sm transition hover:brightness-105"
          style={{ background: `linear-gradient(135deg, ${nextCtx.island.color}, #fbbf24)` }}
        >
          <div className="text-xs uppercase tracking-wide opacity-70">
            {completedCount > 0 ? 'Ga verder' : 'Begin hier'}
          </div>
          <div className="text-lg font-semibold mt-1 flex items-center gap-2">
            <span>{nextCtx.island.icon}</span>
            <span>{next.title}</span>
          </div>
          <div className="text-sm opacity-80 mt-0.5">{nextCtx.island.title} · {nextCtx.topic.title}</div>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium bg-black/15 rounded-lg px-3 py-1.5">
            Start sessie →
          </span>
        </Link>
      )}

      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70">Eilanden</h2>
          <span className="text-xs opacity-60 tabular-nums">
            {completedCount}/{total} orbs{state.stamps.length > 0 ? ` · 🔥 ${state.stamps.length}` : ''}
          </span>
        </div>
        <KnowledgeMap islands={islands} completed={state.completed} />
      </section>

      {dueCount > 0 && (
        <Link
          to="/review"
          className="flex items-center justify-between rounded-xl p-4 bg-zinc-900 border border-zinc-800 hover:border-glow-500 transition"
        >
          <div>
            <div className="font-medium">🛡️ Memory Shield</div>
            <div className="text-xs opacity-70 mt-0.5">
              {dueCount} orb{dueCount === 1 ? '' : 's'} klaar om op te frissen
            </div>
          </div>
          <span className="text-sm font-medium text-glow-400 shrink-0">Review →</span>
        </Link>
      )}

      {state.certificates.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-2">Behaalde certificaten</h2>
          <div className="flex flex-wrap gap-2">
            {state.certificates.map(id => {
              const isl = findIsland(id);
              if (!isl) return null;
              return (
                <span
                  key={id}
                  className="text-sm px-3 py-1.5 rounded-full border flex items-center gap-1.5"
                  style={{ borderColor: isl.color }}
                >
                  {isl.icon} {isl.title} ✓
                </span>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-2">Stamps</h2>
        <StampGrid stamps={state.stamps} />
      </div>
    </div>
  );
}
