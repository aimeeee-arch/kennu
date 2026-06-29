import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import { orbContext, islandProgress } from '../content';
import { load, setCard, markCompleted, grantCertificate } from '../engines/storage';
import { review, qualityFromScore } from '../engines/sm2';
import OrbReader from '../components/OrbReader';
import QuestionCard from '../components/QuestionCard';

type Phase = 'priming' | 'read' | 'quiz' | 'summary';

export default function Learn() {
  const { orbId } = useParams();
  const nav = useNavigate();
  const ctx = orbId ? orbContext(orbId) : undefined;

  const [phase, setPhase] = useState<Phase>('priming');
  const [qIdx, setQIdx] = useState(0);
  const [grades, setGrades] = useState<number[]>([]);
  const [newCert, setNewCert] = useState(false);

  // Reset de sessie wanneer je naar een andere orb gaat (zelfde route, ander param).
  useEffect(() => {
    setPhase('priming');
    setQIdx(0);
    setGrades([]);
    setNewCert(false);
  }, [orbId]);

  if (!ctx) return <Navigate to="/" replace />;
  const { island, orb, flatOrbs, flatIndex } = ctx;
  const accent = island.color;
  const nextOrb = flatOrbs[flatIndex + 1];

  const finishSession = (allGrades: number[]) => {
    const score = allGrades.length
      ? allGrades.reduce((a, b) => a + b, 0) / allGrades.length
      : 1;
    const prev = load().cards[orb.id];
    setCard(orb.id, review(prev, qualityFromScore(score)));
    markCompleted(orb.id);
    // certificaat?
    const prog = islandProgress(island, load().completed);
    if (prog.total > 0 && prog.done >= prog.total && !load().certificates.includes(island.id)) {
      grantCertificate(island.id);
      setNewCert(true);
    }
    setPhase('summary');
  };

  const onGraded = (g: number) => setGrades(prev => [...prev, g]);

  const onNext = () => {
    if (qIdx < orb.questions.length - 1) {
      setQIdx(qIdx + 1);
    } else {
      finishSession(grades);
    }
  };

  const stepLabel: Record<Phase, string> = {
    priming: 'Denk vooruit',
    read: 'Lezen',
    quiz: `Vraag ${qIdx + 1}/${orb.questions.length}`,
    summary: 'Samenvatting',
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-sm">
        <Link to={`/eiland/${island.id}`} className="opacity-60 hover:opacity-100">← {island.title}</Link>
        <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: accent, color: '#0a0a0a' }}>
          {stepLabel[phase]}
        </span>
      </div>

      {/* ── Priming ─────────────────────────────── */}
      {phase === 'priming' && (
        <div className="space-y-5">
          <h1 className="text-xl font-semibold">{orb.title}</h1>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="text-xs uppercase tracking-wide opacity-60 mb-2">Denk hier even over na</div>
            <p className="text-lg">{orb.priming}</p>
          </div>
          <button
            onClick={() => setPhase('read')}
            className="w-full py-3 rounded-xl font-medium text-zinc-950"
            style={{ background: accent }}
          >
            Ik heb erover nagedacht →
          </button>
        </div>
      )}

      {/* ── Lezen ───────────────────────────────── */}
      {phase === 'read' && (
        <div className="space-y-5">
          <OrbReader orb={orb} color={accent} />
          <button
            onClick={() => setPhase('quiz')}
            className="w-full py-3 rounded-xl font-medium text-zinc-950"
            style={{ background: accent }}
          >
            Naar de vragen →
          </button>
        </div>
      )}

      {/* ── Quiz ────────────────────────────────── */}
      {phase === 'quiz' && (
        <QuestionCard
          key={qIdx}
          question={orb.questions[qIdx]}
          accent={accent}
          onGraded={onGraded}
          onNext={onNext}
          isLast={qIdx === orb.questions.length - 1}
        />
      )}

      {/* ── Samenvatting ────────────────────────── */}
      {phase === 'summary' && (
        <div className="space-y-5">
          {newCert && (
            <div className="rounded-2xl p-4 border text-center" style={{ borderColor: accent }}>
              <div className="text-2xl">🏆</div>
              <div className="font-semibold mt-1">Certificaat: {island.title}!</div>
              <div className="text-sm opacity-70">Alle orbs van dit eiland afgerond.</div>
            </div>
          )}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="text-xs uppercase tracking-wide opacity-60 mb-2">Onthoud dit</div>
            <ul className="space-y-2">
              {orb.summary.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span style={{ color: accent }}>•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm opacity-70 flex items-center gap-2">
            <span>🛡️</span>
            <span>Opgeslagen in je Memory Shield — je ziet deze orb terug wanneer het tijd is om op te frissen.</span>
          </div>
          <div className="flex gap-2">
            {nextOrb ? (
              <button
                onClick={() => nav(`/leer/${nextOrb.id}`)}
                className="flex-1 py-3 rounded-xl font-medium text-zinc-950"
                style={{ background: accent }}
              >
                Volgende orb →
              </button>
            ) : (
              <Link
                to={`/eiland/${island.id}`}
                className="flex-1 py-3 rounded-xl font-medium text-zinc-950 text-center"
                style={{ background: accent }}
              >
                Eiland afgerond →
              </Link>
            )}
            <Link
              to={`/eiland/${island.id}`}
              className="px-4 py-3 rounded-xl font-medium border border-zinc-700 hover:border-zinc-500"
            >
              Eiland
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
