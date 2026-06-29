import type { StorageV1, CardState } from '../types';

const KEY = 'kennu-v1';

const empty = (): StorageV1 => ({
  version: 1,
  cards: {},
  completed: [],
  stamps: [],
  certificates: [],
  equipped: {},
});

export function load(): StorageV1 {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) return empty();
    return { ...empty(), ...parsed };
  } catch {
    return empty();
  }
}

export function save(state: StorageV1) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // ignore (private mode / quota)
  }
}

export function update(mutator: (s: StorageV1) => void): StorageV1 {
  const s = load();
  mutator(s);
  save(s);
  return s;
}

export function clearAll() {
  localStorage.removeItem(KEY);
}

// ─── Datum-helpers (lokaal, tijdzone-stabiel) ───────────────────
function fmt(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function localMidnight(iso: string): number {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).getTime();
}

export function todayISO(): string {
  return fmt(new Date());
}

export function addDays(iso: string, n: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  return fmt(new Date(y, m - 1, d + n));
}

// due - vandaag, in hele dagen (negatief = overdue)
export function daysUntil(iso: string): number {
  return Math.round((localMidnight(iso) - localMidnight(todayISO())) / 86400000);
}

// ─── Cards (Memory Shield) ──────────────────────────────────────
export function getCard(orbId: string): CardState | undefined {
  return load().cards[orbId];
}

export function setCard(orbId: string, state: CardState) {
  return update(s => {
    s.cards[orbId] = state;
  });
}

// ─── Voltooiing + stamps ────────────────────────────────────────
export function markCompleted(orbId: string) {
  return update(s => {
    if (!s.completed.includes(orbId)) s.completed.push(orbId);
    s.lastOrb = orbId;
    const today = todayISO();
    if (!s.stamps.includes(today)) s.stamps.push(today);
  });
}

export function setEquip(slot: string, itemId: string | null) {
  return update(s => {
    s.equipped ??= {};
    if (itemId === null) delete s.equipped[slot];
    else s.equipped[slot] = itemId;
  });
}

export function grantCertificate(islandId: string) {
  return update(s => {
    if (!s.certificates.includes(islandId)) s.certificates.push(islandId);
  });
}

// ─── Export / import ────────────────────────────────────────────
export function exportJSON(): string {
  return JSON.stringify(load(), null, 2);
}

export function importJSON(raw: string): boolean {
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) return false;
    save({ ...empty(), ...parsed });
    return true;
  } catch {
    return false;
  }
}
