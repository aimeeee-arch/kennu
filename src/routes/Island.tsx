import { Link, useParams, Navigate } from 'react-router-dom';
import { findIsland, islandProgress } from '../content';
import { load } from '../engines/storage';
import { memoryHealth } from '../engines/sm2';

export default function Island() {
  const { islandId } = useParams();
  const island = islandId ? findIsland(islandId) : undefined;
  const state = load();

  if (!island) return <Navigate to="/" replace />;

  const { done, total } = islandProgress(island, state.completed);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const finished = total > 0 && done >= total;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-sm opacity-60 hover:opacity-100">← Kaart</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl">{island.icon}</span>
          <div>
            <h1 className="text-xl font-bold">{island.title}</h1>
            <p className="text-sm opacity-70">{island.blurb}</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full" style={{ width: `${pct}%`, background: island.color }} />
        </div>
        <div className="text-xs opacity-60 mt-1 tabular-nums">{done}/{total} orbs · {pct}%</div>
      </div>

      {finished && (
        <div
          className="rounded-2xl p-4 border text-center"
          style={{ borderColor: island.color }}
        >
          <div className="text-2xl">🏆</div>
          <div className="font-semibold mt-1">Certificaat behaald!</div>
          <div className="text-sm opacity-70">Je hebt alle orbs van {island.title} afgerond.</div>
        </div>
      )}

      {island.topics.map(topic => (
        <section key={topic.id}>
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-2">{topic.title}</h2>
          <div className="space-y-2">
            {topic.orbs.map(orb => {
              const isDoneOrb = state.completed.includes(orb.id);
              const health = memoryHealth(state.cards[orb.id]);
              const hue = Math.round(health * 130);
              return (
                <Link
                  key={orb.id}
                  to={`/leer/${orb.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: isDoneOrb ? `hsl(${hue} 70% 45%)` : '#3f3f46' }}
                    title={isDoneOrb ? 'Geleerd' : 'Nog niet gedaan'}
                  />
                  <span className="flex-1 text-sm font-medium">{orb.title}</span>
                  {isDoneOrb ? (
                    <span className="text-xs opacity-50">opfrissen ↻</span>
                  ) : (
                    <span className="text-xs" style={{ color: island.color }}>start →</span>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
