import { Link, useNavigate } from 'react-router-dom';
import { islands } from '../content';
import { load } from '../engines/storage';
import { memoryHealth, isDue } from '../engines/sm2';

export default function Bank() {
  const nav = useNavigate();
  const state = load();

  const learnedCount = state.completed.length;
  const atRisk = islands
    .flatMap(i => i.topics.flatMap(t => t.orbs))
    .filter(o => state.completed.includes(o.id) && isDue(state.cards[o.id])).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold">Knowledge Bank</h1>
        <p className="text-sm opacity-70 mt-1">
          Elk blokje is een geleerde orb. Groen = vers in je geheugen, rood = dreigt te vervagen.
        </p>
      </div>

      {/* legenda */}
      <div className="flex items-center gap-3 text-xs opacity-70">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(130 70% 45%)' }} /> vers</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(45 70% 45%)' }} /> verzwakt</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(0 70% 45%)' }} /> rood/overdue</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-zinc-700" /> nog niet geleerd</span>
      </div>

      {learnedCount > 0 && (
        <Link
          to="/review"
          className="flex items-center justify-between rounded-xl p-4 bg-zinc-900 border border-zinc-800 hover:border-glow-500 transition"
        >
          <div>
            <div className="font-medium">🛡️ Strengthen</div>
            <div className="text-xs opacity-70 mt-0.5">
              {atRisk > 0 ? `${atRisk} orb${atRisk === 1 ? '' : 's'} dreigt te vervagen` : 'Frisse boel — frist de zwakste op'}
            </div>
          </div>
          <span className="text-sm font-medium text-glow-400 shrink-0">Start →</span>
        </Link>
      )}

      {islands.map(island => (
        <section key={island.id}>
          <div className="flex items-center gap-2 mb-2">
            <span>{island.icon}</span>
            <h2 className="text-sm font-semibold">{island.title}</h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {island.topics.flatMap(t => t.orbs).map(orb => {
              const learned = state.completed.includes(orb.id);
              const health = memoryHealth(state.cards[orb.id]);
              const hue = Math.round(health * 130);
              return (
                <button
                  key={orb.id}
                  title={`${orb.title}${learned ? '' : ' — nog niet geleerd'}`}
                  onClick={() => nav(`/leer/${orb.id}`)}
                  className="w-7 h-7 rounded-md border border-black/30 transition hover:scale-110"
                  style={{ background: learned ? `hsl(${hue} 70% 45%)` : '#3f3f46' }}
                />
              );
            })}
          </div>
        </section>
      ))}

      {learnedCount === 0 && (
        <p className="text-sm opacity-60 text-center py-6">
          Nog niets geleerd. <Link to="/" className="text-glow-400">Begin op de kaart →</Link>
        </p>
      )}
    </div>
  );
}
