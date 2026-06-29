import { useState } from 'react';
import type { Question } from '../types';

type Props = {
  question: Question;
  accent: string;
  onGraded: (grade: number) => void;
  onNext: () => void;
  isLast: boolean;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuestionCard({ question, accent, onGraded, onNext, isLast }: Props) {
  const q = question;
  const [done, setDone] = useState(false);
  const [grade, setGrade] = useState(0);

  // type-specifieke antwoordstaat
  const [sel, setSel] = useState<number | null>(null);
  const [tf, setTf] = useState<boolean | null>(null);
  const [order, setOrder] = useState<string[]>(() =>
    q.type === 'ordering' ? shuffle(q.items) : [],
  );
  const [rights] = useState<string[]>(() =>
    q.type === 'matching' ? shuffle(q.pairs.map(p => p.right)) : [],
  );
  const [match, setMatch] = useState<Record<number, string>>({});
  const [showModel, setShowModel] = useState(false);

  const commit = (g: number) => {
    setGrade(g);
    setDone(true);
    onGraded(g);
  };

  const moveOrder = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    const a = [...order];
    [a[i], a[j]] = [a[j], a[i]];
    setOrder(a);
  };

  const nextBtn = (
    <button
      onClick={onNext}
      className="mt-4 w-full py-2.5 rounded-xl font-medium text-zinc-950"
      style={{ background: accent }}
    >
      {isLast ? 'Naar samenvatting →' : 'Volgende vraag →'}
    </button>
  );

  const verdict = (ok: boolean, partial?: boolean) => (
    <div
      className="mt-3 text-sm font-medium"
      style={{ color: ok ? '#4ade80' : partial ? '#fbbf24' : '#f87171' }}
    >
      {ok ? '✓ Goed' : partial ? '≈ Deels goed' : '✗ Niet helemaal'}
    </div>
  );

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
      <p className="font-medium mb-3">{q.prompt}</p>

      {/* ── Meerkeuze ─────────────────────────────── */}
      {q.type === 'mcq' && (
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const chosen = sel === i;
            const isCorrect = i === q.correct;
            const show = done;
            return (
              <button
                key={i}
                disabled={done}
                onClick={() => setSel(i)}
                className="w-full text-left px-3 py-2 rounded-xl border transition disabled:cursor-default"
                style={{
                  borderColor: show
                    ? isCorrect
                      ? '#4ade80'
                      : chosen
                        ? '#f87171'
                        : '#27272a'
                    : chosen
                      ? accent
                      : '#3f3f46',
                  background: chosen && !show ? 'rgba(255,255,255,0.04)' : undefined,
                }}
              >
                {opt}
                {show && isCorrect && ' ✓'}
              </button>
            );
          })}
          {!done ? (
            <button
              disabled={sel === null}
              onClick={() => commit(sel === q.correct ? 1 : 0)}
              className="mt-2 w-full py-2.5 rounded-xl font-medium bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40"
            >
              Controleer
            </button>
          ) : (
            <>
              {verdict(grade === 1)}
              <p className="mt-1 text-sm text-zinc-300">{q.explain}</p>
              {nextBtn}
            </>
          )}
        </div>
      )}

      {/* ── Waar / niet waar ──────────────────────── */}
      {q.type === 'truefalse' && (
        <div className="space-y-2">
          <div className="flex gap-2">
            {[true, false].map(val => {
              const chosen = tf === val;
              const show = done;
              const isCorrect = val === q.answer;
              return (
                <button
                  key={String(val)}
                  disabled={done}
                  onClick={() => setTf(val)}
                  className="flex-1 py-2.5 rounded-xl border font-medium"
                  style={{
                    borderColor: show
                      ? isCorrect
                        ? '#4ade80'
                        : chosen
                          ? '#f87171'
                          : '#27272a'
                      : chosen
                        ? accent
                        : '#3f3f46',
                  }}
                >
                  {val ? 'Waar' : 'Niet waar'}
                </button>
              );
            })}
          </div>
          {!done ? (
            <button
              disabled={tf === null}
              onClick={() => commit(tf === q.answer ? 1 : 0)}
              className="mt-2 w-full py-2.5 rounded-xl font-medium bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40"
            >
              Controleer
            </button>
          ) : (
            <>
              {verdict(grade === 1)}
              <p className="mt-1 text-sm text-zinc-300">{q.explain}</p>
              {nextBtn}
            </>
          )}
        </div>
      )}

      {/* ── Volgorde ──────────────────────────────── */}
      {q.type === 'ordering' && (
        <div className="space-y-2">
          {order.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-900"
            >
              <span className="text-xs opacity-50 w-4 tabular-nums">{i + 1}</span>
              <span className="flex-1 text-sm">{item}</span>
              {!done && (
                <span className="flex flex-col leading-none">
                  <button onClick={() => moveOrder(i, -1)} className="px-1 opacity-70 hover:opacity-100">▲</button>
                  <button onClick={() => moveOrder(i, 1)} className="px-1 opacity-70 hover:opacity-100">▼</button>
                </span>
              )}
            </div>
          ))}
          {!done ? (
            <button
              onClick={() => commit(order.every((it, i) => it === q.items[i]) ? 1 : 0)}
              className="mt-2 w-full py-2.5 rounded-xl font-medium bg-zinc-800 hover:bg-zinc-700"
            >
              Controleer
            </button>
          ) : (
            <>
              {verdict(grade === 1)}
              {grade < 1 && (
                <div className="mt-2 text-sm text-zinc-300">
                  <div className="opacity-60 mb-1">Juiste volgorde:</div>
                  <ol className="list-decimal list-inside space-y-0.5">
                    {q.items.map((it, i) => <li key={i}>{it}</li>)}
                  </ol>
                </div>
              )}
              <p className="mt-2 text-sm text-zinc-300">{q.explain}</p>
              {nextBtn}
            </>
          )}
        </div>
      )}

      {/* ── Koppelen ──────────────────────────────── */}
      {q.type === 'matching' && (
        <div className="space-y-2">
          {q.pairs.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="flex-1 text-sm px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-900">
                {p.left}
              </span>
              <span className="opacity-40">→</span>
              <select
                disabled={done}
                value={match[i] ?? ''}
                onChange={e => setMatch({ ...match, [i]: e.target.value })}
                className="flex-1 text-sm px-2 py-2 rounded-xl border border-zinc-700 bg-zinc-900 disabled:opacity-70"
                style={{
                  borderColor: done
                    ? match[i] === p.right
                      ? '#4ade80'
                      : '#f87171'
                    : undefined,
                }}
              >
                <option value="">— kies —</option>
                {rights.map((r, j) => (
                  <option key={j} value={r}>{r}</option>
                ))}
              </select>
            </div>
          ))}
          {!done ? (
            <button
              disabled={Object.keys(match).length < q.pairs.length}
              onClick={() => {
                const correct = q.pairs.filter((p, i) => match[i] === p.right).length;
                commit(correct / q.pairs.length === 1 ? 1 : correct / q.pairs.length);
              }}
              className="mt-2 w-full py-2.5 rounded-xl font-medium bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40"
            >
              Controleer
            </button>
          ) : (
            <>
              {verdict(grade === 1, grade > 0 && grade < 1)}
              <p className="mt-2 text-sm text-zinc-300">{q.explain}</p>
              {nextBtn}
            </>
          )}
        </div>
      )}

      {/* ── Open vraag (zelfbeoordeeld) ───────────── */}
      {q.type === 'whyhow' && (
        <div className="space-y-2">
          <textarea
            disabled={done}
            placeholder="Schrijf je antwoord (voor jezelf)…"
            rows={3}
            className="w-full text-sm px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-900 resize-none"
          />
          {!showModel ? (
            <button
              onClick={() => setShowModel(true)}
              className="mt-1 w-full py-2.5 rounded-xl font-medium bg-zinc-800 hover:bg-zinc-700"
            >
              Toon modelantwoord
            </button>
          ) : (
            <div className="mt-1 rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-sm text-zinc-300">
              <div className="text-xs uppercase tracking-wide opacity-60 mb-1">Modelantwoord</div>
              {q.model}
            </div>
          )}
          {showModel && !done && (
            <div className="mt-2">
              <div className="text-xs opacity-60 mb-1">Hoe ging het?</div>
              <div className="flex gap-2">
                <button onClick={() => commit(0)} className="flex-1 py-2 rounded-xl border border-zinc-700 hover:border-red-400">Fout</button>
                <button onClick={() => commit(0.5)} className="flex-1 py-2 rounded-xl border border-zinc-700 hover:border-amber-400">Deels</button>
                <button onClick={() => commit(1)} className="flex-1 py-2 rounded-xl border border-zinc-700 hover:border-green-400">Goed</button>
              </div>
            </div>
          )}
          {done && (
            <>
              {verdict(grade === 1, grade > 0 && grade < 1)}
              {nextBtn}
            </>
          )}
        </div>
      )}
    </div>
  );
}
