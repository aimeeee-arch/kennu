import type { Island, Topic, Orb } from '../types';
import { muziek } from './muziek';
import { vaderschap } from './vaderschap';
import { spaans } from './talen-spaans';
import { groei } from './groei';
import { koken } from './koken';
import { selfImprovement } from './self-improvement';
import { tuin } from './tuin';
import { filosofie } from './filosofie';
import { japans } from './japans';
import { energietransitie } from './energietransitie';

export const islands: Island[] = [
  muziek,
  vaderschap,
  spaans,
  groei,
  koken,
  selfImprovement,
  tuin,
  filosofie,
  japans,
  energietransitie,
];

export function findIsland(id: string): Island | undefined {
  return islands.find(i => i.id === id);
}

export function allOrbs(): Orb[] {
  return islands.flatMap(i => i.topics.flatMap(t => t.orbs));
}

export function findOrb(orbId: string): Orb | undefined {
  return allOrbs().find(o => o.id === orbId);
}

// Stabiele "orb van de dag": zelfde orb gedurende de hele dag (seed = datum).
export function orbOfDay(seed: string): Orb {
  const orbs = allOrbs();
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return orbs[h % orbs.length];
}

// Geef de context van een orb terug: in welk eiland/topic zit hij, en de volgorde.
export function orbContext(orbId: string):
  | { island: Island; topic: Topic; orb: Orb; flatIndex: number; flatOrbs: Orb[] }
  | undefined {
  for (const island of islands) {
    const flatOrbs = island.topics.flatMap(t => t.orbs);
    for (const topic of island.topics) {
      const orb = topic.orbs.find(o => o.id === orbId);
      if (orb) {
        return { island, topic, orb, flatIndex: flatOrbs.indexOf(orb), flatOrbs };
      }
    }
  }
  return undefined;
}

export function islandOrbs(island: Island): Orb[] {
  return island.topics.flatMap(t => t.orbs);
}

export function islandProgress(island: Island, completed: string[]): { done: number; total: number } {
  const orbs = islandOrbs(island);
  const done = orbs.filter(o => completed.includes(o.id)).length;
  return { done, total: orbs.length };
}
