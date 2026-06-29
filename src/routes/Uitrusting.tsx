import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ITEMS, SLOTS, neededFor, completedInIsland, isUnlocked, type Slot } from '../game/items';
import { BACKGROUNDS, isBgUnlocked } from '../game/backgrounds';
import { findIsland } from '../content';
import { load, setEquip } from '../engines/storage';
import Character from '../components/Character';
import HeroStage from '../components/HeroStage';

export default function Uitrusting() {
  const [state, setState] = useState(() => load());
  const equipped = state.equipped ?? {};
  const refresh = () => setState(load());

  const toggle = (slot: Slot, id: string) => {
    setEquip(slot, equipped[slot] === id ? null : id);
    refresh();
  };

  const unlockedCount = ITEMS.filter(i => isUnlocked(i, state)).length;
  const bgUnlocked = BACKGROUNDS.filter(b => isBgUnlocked(b, state)).length;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-sm opacity-60 hover:opacity-100">← Kaart</Link>
        <h1 className="text-xl font-bold mt-2">Jouw held</h1>
        <p className="text-sm opacity-70">Verdien uitrusting door eilanden te leren. Tik een item aan om het aan te doen.</p>
      </div>

      <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 py-4 sea-bg">
        <HeroStage equipped={equipped} size={170} />
        <div className="text-xs opacity-70 mt-2">
          {unlockedCount}/{ITEMS.length} items · {bgUnlocked}/{BACKGROUNDS.length} achtergronden
        </div>
      </div>

      {SLOTS.map(({ key, label }) => {
        const items = ITEMS.filter(i => i.slot === key);
        const noneSelected = !equipped[key];
        return (
          <section key={key}>
            <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-2">{label}</h2>
            <div className="grid grid-cols-5 sm:grid-cols-7 gap-1.5">
              {/* Niets */}
              <button
                onClick={() => { setEquip(key, null); refresh(); }}
                className="rounded-lg border flex flex-col items-center justify-center text-[10px] aspect-square"
                style={{ borderColor: noneSelected ? '#f97316' : '#27272a', opacity: noneSelected ? 1 : 0.7 }}
              >
                <span className="text-base opacity-40">∅</span>
                <span className="opacity-70">Niets</span>
              </button>

              {items.map(it => {
                const unlocked = isUnlocked(it, state);
                const selected = equipped[key] === it.id;
                const isl = findIsland(it.islandId);
                const remaining = neededFor(it) - completedInIsland(it.islandId, state.completed);
                return (
                  <button
                    key={it.id}
                    disabled={!unlocked}
                    onClick={() => toggle(key, it.id)}
                    title={unlocked ? `${it.name} (${isl?.title})` : `${it.name} — ontgrendel via ${isl?.title} (nog ${remaining})`}
                    className="rounded-lg border p-0.5 flex flex-col items-center disabled:cursor-default transition"
                    style={{ borderColor: selected ? isl?.color ?? '#f97316' : '#27272a' }}
                  >
                    <div className={'relative ' + (unlocked ? '' : 'opacity-25 grayscale')}>
                      <Character equipped={unlocked ? { [key]: it.id } : {}} size={40} float={false} />
                      {!unlocked && (
                        <span className="absolute inset-0 flex items-center justify-center text-sm">🔒</span>
                      )}
                      <span
                        className="absolute bottom-0 right-0 w-2 h-2 rounded-full border border-zinc-950"
                        style={{ background: isl?.color }}
                      />
                    </div>
                    {!unlocked && <span className="text-[9px] opacity-60 leading-none mb-0.5">nog {remaining}</span>}
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-2">Achtergrond</h2>
        <p className="text-[11px] opacity-50 -mt-1 mb-2">Voltooi een eiland 100% om zijn achtergrond vrij te spelen.</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
          <button
            onClick={() => { setEquip('achtergrond', null); refresh(); }}
            className="rounded-lg border flex flex-col items-center justify-center text-[10px] aspect-[3/4]"
            style={{ borderColor: !equipped['achtergrond'] ? '#f97316' : '#27272a', opacity: !equipped['achtergrond'] ? 1 : 0.7 }}
          >
            <span className="text-base opacity-40">∅</span>
            <span className="opacity-70">Niets</span>
          </button>
          {BACKGROUNDS.map(bg => {
            const unlocked = isBgUnlocked(bg, state);
            const selected = equipped['achtergrond'] === bg.id;
            const isl = findIsland(bg.islandId);
            return (
              <button
                key={bg.id}
                disabled={!unlocked}
                onClick={() => { setEquip('achtergrond', selected ? null : bg.id); refresh(); }}
                title={unlocked ? `${bg.name} (${isl?.title})` : `${bg.name} — voltooi ${isl?.title} 100%`}
                className="rounded-lg border p-0.5 flex flex-col items-center disabled:cursor-default transition overflow-hidden"
                style={{ borderColor: selected ? isl?.color ?? '#f97316' : '#27272a' }}
              >
                <div className={'relative rounded overflow-hidden ' + (unlocked ? '' : 'opacity-30 grayscale')}>
                  <svg viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice" width="42" height="40" className="block">
                    {bg.render()}
                  </svg>
                  {!unlocked && <span className="absolute inset-0 flex items-center justify-center text-sm">🔒</span>}
                </div>
                <span className="text-[9px] leading-tight mt-0.5 line-clamp-1 opacity-80">{unlocked ? bg.name : isl?.icon + ' 100%'}</span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
