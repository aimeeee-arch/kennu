import { useNavigate } from 'react-router-dom';
import type { Island } from '../types';
import { islandProgress } from '../content';

type Props = { islands: Island[]; completed: string[] };

// Nette lijst van eiland-kaarten met voortgangsring (Kinnu-stijl).
export default function KnowledgeMap({ islands, completed }: Props) {
  const nav = useNavigate();

  return (
    <div className="space-y-3">
      {islands.map(isl => {
        const { done, total } = islandProgress(isl, completed);
        const pct = total ? Math.round((done / total) * 100) : 0;
        const finished = total > 0 && done >= total;
        return (
          <button
            key={isl.id}
            onClick={() => nav(`/eiland/${isl.id}`)}
            className="w-full flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition text-left"
          >
            {/* voortgangsring met icoon */}
            <span
              className="shrink-0 grid place-items-center rounded-full"
              style={{
                width: 52,
                height: 52,
                background: `conic-gradient(${isl.color} ${pct}%, #27272a ${pct}%)`,
                padding: 3,
              }}
            >
              <span className="w-full h-full rounded-full bg-zinc-950 grid place-items-center text-xl">
                {isl.icon}
              </span>
            </span>

            {/* titel + blurb + balk */}
            <span className="flex-1 min-w-0">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="truncate">{isl.title}</span>
                {finished && <span style={{ color: isl.color }}>✓</span>}
              </span>
              <span className="block text-xs opacity-70 truncate mt-0.5">{isl.blurb}</span>
              <span className="mt-2 flex items-center gap-2">
                <span className="h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                  <span className="block h-full rounded-full" style={{ width: `${pct}%`, background: isl.color }} />
                </span>
                <span className="text-[11px] opacity-60 tabular-nums shrink-0">{done}/{total}</span>
              </span>
            </span>

            <span className="shrink-0 text-sm opacity-40">›</span>
          </button>
        );
      })}
    </div>
  );
}
