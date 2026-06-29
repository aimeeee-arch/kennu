import type { ReactNode } from 'react';
import type { StorageV1 } from '../types';
import { islands, islandOrbs } from '../content';

// Uitrustingsslots van je held.
export type Slot = 'cape' | 'aura' | 'rijdier' | 'maatje' | 'harnas' | 'hoofd' | 'wapen';

export const SLOTS: { key: Slot; label: string }[] = [
  { key: 'wapen', label: 'Wapen' },
  { key: 'harnas', label: 'Harnas' },
  { key: 'cape', label: 'Cape' },
  { key: 'hoofd', label: 'Hoofd' },
  { key: 'aura', label: 'Aura' },
  { key: 'rijdier', label: 'Rijdier' },
  { key: 'maatje', label: 'Maatje' },
];

// tier: 1 = start (1 orb), 2 = halverwege het eiland, 3 = eiland compleet.
export type Item = {
  id: string;
  name: string;
  slot: Slot;
  islandId: string;
  tier: 1 | 2 | 3;
  render: () => ReactNode;
};

// ── Helpers ─────────────────────────────────────────────────────
const cape = (fill: string, hem?: string, extra?: ReactNode) => (
  <g>
    <path d="M39 40 Q31 75 35 104 L42 97 L50 102 L58 97 L65 104 Q69 75 61 40 Q50 47 39 40 Z" fill={fill} />
    <path d="M50 45 L50 101" stroke="#000" strokeOpacity="0.18" strokeWidth="1" />
    {hem && <path d="M35 104 L42 97 L50 102 L58 97 L65 104" stroke={hem} strokeWidth="2.2" fill="none" strokeLinejoin="round" />}
    {extra}
  </g>
);
const note = (x: number, y: number, c: string) => (
  <g><ellipse cx={x} cy={y} rx="2.8" ry="2.1" fill={c} /><line x1={x + 2.6} y1={y} x2={x + 2.6} y2={y - 8} stroke={c} strokeWidth="1.4" /></g>
);

// ─────────────────────────── WAPENS ─────────────────────────────
const wGitaar = (
  <g>
    <line x1="69" y1="66" x2="80" y2="32" stroke="#5b2410" strokeWidth="3.6" strokeLinecap="round" />
    <line x1="69" y1="66" x2="80" y2="32" stroke="#a0531f" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="73" y1="46" x2="76" y2="44.5" stroke="#e2e8f0" strokeWidth="0.5" /><line x1="75" y1="41" x2="78" y2="39.5" stroke="#e2e8f0" strokeWidth="0.5" />
    <ellipse cx="83" cy="28" rx="8.5" ry="11.5" fill="#f97316" stroke="#7c2d12" strokeWidth="1.4" />
    <ellipse cx="80" cy="23" rx="2.6" ry="4" fill="#fdba74" opacity="0.55" />
    <circle cx="83" cy="29" r="2.6" fill="#1c1917" />
    <circle cx="83" cy="29" r="3.7" fill="none" stroke="#7c2d12" strokeWidth="0.6" />
  </g>
);
const wKatana = (
  <g>
    <line x1="71" y1="65" x2="89" y2="17" stroke="#7dd3fc" strokeWidth="4.4" strokeLinecap="round" opacity="0.25" />
    <line x1="71" y1="65" x2="89" y2="17" stroke="#eef2f7" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="73" y1="63" x2="88" y2="22" stroke="#9fb6c9" strokeWidth="0.7" strokeLinecap="round" opacity="0.8" />
    <line x1="68.5" y1="63.5" x2="77.5" y2="63.5" stroke="#1c1917" strokeWidth="2.2" />
    <line x1="69" y1="70" x2="73" y2="61" stroke="#7f1d1d" strokeWidth="4.2" strokeLinecap="round" />
    <line x1="69" y1="70" x2="73" y2="61" stroke="#fb7185" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="68.6" cy="70.6" r="1.4" fill="#1c1917" />
  </g>
);
const wKoksmes = (
  <g>
    <line x1="70" y1="66" x2="74" y2="56" stroke="#3f2d18" strokeWidth="4.6" strokeLinecap="round" />
    <line x1="70" y1="66" x2="74" y2="56" stroke="#6b4a2c" strokeWidth="2" strokeLinecap="round" />
    <circle cx="71.5" cy="63" r="0.6" fill="#cbd5e1" /><circle cx="73" cy="59" r="0.6" fill="#cbd5e1" />
    <path d="M73 56 L88 38 L90 49 L77 60 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
    <path d="M74.5 56 L87 40.5" stroke="#f8fafc" strokeWidth="0.8" opacity="0.85" />
  </g>
);
const wBliksem = (
  <g>
    <line x1="70" y1="67" x2="77" y2="36" stroke="#1f2937" strokeWidth="3.4" strokeLinecap="round" />
    {[0, 1, 2].map(i => <line key={i} x1={70.5 + i * 2} y1={62 - i * 7} x2={72.5 + i * 2} y2={61 - i * 7} stroke="#0f766e" strokeWidth="1" />)}
    <circle cx="79" cy="30" r="7" fill="#14b8a6" opacity="0.22" />
    <path d="M80 16 L72 32 L78 32 L73 44 L88 24 L80 24 Z" fill="#2dd4bf" stroke="#99f6e4" strokeWidth="0.8" />
  </g>
);
const wDegen = (
  <g>
    <line x1="70" y1="65" x2="92" y2="21" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
    <line x1="71" y1="64" x2="90" y2="25" stroke="#f8fafc" strokeWidth="0.6" opacity="0.9" />
    <path d="M66 70 L73 60" stroke="#b8860b" strokeWidth="3" strokeLinecap="round" />
    <path d="M65 66.5 Q72 63.5 71.5 70 Q66 70 65 66.5 Z" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
    <circle cx="65.3" cy="70.6" r="1.7" fill="#b8860b" />
  </g>
);
const wHark = (
  <g>
    <line x1="70" y1="65" x2="85" y2="25" stroke="#6b4a2c" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="70" y1="65" x2="85" y2="25" stroke="#a07a4a" strokeWidth="1" strokeLinecap="round" />
    <line x1="79" y1="23" x2="93" y2="19" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    {[0, 1, 2, 3].map(i => <line key={i} x1={80 + i * 4} y1={22 - i} x2={81 + i * 4} y2={28.5 - i} stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />)}
    <circle cx="83" cy="24" r="1" fill="#94a3b8" />
  </g>
);
const wRammelaar = (
  <g>
    <line x1="70" y1="66" x2="76" y2="40" stroke="#0284c7" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="70" y1="66" x2="76" y2="40" stroke="#7dd3fc" strokeWidth="1" strokeLinecap="round" />
    <path d="M73 50 q-5 -2 -3 -6 q4 2 3 6" fill="#fbbf24" opacity="0.9" />
    <circle cx="77" cy="35" r="7.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.4" />
    <path d="M77 31 l1 2.4 l2.6 .2 l-2 1.7 .7 2.5 -2.3 -1.4 -2.3 1.4 .7 -2.5 -2 -1.7 2.6 -.2 Z" fill="#fff" opacity="0.9" />
    <circle cx="74.6" cy="32.6" r="1.5" fill="#bae6fd" opacity="0.7" />
  </g>
);
const wMicro = (
  <g>
    <line x1="70" y1="66" x2="76" y2="44" stroke="#27272a" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M70 66 q-4 4 -1 8" fill="none" stroke="#52525b" strokeWidth="1.2" />
    <rect x="71" y="31" width="9" height="12" rx="4.5" fill="#a78bfa" stroke="#6d28d9" strokeWidth="1" />
    <ellipse cx="75.5" cy="33.5" rx="2.6" ry="1.4" fill="#ddd6fe" opacity="0.6" />
    {[34, 37, 40].map(y => <line key={y} x1="72" y1={y} x2="79" y2={y} stroke="#4c1d95" strokeWidth="0.5" />)}
  </g>
);
const wScroll = (
  <g>
    <path d="M70 66 Q77 52 79 36" fill="none" stroke="#5b432a" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M70 66 Q77 52 79 36" fill="none" stroke="#8a6a44" strokeWidth="1" strokeLinecap="round" />
    <g transform="rotate(-16 80 31)">
      <rect x="74" y="27" width="12" height="9" rx="1.5" fill="#f5f0e6" stroke="#c9b896" strokeWidth="0.8" />
      <rect x="73" y="26" width="2" height="11" rx="1" fill="#8a6a44" /><rect x="85" y="26" width="2" height="11" rx="1" fill="#8a6a44" />
      <line x1="76" y1="30" x2="84" y2="30" stroke="#a3a3a3" strokeWidth="0.5" /><line x1="76" y1="32.5" x2="83" y2="32.5" stroke="#a3a3a3" strokeWidth="0.5" />
      <circle cx="80" cy="36.5" r="1.4" fill="#b91c1c" />
    </g>
  </g>
);

// ─────────────────────────── HARNAS ─────────────────────────────
const aDraagzak = (
  <g>
    <line x1="44" y1="44" x2="46" y2="51" stroke="#0ea5e9" strokeWidth="2" /><line x1="56" y1="44" x2="54" y2="51" stroke="#0ea5e9" strokeWidth="2" />
    <rect x="42" y="50" width="16" height="16" rx="5" fill="#38bdf8" />
    <circle cx="50" cy="55" r="4.5" fill="#f2c79b" /><path d="M47 56 q3 2 6 0" stroke="#1c1917" strokeWidth="1" fill="none" />
  </g>
);
const aToga = (
  <g>
    <path d="M40 41 L60 41 L58 70 L42 70 Z" fill="#ede9fe" />
    <path d="M41 43 L57 64" stroke="#818cf8" strokeWidth="2.5" fill="none" /><path d="M40 44 q10 6 20 0" stroke="#818cf8" strokeWidth="1.4" fill="none" />
  </g>
);
const aSchort = (
  <g>
    <path d="M44 47 L56 47 L57 70 L43 70 Z" fill="#f5f5f4" />
    <line x1="47" y1="43" x2="49" y2="47" stroke="#84cc16" strokeWidth="2" /><line x1="53" y1="43" x2="51" y2="47" stroke="#84cc16" strokeWidth="2" />
    <rect x="43" y="63" width="14" height="4" fill="#84cc16" />
  </g>
);
const aVest = (
  <g>
    <path d="M41 41 L48 43 L47 68 L42 66 Z" fill="#7c2d12" /><path d="M59 41 L52 43 L53 68 L58 66 Z" fill="#7c2d12" />
    <circle cx="45" cy="50" r="0.9" fill="#fbbf24" /><circle cx="45" cy="56" r="0.9" fill="#fbbf24" /><circle cx="55" cy="50" r="0.9" fill="#fbbf24" /><circle cx="55" cy="56" r="0.9" fill="#fbbf24" />
  </g>
);
const aBlazer = (
  <g>
    <path d="M41 41 L59 41 L57 69 L43 69 Z" fill="#1e293b" />
    <path d="M50 41 L44 55 L50 52 Z" fill="#0f172a" /><path d="M50 41 L56 55 L50 52 Z" fill="#0f172a" />
    <path d="M50 42 L50 67" stroke="#a78bfa" strokeWidth="0.7" opacity="0.6" />
  </g>
);
const aTuinschort = (
  <g>
    <path d="M44 47 L56 47 L57 70 L43 70 Z" fill="#3f6212" />
    <rect x="46" y="56" width="8" height="7" rx="1" fill="#1a2e05" />
    <line x1="47" y1="43" x2="49" y2="47" stroke="#65a30d" strokeWidth="2" /><line x1="53" y1="43" x2="51" y2="47" stroke="#65a30d" strokeWidth="2" />
  </g>
);

// ──────────────────────────── CAPES ─────────────────────────────
const cPodium = cape('#ea580c', '#fdba74', <>{note(43, 70, '#fff7ed')}{note(56, 78, '#fff7ed')}</>);
const cDeken = cape('#7dd3fc', '#e0f2fe', <>{[44, 54].map(x => <rect key={x} x={x} y={66} width="5" height="5" fill="#38bdf8" opacity="0.6" />)}</>);
const cMatador = cape('#dc2626', '#fbbf24', <path d="M44 50 L56 50 L54 88 L46 88 Z" fill="#fbbf24" opacity="0.25" />);
const cInspiratie = cape('#7c3aed', '#c4b5fd', <>{[60, 74, 88].map(y => <path key={y} d={`M46 ${y} L50 ${y - 5} L54 ${y}`} stroke="#ddd6fe" strokeWidth="1.5" fill="none" />)}</>);
const cTheedoek = cape('#e2e8f0', '#94a3b8', <>{[0, 1, 2, 3].map(i => <rect key={i} x={42 + (i % 2) * 7} y={62 + Math.floor(i / 2) * 7} width="7" height="7" fill="#3b82f6" opacity="0.5" />)}</>);
const cDoorzetter = cape('#059669', '#6ee7b7', <path d="M40 96 L50 74 L60 96 Z" fill="#a7f3d0" opacity="0.35" />);
const cBlad = cape('#15803d', '#4ade80', <>{[44, 50, 56].map(x => <path key={x} d={`M${x} 70 q3 4 0 8 q-3 -4 0 -8`} fill="#4ade80" opacity="0.7" />)}</>);
const cSterren = cape('#312e81', '#6366f1', <>{[[43, 60], [57, 66], [48, 78], [60, 86], [40, 88]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.2" fill="#e0e7ff" />)}</>);
const cKimono = cape('#fb7185', '#fecdd3', <path d="M40 80 q5 -4 10 0 t10 0" stroke="#fff1f2" strokeWidth="1.5" fill="none" />);
const cZonnepaneel = cape('#0f766e', '#5eead4', <>{[0, 1, 2].map(c => [0, 1, 2].map(r => <rect key={`${c}${r}`} x={43 + c * 6} y={60 + r * 9} width="5" height="7" fill="#134e4a" opacity="0.6" stroke="#2dd4bf" strokeWidth="0.4" />))}</>);

// ──────────────────────────── HOOFD ─────────────────────────────
const hHeadset = (
  <g>
    <path d="M37 25 q13 -17 26 0" fill="none" stroke="#a78bfa" strokeWidth="3" />
    <rect x="34" y="24" width="4" height="7" rx="2" fill="#a78bfa" /><rect x="62" y="24" width="4" height="7" rx="2" fill="#a78bfa" />
    <path d="M36 31 q-3 5 5 6" stroke="#a78bfa" strokeWidth="2" fill="none" /><circle cx="41" cy="37" r="2" fill="#a78bfa" />
  </g>
);
const hLauwer = (
  <g stroke="#a3e635" strokeWidth="2.5" fill="none">
    <path d="M38 30 q-7 -11 0 -21" /><path d="M62 30 q7 -11 0 -21" />
    <g fill="#a3e635" stroke="none">{[0, 1, 2].map(i => <ellipse key={'l' + i} cx={36 - i} cy={26 - i * 7} rx="2.4" ry="1.4" transform={`rotate(${-40 - i * 10} ${36 - i} ${26 - i * 7})`} />)}{[0, 1, 2].map(i => <ellipse key={'r' + i} cx={64 + i} cy={26 - i * 7} rx="2.4" ry="1.4" transform={`rotate(${40 + i * 10} ${64 + i} ${26 - i * 7})`} />)}</g>
  </g>
);
const hBandana = (
  <g>
    <path d="M37 19 Q50 14 63 19 L63 23 Q50 19 37 23 Z" fill="#f97316" />
    <path d="M63 21 L70 18 L68 24 Z" fill="#ea580c" /><path d="M63 22 L69 23 L66 27 Z" fill="#ea580c" />
  </g>
);
const hSombrero = (
  <g>
    <ellipse cx="50" cy="18" rx="22" ry="5" fill="#d4a017" stroke="#a16207" strokeWidth="1" />
    <path d="M40 18 Q42 6 50 6 Q58 6 60 18 Z" fill="#d4a017" stroke="#a16207" strokeWidth="1" />
    <ellipse cx="50" cy="13" rx="10" ry="2.2" fill="#a16207" />
  </g>
);
const hKoksmuts = (
  <g>
    <rect x="42" y="14" width="16" height="8" fill="#f8fafc" />
    <ellipse cx="46" cy="11" rx="5" ry="5" fill="#f8fafc" /><ellipse cx="54" cy="11" rx="5" ry="5" fill="#f8fafc" /><ellipse cx="50" cy="9" rx="5.5" ry="5.5" fill="#f8fafc" />
    <rect x="42" y="20" width="16" height="2" fill="#e2e8f0" />
  </g>
);
const hFocus = (
  <g>
    <path d="M37 22 Q50 17 63 22 L63 25 Q50 21 37 25 Z" fill="#34d399" />
    <circle cx="50" cy="22" r="1.6" fill="#065f46" />
  </g>
);
const hStrohoed = (
  <g>
    <ellipse cx="50" cy="19" rx="18" ry="4.2" fill="#e0c068" stroke="#b08d2a" strokeWidth="0.8" />
    <path d="M42 19 Q44 8 50 8 Q56 8 58 19 Z" fill="#e0c068" stroke="#b08d2a" strokeWidth="0.8" />
    <ellipse cx="50" cy="14" rx="8.5" ry="2" fill="#16a34a" />
  </g>
);
const hHachimaki = (
  <g>
    <path d="M37 21 Q50 16 63 21 L63 24 Q50 20 37 24 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.5" />
    <circle cx="50" cy="21.5" r="2.4" fill="#dc2626" />
    <path d="M37 22 L31 20 L33 26 Z" fill="#f8fafc" />
  </g>
);
const hHelm = (
  <g>
    <path d="M37 22 Q50 9 63 22 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="1" />
    <rect x="44" y="13" width="12" height="7" fill="#0f766e" stroke="#2dd4bf" strokeWidth="0.5" />
    <line x1="47" y1="13" x2="47" y2="20" stroke="#2dd4bf" strokeWidth="0.4" /><line x1="53" y1="13" x2="53" y2="20" stroke="#2dd4bf" strokeWidth="0.4" />
  </g>
);

// ──────────────────────────── AURA ──────────────────────────────
const auNoten = (
  <g opacity="0.9">
    <circle cx="50" cy="58" r="46" fill="none" stroke="#f97316" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="2 6" />
    {note(15, 34, '#f97316')}{note(83, 30, '#f97316')}{note(11, 80, '#fb923c')}{note(86, 82, '#fb923c')}
  </g>
);
const auOle = (
  <g opacity="0.9">
    {[28, 72].map((x, i) => <g key={i}><path d={`M${x} 96 q-6 -10 0 -18 q6 8 0 18 Z`} fill="#fbbf24" /><path d={`M${x} 94 q-3 -6 0 -11 q3 5 0 11 Z`} fill="#ef4444" /></g>)}
  </g>
);
const auSpot = (
  <g><path d="M50 -2 L18 62 L82 62 Z" fill="#a78bfa" opacity="0.14" /><circle cx="50" cy="56" r="44" fill="#a78bfa" opacity="0.07" /></g>
);
const auGroei = (
  <g fill="none" stroke="#34d399">{[30, 38, 46].map((r, i) => <circle key={i} cx="50" cy="58" r={r} strokeOpacity={0.32 - i * 0.08} strokeWidth="2" />)}</g>
);
const auSakura = (
  <g opacity="0.92">{[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = (i / 8) * Math.PI * 2, x = 50 + Math.cos(a) * 44, y = 58 + Math.sin(a) * 44; return <ellipse key={i} cx={x} cy={y} rx="2.6" ry="5" fill="#fb7185" opacity="0.85" transform={`rotate(${i * 45} ${x} ${y})`} />; })}</g>
);
const auElektrisch = (
  <g opacity="0.9" stroke="#2dd4bf" strokeWidth="1.6" fill="none">{[0, 1, 2, 3].map(i => { const a = (i / 4) * Math.PI * 2 + 0.6, x = 50 + Math.cos(a) * 40, y = 58 + Math.sin(a) * 40; return <path key={i} d={`M${x} ${y} l3 4 l-4 1 l3 4`} />; })}</g>
);

// ─────────────────────────── RIJDIER ────────────────────────────
const rWagen = (
  <g>
    <path d="M32 96 L62 96 L60 90 L34 90 Z" fill="#38bdf8" /><path d="M34 90 Q47 80 60 90" fill="none" stroke="#0ea5e9" strokeWidth="2" />
    <line x1="62" y1="92" x2="74" y2="86" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="104" r="6" fill="#1c1917" /><circle cx="56" cy="104" r="6" fill="#1c1917" /><circle cx="40" cy="104" r="2" fill="#38bdf8" /><circle cx="56" cy="104" r="2" fill="#38bdf8" />
  </g>
);
const rKruiwagen = (
  <g>
    <path d="M30 92 L70 92 L64 104 L36 104 Z" fill="#16a34a" stroke="#14532d" strokeWidth="1" />
    <line x1="66" y1="94" x2="82" y2="106" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="113" r="7" fill="#1c1917" /><circle cx="50" cy="113" r="3" fill="#16a34a" />
  </g>
);
const rEbike = (
  <g>
    <circle cx="32" cy="110" r="9" fill="none" stroke="#14b8a6" strokeWidth="3" /><circle cx="68" cy="110" r="9" fill="none" stroke="#14b8a6" strokeWidth="3" />
    <path d="M32 110 L50 97 L68 110 M50 97 L50 90" stroke="#14b8a6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <rect x="45" y="99" width="9" height="6" rx="1" fill="#14b8a6" /><path d="M58 104 L54 110 L57 110 L54 116" stroke="#fcd34d" strokeWidth="1.5" fill="none" />
  </g>
);

// ──────────────────────────── MAATJE ────────────────────────────
const mMentor = (
  <g>
    <path d="M77 94 L91 94 L88 80 Q84 77 80 80 Z" fill="#10b981" />
    <path d="M84 80 L84 94 M80.5 82 L81.5 93 M87.5 82 L86.5 93" stroke="#047857" strokeWidth="0.6" opacity="0.7" />
    <circle cx="84" cy="76" r="5" fill="#f2c79b" />
    <path d="M79 76 a5 5 0 0 1 10 0 Q84 73 79 76 Z" fill="#34d399" />
    <circle cx="82.4" cy="76.5" r="0.8" fill="#0a0a0a" /><circle cx="85.6" cy="76.5" r="0.8" fill="#0a0a0a" />
    <path d="M82 79 Q84 81.5 86 79" fill="#e5e7eb" />
    <line x1="91" y1="78" x2="91" y2="94" stroke="#6b4a2c" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="91" cy="77" r="1.7" fill="#fcd34d" />
  </g>
);
const mUil = (
  <g>
    <ellipse cx="84" cy="85" rx="8" ry="10" fill="#6366f1" />
    <ellipse cx="84" cy="87" rx="4.5" ry="6.5" fill="#c7d2fe" opacity="0.8" />
    <path d="M77 79 L79 73 L82 78 M86 78 L88 73 L91 79" fill="#6366f1" />
    <path d="M77 82 Q75 87 78 91 Q79 86 79 83 Z" fill="#4f46e5" />
    <circle cx="81" cy="81" r="3.1" fill="#fff" /><circle cx="87" cy="81" r="3.1" fill="#fff" />
    <circle cx="81.3" cy="81.3" r="1.4" fill="#0a0a0a" /><circle cx="86.7" cy="81.3" r="1.4" fill="#0a0a0a" />
    <circle cx="81.8" cy="80.8" r="0.4" fill="#fff" /><circle cx="87.2" cy="80.8" r="0.4" fill="#fff" />
    <path d="M82.6 84 L85.4 84 L84 86.2 Z" fill="#fbbf24" />
    <path d="M82 95 l0 2 M86 95 l0 2" stroke="#fbbf24" strokeWidth="1" strokeLinecap="round" />
  </g>
);
const mDraak = (
  <g>
    <path d="M84 92 q9 -1 8 -9 q-3 4 -6 5 Z" fill="#38bdf8" stroke="#0ea5e9" strokeWidth="0.6" />
    <ellipse cx="84" cy="86" rx="7" ry="8" fill="#38bdf8" />
    <ellipse cx="84" cy="88" rx="3.6" ry="4.6" fill="#bae6fd" opacity="0.85" />
    <path d="M81 79 L82 75 L84 79 M84 79 L86 75 L87 79" fill="#bae6fd" />
    <path d="M78 83 Q72 81 73 88 Q77 86 79 86 Z" fill="#0ea5e9" />
    <circle cx="82" cy="84" r="1.1" fill="#0a0a0a" /><circle cx="86" cy="84" r="1.1" fill="#0a0a0a" />
    <path d="M82.5 87 Q84 89 85.5 87" fill="none" stroke="#0c4a6e" strokeWidth="0.8" strokeLinecap="round" />
  </g>
);
const mPan = (
  <g>
    <path d="M82 74 q-2 -3 0 -6 M86 74 q2 -3 0 -6" fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
    <path d="M77 82 a7 6 0 0 0 14 0 Z" fill="#475569" stroke="#1e293b" strokeWidth="0.8" />
    <ellipse cx="84" cy="82" rx="7" ry="2" fill="#334155" />
    <ellipse cx="84" cy="82" rx="5" ry="1.2" fill="#64748b" opacity="0.7" />
    <line x1="91" y1="82" x2="98" y2="80" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="91.5" cy="82" r="0.8" fill="#94a3b8" />
    <circle cx="81" cy="85" r="0.9" fill="#84cc16" /><circle cx="87" cy="85" r="0.9" fill="#84cc16" />
    <path d="M82 87.5 Q84 89 86 87.5" fill="none" stroke="#84cc16" strokeWidth="0.8" strokeLinecap="round" />
  </g>
);
const mKitsune = (
  <g>
    <path d="M88 90 q9 -1 7 -10 q-2 5 -6 6 Z" fill="#fb7185" /><path d="M93.5 81 q1.5 4 -2 7 q1 -3 1 -5 Z" fill="#fff" opacity="0.9" />
    <path d="M86 91 q8 1 9 -7 q-3 4 -7 4 Z" fill="#fda4af" /><path d="M93.5 85 q1 3 -2 5 q1 -2 1 -4 Z" fill="#fff" opacity="0.85" />
    <ellipse cx="83" cy="86" rx="6" ry="6.5" fill="#fb7185" />
    <path d="M79 81 L80 75 L83.2 80 M83 80 L86 75 L87.5 81" fill="#fb7185" />
    <path d="M80 78.5 L80.6 76.5 L82 79 M83.6 79 L85 76.5 L85.6 78.5" fill="#fecdd3" />
    <ellipse cx="83" cy="88" rx="3.2" ry="2.6" fill="#fff" opacity="0.85" />
    <circle cx="81.4" cy="85" r="1" fill="#0a0a0a" /><circle cx="84.8" cy="85" r="1" fill="#0a0a0a" />
    <path d="M82.6 88 L84 88 L83.3 89.2 Z" fill="#0a0a0a" />
  </g>
);

// ─────────────────────────── CATALOGUS ──────────────────────────
export const ITEMS: Item[] = [
  // Muziek
  { id: 'w_gitaar', name: 'Gitaar-bijl', slot: 'wapen', islandId: 'muziek', tier: 1, render: () => wGitaar },
  { id: 'ar_vest', name: 'Rocker-vest', slot: 'harnas', islandId: 'muziek', tier: 1, render: () => aVest },
  { id: 'h_bandana', name: 'Bandana', slot: 'hoofd', islandId: 'muziek', tier: 2, render: () => hBandana },
  { id: 'c_podium', name: 'Podium-cape', slot: 'cape', islandId: 'muziek', tier: 2, render: () => cPodium },
  { id: 'au_noten', name: 'Noten-aura', slot: 'aura', islandId: 'muziek', tier: 3, render: () => auNoten },
  // Vaderschap
  { id: 'w_rammelaar', name: 'Rammelaar-scepter', slot: 'wapen', islandId: 'vaderschap', tier: 1, render: () => wRammelaar },
  { id: 'ar_draagzak', name: 'Draagzak', slot: 'harnas', islandId: 'vaderschap', tier: 1, render: () => aDraagzak },
  { id: 'c_deken', name: 'Knuffeldeken-cape', slot: 'cape', islandId: 'vaderschap', tier: 2, render: () => cDeken },
  { id: 'm_draak', name: 'Knuffeldraak', slot: 'maatje', islandId: 'vaderschap', tier: 2, render: () => mDraak },
  { id: 'r_wagen', name: 'Kinderwagen', slot: 'rijdier', islandId: 'vaderschap', tier: 3, render: () => rWagen },
  // Spaans
  { id: 'w_degen', name: 'Matador-degen', slot: 'wapen', islandId: 'spaans', tier: 1, render: () => wDegen },
  { id: 'h_sombrero', name: 'Sombrero', slot: 'hoofd', islandId: 'spaans', tier: 1, render: () => hSombrero },
  { id: 'c_matador', name: 'Matador-cape', slot: 'cape', islandId: 'spaans', tier: 2, render: () => cMatador },
  { id: 'au_ole', name: 'Olé-vlam', slot: 'aura', islandId: 'spaans', tier: 3, render: () => auOle },
  // Persoonlijke groei
  { id: 'w_micro', name: 'Microfoon-staf', slot: 'wapen', islandId: 'groei', tier: 1, render: () => wMicro },
  { id: 'h_headset', name: 'Spreker-headset', slot: 'hoofd', islandId: 'groei', tier: 1, render: () => hHeadset },
  { id: 'ar_blazer', name: 'Blazer', slot: 'harnas', islandId: 'groei', tier: 2, render: () => aBlazer },
  { id: 'c_inspiratie', name: 'Inspiratie-cape', slot: 'cape', islandId: 'groei', tier: 2, render: () => cInspiratie },
  { id: 'au_spot', name: 'Spotlight', slot: 'aura', islandId: 'groei', tier: 3, render: () => auSpot },
  // Koken
  { id: 'w_koksmes', name: 'Koksmes', slot: 'wapen', islandId: 'koken', tier: 1, render: () => wKoksmes },
  { id: 'ar_schort', name: 'Kookschort', slot: 'harnas', islandId: 'koken', tier: 1, render: () => aSchort },
  { id: 'h_koksmuts', name: 'Koksmuts', slot: 'hoofd', islandId: 'koken', tier: 2, render: () => hKoksmuts },
  { id: 'c_theedoek', name: 'Theedoek-cape', slot: 'cape', islandId: 'koken', tier: 2, render: () => cTheedoek },
  { id: 'm_pan', name: 'Sauspan-maatje', slot: 'maatje', islandId: 'koken', tier: 3, render: () => mPan },
  // Self-improvement
  { id: 'h_focus', name: 'Focusband', slot: 'hoofd', islandId: 'self-improvement', tier: 1, render: () => hFocus },
  { id: 'm_mentor', name: 'Mini-mentor', slot: 'maatje', islandId: 'self-improvement', tier: 1, render: () => mMentor },
  { id: 'au_groei', name: 'Groei-gloed', slot: 'aura', islandId: 'self-improvement', tier: 2, render: () => auGroei },
  { id: 'c_doorzetter', name: 'Doorzetters-cape', slot: 'cape', islandId: 'self-improvement', tier: 3, render: () => cDoorzetter },
  // Tuin
  { id: 'w_hark', name: 'Tuinhark', slot: 'wapen', islandId: 'tuin', tier: 1, render: () => wHark },
  { id: 'h_strohoed', name: 'Strohoed', slot: 'hoofd', islandId: 'tuin', tier: 1, render: () => hStrohoed },
  { id: 'ar_tuinschort', name: 'Tuinschort', slot: 'harnas', islandId: 'tuin', tier: 2, render: () => aTuinschort },
  { id: 'c_blad', name: 'Bladeren-cape', slot: 'cape', islandId: 'tuin', tier: 2, render: () => cBlad },
  { id: 'r_kruiwagen', name: 'Kruiwagen', slot: 'rijdier', islandId: 'tuin', tier: 3, render: () => rKruiwagen },
  // Filosofie
  { id: 'w_scroll', name: 'Boekrol-staf', slot: 'wapen', islandId: 'filosofie', tier: 1, render: () => wScroll },
  { id: 'a_toga', name: 'Toga', slot: 'harnas', islandId: 'filosofie', tier: 1, render: () => aToga },
  { id: 'c_sterren', name: 'Sterren-cape', slot: 'cape', islandId: 'filosofie', tier: 2, render: () => cSterren },
  { id: 'm_uil', name: 'Wijze uil', slot: 'maatje', islandId: 'filosofie', tier: 2, render: () => mUil },
  { id: 'h_lauwer', name: 'Lauwerkrans', slot: 'hoofd', islandId: 'filosofie', tier: 3, render: () => hLauwer },
  // Japans
  { id: 'w_katana', name: 'Katana', slot: 'wapen', islandId: 'japans', tier: 1, render: () => wKatana },
  { id: 'h_hachimaki', name: 'Hoofdband', slot: 'hoofd', islandId: 'japans', tier: 1, render: () => hHachimaki },
  { id: 'c_kimono', name: 'Kimono-mantel', slot: 'cape', islandId: 'japans', tier: 2, render: () => cKimono },
  { id: 'm_kitsune', name: 'Kitsune', slot: 'maatje', islandId: 'japans', tier: 3, render: () => mKitsune },
  { id: 'au_sakura', name: 'Kersenbloesem', slot: 'aura', islandId: 'japans', tier: 3, render: () => auSakura },
  // Energietransitie
  { id: 'w_bliksem', name: 'Bliksemstaf', slot: 'wapen', islandId: 'energietransitie', tier: 1, render: () => wBliksem },
  { id: 'h_helm', name: 'Energie-helm', slot: 'hoofd', islandId: 'energietransitie', tier: 1, render: () => hHelm },
  { id: 'au_elektrisch', name: 'Elektrische aura', slot: 'aura', islandId: 'energietransitie', tier: 2, render: () => auElektrisch },
  { id: 'c_zonnepaneel', name: 'Zonnepaneel-cape', slot: 'cape', islandId: 'energietransitie', tier: 2, render: () => cZonnepaneel },
  { id: 'r_ebike', name: 'E-bike', slot: 'rijdier', islandId: 'energietransitie', tier: 3, render: () => rEbike },
];

export const ITEMS_BY_ID: Record<string, Item> = Object.fromEntries(ITEMS.map(i => [i.id, i]));

// ─── Ontgrendel-logica ──────────────────────────────────────────
export function neededFor(item: Item): number {
  const isl = islands.find(i => i.id === item.islandId);
  const total = isl ? islandOrbs(isl).length : 0;
  if (item.tier === 1) return 1;
  if (item.tier === 2) return Math.ceil(total / 2);
  return total;
}

export function completedInIsland(islandId: string, completed: string[]): number {
  const isl = islands.find(i => i.id === islandId);
  if (!isl) return 0;
  const ids = new Set(islandOrbs(isl).map(o => o.id));
  return completed.filter(id => ids.has(id)).length;
}

export function isUnlocked(item: Item, state: StorageV1): boolean {
  return completedInIsland(item.islandId, state.completed) >= neededFor(item);
}
