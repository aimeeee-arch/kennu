import { Link } from 'react-router-dom';
import { islands, allOrbs, orbContext, findIsland, orbOfDay } from '../content';
import { load, todayISO } from '../engines/storage';
import { isDue } from '../engines/sm2';
import KnowledgeMap from '../components/KnowledgeMap';
import StampGrid from '../components/StampGrid';
import HeroStage from '../components/HeroStage';
import { ITEMS, isUnlocked } from '../game/items';

export default function Home() {
  const state = load();
  const orbs = allOrbs();
  const completedCount = state.completed.length;
  const total = orbs.length;

  // Orb van de dag — stabiel per dag
  const daily = orbOfDay(todayISO());
  const dailyCtx = orbContext(daily.id);
  const dailyDone = state.completed.includes(daily.id);

  // Ga verder: eerstvolgende ongedane orb
  const firstUndone = orbs.find(o => !state.completed.includes(o.id));

  const dueCount = orbs.filter(o => state.completed.includes(o.id) && isDue(state.cards[o.id])).length;
  const unlockedItems = ITEMS.filter(i => isUnlocked(i, state)).length;

  return (
    <div className="space-y-6">
      <Link
        to="/uitrusting"
        className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 pr-4 hover:border-zinc-600 transition"
      >
        <div className="sea-bg rounded-xl">
          <HeroStage equipped={state.equipped ?? {}} size={72} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold">Jouw held</div>
          <div className="text-xs opacity-70 mt-0.5">
            {completedCount} orb{completedCount === 1 ? '' : 's'} · {unlockedItems}/{ITEMS.length} items ontgrendeld
          </div>
          <div className="text-sm font-medium text-glow-400 mt-1">Uitrusting aanpassen →</div>
        </div>
      </Link>

      {/* Orb van de dag */}
      {dailyCtx && (
        <Link
          to={`/leer/${daily.id}`}
          className="block rounded-2xl p-5 text-zinc-950 shadow-sm transition hover:brightness-105"
          style={{ background: `linear-gradient(135deg, ${dailyCtx.island.color}, #fbbf24)` }}
        >
          <div className="text-xs uppercase tracking-wide opacity-70">
            Orb van de dag{dailyDone ? ' · al gedaan ✓' : ''}
          </div>
          <div className="text-lg font-semibold mt-1 flex items-center gap-2">
            <span>{dailyCtx.island.icon}</span>
            <span>{daily.title}</span>
          </div>
          <div className="text-sm opacity-80 mt-0.5">
            {dailyCtx.island.title} · {dailyCtx.topic.title}
          </div>
          <p className="text-sm italic mt-2 opacity-90">“{daily.priming}”</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium bg-black/15 rounded-lg px-3 py-1.5">
            {dailyDone ? 'Nog eens doen' : 'Start sessie'} →
          </span>
        </Link>
      )}

      {/* Ga verder (secundair) */}
      {firstUndone && firstUndone.id !== daily.id && (
        <Link
          to={`/leer/${firstUndone.id}`}
          className="flex items-center justify-between text-sm px-1 opacity-75 hover:opacity-100 transition"
        >
          <span>↪ Ga verder: {firstUndone.title}</span>
          <span className="opacity-60">›</span>
        </Link>
      )}

      {/* Eilanden */}
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
