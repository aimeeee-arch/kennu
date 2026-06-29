import { ITEMS_BY_ID, type Slot } from '../game/items';

type Props = { equipped: Record<string, string | undefined>; size?: number; float?: boolean };

// Neutrale held: een gewoon mannetje in basiskleding. Alle uitrusting komt van items.
// Anker-coördinaten (viewBox 100x130): hoofd ~50,24 · romp 41-59 / 41-67 · rechterhand 71,64 · voeten ~100.
const SKIN = '#e7b78f';
function Base() {
  return (
    <g>
      <defs>
        <radialGradient id="kSkin" cx="42%" cy="36%" r="72%">
          <stop offset="0%" stopColor="#f3cda6" />
          <stop offset="100%" stopColor="#cf9a6e" />
        </radialGradient>
      </defs>

      {/* benen — broek */}
      <path d="M45 69 L43 99 L49 99 L50 71 Z" fill="#5b6470" />
      <path d="M55 69 L57 99 L51 99 L50 71 Z" fill="#5b6470" />
      <ellipse cx="45" cy="100" rx="6" ry="2.6" fill="#33373d" />
      <ellipse cx="55" cy="100" rx="6" ry="2.6" fill="#33373d" />

      {/* armen */}
      <line x1="43" y1="45" x2="31" y2="64" stroke={SKIN} strokeWidth="6" strokeLinecap="round" />
      <line x1="57" y1="45" x2="71" y2="64" stroke={SKIN} strokeWidth="6" strokeLinecap="round" />

      {/* romp — eenvoudig hemd */}
      <path d="M41 41 Q50 38 59 41 L57 67 Q50 71 43 67 Z" fill="#c2b8a8" />
      <path d="M46 40 Q50 44 54 40" stroke="#a8a293" strokeWidth="1" fill="none" />

      {/* handen */}
      <circle cx="31" cy="65" r="3.4" fill={SKIN} />
      <circle cx="71" cy="64" r="3.4" fill={SKIN} />

      {/* hoofd — rond en menselijk */}
      <circle cx="37.8" cy="25" r="1.9" fill={SKIN} />
      <circle cx="62.2" cy="25" r="1.9" fill={SKIN} />
      <circle cx="50" cy="24" r="12.5" fill="url(#kSkin)" />
      {/* haar */}
      <path d="M38 21 Q39 9 50 9 Q61 9 62 21 Q57 14 50 14 Q43 14 38 21 Z" fill="#5b4636" />
      <path d="M38 21 Q37 25 39 28 Q39 23 41 20 Z" fill="#5b4636" />
      <path d="M62 21 Q63 25 61 28 Q61 23 59 20 Z" fill="#5b4636" />
      {/* gezicht */}
      <ellipse cx="45.4" cy="24.4" rx="1.9" ry="2.3" fill="#fff" />
      <ellipse cx="54.6" cy="24.4" rx="1.9" ry="2.3" fill="#fff" />
      <circle cx="45.6" cy="24.8" r="1.15" fill="#26201b" />
      <circle cx="54.6" cy="24.8" r="1.15" fill="#26201b" />
      <circle cx="45.9" cy="24.4" r="0.35" fill="#fff" />
      <circle cx="54.9" cy="24.4" r="0.35" fill="#fff" />
      <path d="M43.2 21.6 Q45.4 20.7 47.4 21.5 M52.6 21.5 Q54.6 20.7 56.8 21.6" stroke="#4b3a2c" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M49.4 25.5 Q49 27.6 50.6 27.9" stroke="#b07a55" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M46.5 30.4 Q50 32.8 53.5 30.4" stroke="#7c4a3a" strokeWidth="1" fill="none" strokeLinecap="round" />
    </g>
  );
}

export default function Character({ equipped, size = 120, float = true }: Props) {
  const layer = (slot: Slot) => {
    const id = equipped[slot];
    const item = id ? ITEMS_BY_ID[id] : undefined;
    return item ? item.render() : null;
  };

  return (
    <svg
      viewBox="0 0 100 130"
      width={size}
      height={size * 1.3}
      className={'shrink-0' + (float ? ' kennu-float' : '')}
    >
      {layer('aura')}
      {layer('cape')}
      {layer('rijdier')}
      <Base />
      {layer('maatje')}
      {layer('harnas')}
      {layer('hoofd')}
      {layer('wapen')}
    </svg>
  );
}
