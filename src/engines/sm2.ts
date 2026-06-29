import type { CardState } from '../types';
import { todayISO, addDays, daysUntil } from './storage';

// SuperMemo-2 (vereenvoudigd, 3 knoppen) = onze "Memory Shield".
// quality: 0 = kwijt, 3 = twijfel, 5 = weet ik zeker
export type Quality = 0 | 3 | 5;

// Behapbaar dagdoel voor een review-sessie.
export const DAILY_GOAL = 12;

const fresh = (): CardState => ({ ef: 2.5, interval: 0, reps: 0, due: todayISO() });

export function review(prev: CardState | undefined, q: Quality): CardState {
  const s = prev ? { ...prev } : fresh();
  s.lastSeen = todayISO();

  if (q < 3) {
    // fout / kwijt: reset reps + morgen weer
    s.reps = 0;
    s.interval = 1;
  } else {
    s.reps += 1;
    if (s.reps === 1) s.interval = 1;
    else if (s.reps === 2) s.interval = 3;
    else s.interval = Math.round(s.interval * s.ef);
    s.ef = Math.max(1.3, s.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  }

  s.due = addDays(todayISO(), s.interval);
  return s;
}

export function isDue(state: CardState | undefined): boolean {
  if (!state) return true;
  return state.due <= todayISO();
}

// Vertaal een sessie-score (aandeel goed beantwoord, 0..1) naar SM-2 quality.
export function qualityFromScore(score: number): Quality {
  if (score >= 0.8) return 5;
  if (score >= 0.5) return 3;
  return 0;
}

// "Geheugen-gezondheid" voor de Knowledge Bank-heatmap: 0 (rood/overdue) → 1 (groen/vers).
export function memoryHealth(state: CardState | undefined): number {
  if (!state) return 0;
  const left = daysUntil(state.due); // >0 nog veilig, ≤0 overdue
  if (state.interval <= 0) return 0.35;
  return Math.max(0, Math.min(1, left / state.interval));
}
