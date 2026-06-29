// De "Kennu-geest": een wezentje dat van gedaante én kleur verandert
// naarmate je meer orbs verzamelt. Acht stadia, elk met meer features.

type Stage = { min: number; name: string; color: string; blurb: string };

const STAGES: Stage[] = [
  { min: 0, name: 'Vonk', color: '#fbbf24', blurb: 'Een sprankje nieuwsgierigheid.' },
  { min: 1, name: 'Gloeibol', color: '#f97316', blurb: 'Het licht gaat aan.' },
  { min: 5, name: 'Spruit', color: '#84cc16', blurb: 'Er begint iets te groeien.' },
  { min: 13, name: 'Dwaler', color: '#22d3ee', blurb: 'Op pad tussen de eilanden.' },
  { min: 25, name: 'Kenner', color: '#38bdf8', blurb: 'Steeds meer valt op zijn plek.' },
  { min: 40, name: 'Ziener', color: '#a78bfa', blurb: 'Je ziet de verbanden.' },
  { min: 60, name: 'Wijze', color: '#f472b6', blurb: 'Kennis met diepgang.' },
  { min: 86, name: 'Orakel', color: '#fcd34d', blurb: 'Alles verzameld — stralend.' },
];

function stageFor(count: number): number {
  let idx = 0;
  for (let i = 0; i < STAGES.length; i++) if (count >= STAGES[i].min) idx = i;
  return idx;
}

export default function Avatar({ count }: { count: number }) {
  const level = stageFor(count);
  const stage = STAGES[level];
  const next = STAGES[level + 1];
  const color = stage.color;

  const toNext = next ? next.min - count : 0;
  const span = next ? next.min - stage.min : 1;
  const pct = next ? Math.round(((count - stage.min) / span) * 100) : 100;

  // ronddraaiende kennis-orbs: aantal = level (groeit mee)
  const dots = [];
  const n = Math.max(level, 0);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x = 60 + Math.cos(a) * 47;
    const y = 60 + Math.sin(a) * 47;
    dots.push(<circle key={i} cx={x} cy={y} r={3.5} fill={color} className="kennu-pulse" />);
  }

  // stralen voor het Orakel
  const rays = [];
  if (level >= 7) {
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      rays.push(
        <line
          key={i}
          x1={60 + Math.cos(a) * 40}
          y1={60 + Math.sin(a) * 40}
          x2={60 + Math.cos(a) * 56}
          y2={60 + Math.sin(a) * 56}
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.7}
        />,
      );
    }
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
      <svg viewBox="0 0 120 120" width="92" height="92" className="kennu-float shrink-0">
        <defs>
          <radialGradient id="kennuCore" cx="38%" cy="32%" r="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="55%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.85" />
          </radialGradient>
        </defs>

        {/* zachte gloed */}
        <circle cx="60" cy="60" r="40" fill={color} opacity="0.16" className="kennu-pulse" />

        {/* aura-ringen */}
        {level >= 4 && <circle cx="60" cy="60" r="48" fill="none" stroke={color} strokeOpacity="0.45" strokeWidth="1.5" />}
        {level >= 5 && <circle cx="60" cy="60" r="55" fill="none" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 5" />}

        {rays}

        {/* ronddraaiende kennis-orbs */}
        {n > 0 && <g className="kennu-spin">{dots}</g>}

        {/* kroon (vanaf Wijze) */}
        {level >= 6 && (
          <path d="M44 34 L50 24 L60 31 L70 24 L76 34 Z" fill={color} stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.3" />
        )}

        {/* antenne / spruit (vanaf Spruit) */}
        {level >= 2 && (
          <g stroke={color} strokeWidth="2.5" strokeLinecap="round">
            <line x1="60" y1="38" x2="60" y2="26" />
            <circle cx="60" cy="22" r="4.5" fill={color} stroke="none" />
            {level >= 2 && <path d="M60 30 q7 -2 9 -8" fill="none" strokeWidth="2" />}
          </g>
        )}

        {/* armpjes (vanaf Dwaler) */}
        {level >= 3 && (
          <g stroke={color} strokeWidth="3" strokeLinecap="round">
            <line x1="38" y1="64" x2="29" y2="70" />
            <line x1="82" y1="64" x2="91" y2="70" />
          </g>
        )}

        {/* lichaam */}
        <circle cx="60" cy="62" r="26" fill="url(#kennuCore)" />

        {/* gezicht */}
        {level >= 1 ? (
          <>
            <circle cx="52" cy="59" r="5" fill="#0a0a0a" />
            <circle cx="68" cy="59" r="5" fill="#0a0a0a" />
            <circle cx="53.5" cy="57.5" r="1.6" fill="#fff" />
            <circle cx="69.5" cy="57.5" r="1.6" fill="#fff" />
            {level >= 2 && <path d="M51 69 Q60 76 69 69" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />}
          </>
        ) : (
          // Vonk: een klein sterretje i.p.v. ogen
          <path d="M60 52 L62 60 L70 62 L62 64 L60 72 L58 64 L50 62 L58 60 Z" fill="#fff" opacity="0.9" />
        )}
      </svg>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-xs uppercase tracking-wide opacity-50">Niveau {level + 1}</span>
        </div>
        <div className="text-lg font-bold" style={{ color }}>{stage.name}</div>
        <div className="text-xs opacity-70 -mt-0.5">{stage.blurb}</div>

        <div className="mt-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
        </div>
        <div className="text-[11px] opacity-60 mt-1 tabular-nums">
          {count} orb{count === 1 ? '' : 's'} verzameld
          {next ? ` · nog ${toNext} tot ${next.name}` : ' · maximale gedaante bereikt ✨'}
        </div>
      </div>
    </div>
  );
}
