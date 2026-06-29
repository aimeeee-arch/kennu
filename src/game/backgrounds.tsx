import type { ReactNode } from 'react';
import type { StorageV1 } from '../types';
import { islands, islandOrbs } from '../content';
import { completedInIsland } from './items';

// Achtergronden: één themascène per eiland, vrijgespeeld als je het eiland 100% voltooit.
// Render vult viewBox 0 0 100 130 (zelfde verhouding als de held).
export type Background = { id: string; name: string; islandId: string; render: () => ReactNode };

const sky = (id: string, stops: [string, string][]) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      {stops.map(([o, c]) => <stop key={o} offset={o} stopColor={c} />)}
    </linearGradient>
  </defs>
);

const bgMuziek = (
  <g>
    {sky('bgMuziek', [['0', '#262b36'], ['1', '#0a0a0a']])}
    <rect width="100" height="130" fill="url(#bgMuziek)" />
    <path d="M50 6 L18 92 L82 92 Z" fill="#f97316" opacity="0.12" />
    <path d="M28 6 L6 92 L42 92 Z" fill="#a78bfa" opacity="0.10" />
    <path d="M72 6 L60 92 L94 92 Z" fill="#38bdf8" opacity="0.10" />
    <rect y="100" width="100" height="30" fill="#0f1115" />
    <ellipse cx="50" cy="100" rx="44" ry="5" fill="#f97316" opacity="0.18" />
  </g>
);
const bgVaderschap = (
  <g>
    {sky('bgVader', [['0', '#1e3a5f'], ['1', '#0b1320']])}
    <rect width="100" height="130" fill="url(#bgVader)" />
    <circle cx="72" cy="30" r="11" fill="#e0f2fe" />
    <circle cx="68" cy="27" r="9" fill="#1e3a5f" />
    {[[20, 24], [38, 16], [84, 60], [30, 70], [60, 22], [14, 50]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1" fill="#e0f2fe" opacity="0.9" />)}
    <rect y="104" width="100" height="26" fill="#0e1a2b" />
  </g>
);
const bgSpaans = (
  <g>
    {sky('bgSpaans', [['0', '#f59e0b'], ['0.55', '#fb7185'], ['1', '#7c2d12']])}
    <rect width="100" height="130" fill="url(#bgSpaans)" />
    <circle cx="50" cy="46" r="15" fill="#fde68a" opacity="0.9" />
    <g fill="#3b1f10">
      <path d="M14 104 L14 80 Q22 70 30 80 L30 104 Z" /><path d="M40 104 L40 76 Q50 64 60 76 L60 104 Z" /><path d="M70 104 L70 80 Q78 70 86 80 L86 104 Z" />
    </g>
    <rect y="104" width="100" height="26" fill="#2a1408" />
  </g>
);
const bgGroei = (
  <g>
    {sky('bgGroei', [['0', '#3b0764'], ['1', '#120627']])}
    <rect width="100" height="130" fill="url(#bgGroei)" />
    <path d="M50 0 L24 96 L76 96 Z" fill="#a78bfa" opacity="0.16" />
    <circle cx="50" cy="20" r="6" fill="#ddd6fe" opacity="0.8" />
    <rect y="100" width="100" height="30" fill="#1a0b33" />
    <ellipse cx="50" cy="100" rx="40" ry="5" fill="#a78bfa" opacity="0.2" />
  </g>
);
const bgKoken = (
  <g>
    {sky('bgKoken', [['0', '#4a3a2a'], ['1', '#241b12']])}
    <rect width="100" height="130" fill="url(#bgKoken)" />
    {[0, 1, 2, 3, 4].map(c => [0, 1, 2, 3].map(r => <rect key={`${c}${r}`} x={c * 20} y={r * 16} width="20" height="16" fill="none" stroke="#5b4632" strokeWidth="0.6" opacity="0.5" />))}
    <rect y="92" width="100" height="38" fill="#6b4a2c" />
    <rect y="92" width="100" height="4" fill="#8a6a44" />
    <circle cx="22" cy="40" r="3" fill="#94a3b8" /><circle cx="30" cy="40" r="3" fill="#94a3b8" /><line x1="22" y1="32" x2="22" y2="40" stroke="#64748b" strokeWidth="0.8" /><line x1="30" y1="32" x2="30" y2="40" stroke="#64748b" strokeWidth="0.8" />
  </g>
);
const bgSelf = (
  <g>
    {sky('bgSelf', [['0', '#0d9488'], ['0.6', '#34d399'], ['1', '#a7f3d0']])}
    <rect width="100" height="130" fill="url(#bgSelf)" />
    <circle cx="74" cy="30" r="9" fill="#fef9c3" opacity="0.9" />
    <path d="M0 104 L26 56 L46 104 Z" fill="#065f46" /><path d="M34 104 L62 44 L92 104 Z" fill="#047857" /><path d="M58 60 L66 52 L74 60 Z" fill="#ecfdf5" opacity="0.85" />
    <rect y="102" width="100" height="28" fill="#064e3b" />
  </g>
);
const bgTuin = (
  <g>
    {sky('bgTuin', [['0', '#7dd3fc'], ['1', '#e0f2fe']])}
    <rect width="100" height="130" fill="url(#bgTuin)" />
    <circle cx="78" cy="26" r="10" fill="#fde68a" />
    <path d="M0 96 Q30 84 60 96 T100 92 L100 130 L0 130 Z" fill="#16a34a" />
    <path d="M0 104 Q40 96 100 104 L100 130 L0 130 Z" fill="#15803d" />
    {[18, 34, 70, 86].map((x, i) => <g key={i}><line x1={x} y1="108" x2={x} y2="100" stroke="#166534" strokeWidth="1" /><circle cx={x} cy="99" r="2.4" fill="#f472b6" /></g>)}
  </g>
);
const bgFilosofie = (
  <g>
    {sky('bgFilo', [['0', '#312e81'], ['1', '#0b1020']])}
    <rect width="100" height="130" fill="url(#bgFilo)" />
    {[[20, 30], [44, 18], [70, 36], [86, 22], [56, 50], [12, 60]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="0.9" fill="#e0e7ff" />)}
    <path d="M22 70 L50 56 L78 70 Z" fill="#c7d2fe" opacity="0.5" />
    <g fill="#3730a3">
      {[28, 44, 56, 68].map(x => <rect key={x} x={x} y="72" width="6" height="34" />)}
    </g>
    <rect y="104" width="100" height="26" fill="#1e1b4b" />
  </g>
);
const bgJapans = (
  <g>
    {sky('bgJapans', [['0', '#fb7185'], ['0.6', '#fda4af'], ['1', '#fee2e2']])}
    <rect width="100" height="130" fill="url(#bgJapans)" />
    <circle cx="50" cy="40" r="16" fill="#fecaca" opacity="0.8" />
    <path d="M18 104 L50 52 L82 104 Z" fill="#e2e8f0" /><path d="M40 70 L50 52 L60 70 L54 66 L50 70 L46 66 Z" fill="#fff" />
    <g stroke="#b91c1c" strokeWidth="3">
      <line x1="30" y1="78" x2="30" y2="106" /><line x1="70" y1="78" x2="70" y2="106" />
      <line x1="24" y1="80" x2="76" y2="80" /><line x1="26" y1="86" x2="74" y2="86" />
    </g>
    <rect y="104" width="100" height="26" fill="#7f1d1d" opacity="0.85" />
  </g>
);
const bgEnergie = (
  <g>
    {sky('bgEnergie', [['0', '#0d9488'], ['1', '#cffafe']])}
    <rect width="100" height="130" fill="url(#bgEnergie)" />
    <circle cx="24" cy="26" r="8" fill="#fef9c3" opacity="0.85" />
    {[[60, 50], [80, 40]].map(([x, y], i) => (
      <g key={i} stroke="#e2e8f0" strokeWidth="1.6">
        <line x1={x} y1={y} x2={x} y2="100" />
        <line x1={x} y1={y} x2={x + 9} y2={y - 4} /><line x1={x} y1={y} x2={x - 4} y2={y + 9} /><line x1={x} y1={y} x2={x - 6} y2={y - 7} />
      </g>
    ))}
    <g>
      {[0, 1, 2, 3].map(i => <rect key={i} x={6 + i * 12} y="104" width="10" height="8" fill="#0f766e" stroke="#2dd4bf" strokeWidth="0.5" transform={`skewX(-12)`} />)}
    </g>
    <rect y="112" width="100" height="18" fill="#134e4a" />
  </g>
);

export const BACKGROUNDS: Background[] = [
  { id: 'bg_muziek', name: 'Concertpodium', islandId: 'muziek', render: () => bgMuziek },
  { id: 'bg_vaderschap', name: 'Sterrennacht-kamer', islandId: 'vaderschap', render: () => bgVaderschap },
  { id: 'bg_spaans', name: 'Plaza bij zonsondergang', islandId: 'spaans', render: () => bgSpaans },
  { id: 'bg_groei', name: 'Het podium', islandId: 'groei', render: () => bgGroei },
  { id: 'bg_koken', name: 'De keuken', islandId: 'koken', render: () => bgKoken },
  { id: 'bg_self', name: 'Bergtop', islandId: 'self-improvement', render: () => bgSelf },
  { id: 'bg_tuin', name: 'Bloeiende tuin', islandId: 'tuin', render: () => bgTuin },
  { id: 'bg_filosofie', name: 'Tempel onder de sterren', islandId: 'filosofie', render: () => bgFilosofie },
  { id: 'bg_japans', name: 'Torii bij de Fuji', islandId: 'japans', render: () => bgJapans },
  { id: 'bg_energie', name: 'Windpark', islandId: 'energietransitie', render: () => bgEnergie },
];

export const BG_BY_ID: Record<string, Background> = Object.fromEntries(BACKGROUNDS.map(b => [b.id, b]));

// Achtergrond vrijgespeeld = eiland 100% voltooid.
export function isBgUnlocked(bg: Background, state: StorageV1): boolean {
  const isl = islands.find(i => i.id === bg.islandId);
  if (!isl) return false;
  const total = islandOrbs(isl).length;
  return total > 0 && completedInIsland(bg.islandId, state.completed) >= total;
}
