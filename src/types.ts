// ─── Content-model ──────────────────────────────────────────────
// Eiland (pathway) → Topic → Orb (1 concept). Een orb is een korte
// leersessie: lezen → vragen → samenvatting.

export type Glossary = { term: string; def: string };

// Vraagtypes — discriminated union op `type`.
export type McqQuestion = {
  type: 'mcq';
  prompt: string;
  options: string[];
  correct: number; // index in options
  explain: string;
};
export type TrueFalseQuestion = {
  type: 'truefalse';
  prompt: string;
  answer: boolean;
  explain: string;
};
export type WhyHowQuestion = {
  type: 'whyhow'; // open vraag, zelf beoordeeld
  prompt: string;
  model: string; // modelantwoord om jezelf mee te vergelijken
};
export type OrderingQuestion = {
  type: 'ordering';
  prompt: string;
  items: string[]; // in JUISTE volgorde (UI shuffelt)
  explain: string;
};
export type MatchingQuestion = {
  type: 'matching';
  prompt: string;
  pairs: { left: string; right: string }[]; // juiste koppels (UI shuffelt rechts)
  explain: string;
};
export type Question =
  | McqQuestion
  | TrueFalseQuestion
  | WhyHowQuestion
  | OrderingQuestion
  | MatchingQuestion;

export type Source = { label: string; url: string };

export type Orb = {
  id: string;
  title: string;
  body: string; // markdown-light (**bold**, alinea's)
  glossary?: Glossary[];
  priming: string; // preview-vraag (zonder antwoord; zet je aan het denken)
  questions: Question[];
  summary: string[]; // bullets die het concept vastzetten
  sources?: Source[]; // gezaghebbende bronnen (bv. medische orbs)
};

export type Topic = {
  id: string;
  title: string;
  orbs: Orb[];
};

export type Island = {
  id: string;
  title: string;
  blurb: string;
  icon: string; // emoji
  color: string; // hex-accent voor dit eiland
  pos: { x: number; y: number }; // positie op de map (0-100)
  topics: Topic[];
};

// ─── Voortgang (localStorage) ───────────────────────────────────
export type CardState = {
  ef: number; // ease factor (SM-2)
  interval: number; // dagen tot volgende review
  reps: number; // correcte reps op rij
  due: string; // YYYY-MM-DD
  lastSeen?: string;
};

export type StorageV1 = {
  version: 1;
  cards: Record<string, CardState>; // per orbId (Memory Shield)
  completed: string[]; // orbIds ooit afgerond
  stamps: string[]; // YYYY-MM-DD met ≥1 sessie — nooit reset
  certificates: string[]; // islandIds 100% afgerond
  lastOrb?: string; // voor "ga verder" op Home
};
