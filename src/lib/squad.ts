import type { QuizQuestion } from "../data/questions";
import type { SquadRole } from "../data/squadRoles";
import { quizQuestions } from "../data/questions";
import { squadRoles } from "../data/squadRoles";

export interface AuditResult {
  role: SquadRole;
  scores: {
    reliability: number;
    funFactor: number;
    dramaLevel: number;
    loyalty: number;
    cohesion: number;
  };
}

// Aggregate option indices into per-role scores, then derive the dominant role
// and the 5 audit metrics (each scaled to 0-100).
export function computeAudit(optionIndices: number[]): AuditResult {
  const tally: Record<string, number> = {};

  for (const slug of squadRoles.map((r) => r.slug)) tally[slug] = 0;

  optionIndices.forEach((optIdx, qIdx) => {
    const q: QuizQuestion = quizQuestions[qIdx];
    const opt = q.options[optIdx];
    if (!opt) return;
    for (const [slug, pts] of Object.entries(opt.roleScores)) {
      tally[slug] = (tally[slug] || 0) + pts;
    }
  });

  // Determine winning role by highest tally
  let winningSlug = squadRoles[0].slug;
  let winningScore = -1;
  for (const r of squadRoles) {
    if (tally[r.slug] > winningScore) {
      winningScore = tally[r.slug];
      winningSlug = r.slug;
    }
  }

  const role = squadRoles.find((r) => r.slug === winningSlug) || squadRoles[0];

  // Blend the winning role's baseline audit scores with a small live adjustment
  // derived from how dominant the win was (0-15 point swing per metric).
  const total = Object.values(tally).reduce((a, b) => a + b, 0) || 1;
  const dominance = winningScore / total; // 0..1
  const swing = Math.round(dominance * 12);

  const clamp = (n: number) => Math.max(0, Math.min(100, n));

  const scores = {
    reliability: clamp(role.auditScore.reliability + Math.round(swing * 0.4)),
    funFactor: clamp(role.auditScore.funFactor + Math.round(swing * 0.6)),
    // Drama is inverse-positive: high drama score means low drama health, so we report
    // the raw drama level as-is (higher = more drama, which the UI labels accordingly).
    dramaLevel: clamp(role.auditScore.dramaLevel + Math.round(swing * 0.2)),
    loyalty: clamp(role.auditScore.loyalty + Math.round(swing * 0.5)),
    cohesion: clamp(role.auditScore.cohesion + Math.round(swing * 0.3)),
  };

  return { role, scores };
}

export function encodeResult(optionIndices: number[]): string {
  return btoa(JSON.stringify(optionIndices));
}

export function decodeResult(code: string): number[] | null {
  try {
    const parsed = JSON.parse(atob(code));
    if (Array.isArray(parsed) && parsed.length === quizQuestions.length) {
      if (parsed.every((n) => Number.isInteger(n) && n >= 0 && n < 4)) {
        return parsed;
      }
    }
  } catch {
    // fallthrough
  }
  return null;
}
