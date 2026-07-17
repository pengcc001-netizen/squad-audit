import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { quizQuestions } from "../data/questions";
import { squadRoles } from "../data/squadRoles";
import { computeAudit, encodeResult } from "../lib/squad";
import Ad from "../components/Ad";
import ShareButtons from "../components/ShareButtons";

type Phase = "intro" | "quiz" | "result";

const METRIC_KEYS = ["reliability", "funFactor", "dramaLevel", "loyalty", "cohesion"] as const;
const METRIC_LABELS: Record<string, string> = {
  reliability: "Reliability",
  funFactor: "Fun Factor",
  dramaLevel: "Drama Level",
  loyalty: "Loyalty",
  cohesion: "Cohesion",
};
const METRIC_COLORS: Record<string, string> = {
  reliability: "#1E40AF",
  funFactor: "#0D9488",
  dramaLevel: "#DC2626",
  loyalty: "#16A34A",
  cohesion: "#EAB308",
};

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const encoded = encodeResult(newAnswers);
      window.history.replaceState(null, "", `/r/${encoded}`);
      setPhase("result");
    }
  };

  const resetQuiz = () => {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers([]);
    navigate("/");
  };

  // ---------- INTRO ----------
  if (phase === "intro") {
    return (
      <div className="fade-in">
        <Helmet>
          <title>Squad Audit - Analyze Your Friend Group Dynamics [2026]</title>
          <meta name="description" content="Audit your squad. Take the quiz and get a detailed squad audit report with roles, health metrics, and group dynamics analysis. Free, no sign-up." />
          <meta property="og:title" content="Squad Audit - How Healthy Is Your Friend Group?" />
          <meta property="og:description" content="Audit your friend group. 8 squad roles, 5 health metrics, 12 questions." />
          <meta property="og:url" content="https://squad.csskey.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Squad Audit",
              url: "https://squad.csskey.com",
              applicationCategory: "EntertainmentApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description: "Audit your squad. Get a detailed report with roles, health metrics, and group dynamics analysis.",
            })}
          </script>
        </Helmet>

        {/* Hero */}
        <section style={{ textAlign: "center", padding: "40px 0 60px" }}>
          <h2 className="eyebrow" style={{ marginBottom: 16 }}>Squad Audit Report · 2026</h2>
          <h1 className="gradient-text" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 700, fontFamily: "var(--font-heading)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 24 }}>
            Audit Your Squad
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "var(--text-soft)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
            Answer 12 questions about your friend group dynamics and get a detailed audit report with your squad role, health metrics, and group dynamics analysis. {squadRoles.length} roles, 5 metrics.
          </p>
          <button onClick={() => setPhase("quiz")} className="btn btn-primary" style={{ padding: "16px 48px", fontSize: 14 }}>
            Start the Audit
          </button>
          <div style={{ marginTop: 16 }}>
            <span style={{ color: "var(--text-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>12 questions · ~2 minutes · Free, no sign-up</span>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 60 }}>
          {[
            { label: "Squad Roles", value: `${squadRoles.length}` },
            { label: "Health Metrics", value: "5" },
            { label: "Questions", value: "12" },
            { label: "Free", value: "Yes" },
          ].map((stat, i) => (
            <div key={i} className="audit-card" style={{ padding: "24px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--primary)", marginBottom: 4, fontFamily: "var(--font-mono)" }}>{stat.value}</div>
              <div className="section-label" style={{ fontSize: 11 }}>{stat.label}</div>
            </div>
          ))}
        </section>

        <Ad />

        {/* How it works */}
        <section style={{ marginBottom: 60 }}>
          <h2 className="eyebrow" style={{ textAlign: "center", marginBottom: 8 }}>How It Works</h2>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontFamily: "var(--font-heading)", marginBottom: 40 }}>Three Steps to Your Audit Report</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { num: "01", title: "Answer 12 Questions", desc: "Tell us about your friend group dynamics — how decisions get made, conflicts get handled, and Friday nights unfold." },
              { num: "02", title: "Get Your Role", desc: "Discover your squad role and see how your group scores on 5 health metrics: Reliability, Fun, Drama, Loyalty, and Cohesion." },
              { num: "03", title: "Read the Report", desc: "Get a full audit report with your role, responsibilities, strengths, weaknesses, and compatibility analysis." },
            ].map((step, i) => (
              <div key={i} className="audit-card" style={{ padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)", opacity: 0.3, marginBottom: 8, fontFamily: "var(--font-mono)" }}>{step.num}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", marginBottom: 12, color: "var(--text)" }}>{step.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: 15, lineHeight: 1.7, fontFamily: "var(--font-body)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured roles */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h2 className="eyebrow" style={{ marginBottom: 4 }}>Featured</h2>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>The Squad Roles</h2>
            </div>
            <Link to="/roles" style={{ color: "var(--primary)", fontSize: 14, fontFamily: "var(--font-mono)", fontWeight: 600 }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {squadRoles.slice(0, 4).map((r) => (
              <Link key={r.slug} to={`/roles/${r.slug}`} style={{ textDecoration: "none" }}>
                <div className="audit-card" style={{ padding: "24px", height: "100%" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>{r.emoji}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{r.name}</h3>
                  <p style={{ fontSize: 13, color: "var(--primary)", fontStyle: "italic", fontFamily: "var(--font-body)" }}>{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ---------- QUIZ ----------
  if (phase === "quiz") {
    const q = quizQuestions[currentQ];
    const progress = ((currentQ + 1) / quizQuestions.length) * 100;
    return (
      <div className="fade-in" style={{ maxWidth: 720, margin: "0 auto" }}>
        <Helmet>
          <title>Squad Quiz - Question {currentQ + 1} of {quizQuestions.length} | Squad Audit</title>
        </Helmet>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "var(--text-soft)", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>QUESTION {currentQ + 1} / {quizQuestions.length}</span>
            <span style={{ fontSize: 12, color: "var(--primary)", fontFamily: "var(--font-mono)" }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 4, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, var(--primary), var(--secondary))", borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>
        </div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: 32, color: "var(--text)" }}>{q.question}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "20px 24px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s ease",
                color: "var(--text)",
                fontSize: 15,
                fontFamily: "var(--font-body)",
                lineHeight: 1.5,
                boxShadow: "var(--shadow-sm)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.background = "var(--primary-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg-elevated)";
              }}
            >
              <span style={{ color: "var(--primary)", fontFamily: "var(--font-mono)", fontWeight: 600, marginRight: 12 }}>{String.fromCharCode(65 + i)}</span>
              {opt.text}
            </button>
          ))}
        </div>
        {currentQ > 0 && (
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <button
              onClick={() => {
                setCurrentQ(currentQ - 1);
                setAnswers(answers.slice(0, -1));
              }}
              style={{ background: "none", border: "none", color: "var(--text-faint)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-mono)" }}
            >
              ← Previous question
            </button>
          </div>
        )}
      </div>
    );
  }

  // ---------- RESULT ----------
  if (phase === "result") {
    const { role, scores } = computeAudit(answers);
    const shareUrl = typeof window !== "undefined" ? window.location.href : "https://squad.csskey.com";
    const compatibleRoles = role.compatibility
      .map((slug) => squadRoles.find((r) => r.slug === slug))
      .filter((r): r is typeof squadRoles[0] => Boolean(r));

    return (
      <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
        <Helmet>
          <title>Your Squad Audit: {role.name} | Squad Audit</title>
          <meta name="description" content={`My squad role is ${role.name}. Audit your squad and get your own report.`} />
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        <div className="audit-card" style={{ padding: "40px 32px", marginBottom: 32 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--primary)", marginBottom: 8, fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>Squad Audit Report</div>
            <div style={{ width: 60, height: 2, background: "var(--primary)", margin: "0 auto 24px", opacity: 0.3 }} />
          </div>

          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>{role.emoji}</div>
            <h1 className="gradient-text" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, marginBottom: 8 }}>{role.name}</h1>
            <p style={{ fontSize: 16, color: "var(--primary)", fontStyle: "italic", fontFamily: "var(--font-body)" }}>{role.tagline}</p>
          </div>

          {/* Audit scores */}
          <div style={{ marginBottom: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
            <h2 className="eyebrow" style={{ marginBottom: 16 }}>Health Metrics</h2>
            {METRIC_KEYS.map((key) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: "var(--text-soft)", fontFamily: "var(--font-mono)" }}>{METRIC_LABELS[key]}</span>
                  <span style={{ fontSize: 13, color: METRIC_COLORS[key], fontWeight: 700, fontFamily: "var(--font-mono)" }}>{scores[key]}/100</span>
                </div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" style={{ width: `${scores[key]}%`, background: METRIC_COLORS[key] }} />
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
            <h2 className="eyebrow" style={{ marginBottom: 12 }}>Role Analysis</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text)", fontFamily: "var(--font-body)", textAlign: "justify" }}>{role.description}</p>
          </div>

          {/* Responsibilities */}
          <div style={{ marginBottom: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
            <h2 className="eyebrow" style={{ marginBottom: 12 }}>Responsibilities</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {role.responsibilities.map((r, i) => (
                <li key={i} style={{ fontSize: 14, color: "var(--text)", padding: "4px 0", fontFamily: "var(--font-body)" }}>
                  <span style={{ color: "var(--secondary)", marginRight: 8 }}>▸</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths & Weaknesses */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
            <div>
              <h2 className="eyebrow" style={{ marginBottom: 8, color: "var(--success)" }}>Strengths</h2>
              {role.strengths.map((s, i) => (
                <div key={i} style={{ fontSize: 13, color: "var(--text)", padding: "2px 0", fontFamily: "var(--font-body)" }}>
                  <span style={{ color: "var(--success)", marginRight: 6 }}>+</span>{s}
                </div>
              ))}
            </div>
            <div>
              <h2 className="eyebrow" style={{ marginBottom: 8, color: "var(--danger)" }}>Weaknesses</h2>
              {role.weaknesses.map((w, i) => (
                <div key={i} style={{ fontSize: 13, color: "var(--text)", padding: "2px 0", fontFamily: "var(--font-body)" }}>
                  <span style={{ color: "var(--danger)", marginRight: 6 }}>−</span>{w}
                </div>
              ))}
            </div>
          </div>

          {/* Compatibility */}
          {compatibleRoles.length > 0 && (
            <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
              <h2 className="eyebrow" style={{ marginBottom: 12 }}>Compatible Roles</h2>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {compatibleRoles.map((c) => (
                  <Link key={c.slug} to={`/roles/${c.slug}`} className="chip chip-primary" style={{ textDecoration: "none" }}>
                    {c.emoji} {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Share Your Audit Report</div>
          <ShareButtons url={shareUrl} title={`My squad role is ${role.name}! Audit your squad:`} />
        </div>

        <Ad />

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <button onClick={resetQuiz} className="btn btn-ghost" style={{ fontSize: 13 }}>↻ Retake the Audit</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Explore More</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/roles" className="btn btn-outline" style={{ fontSize: 12 }}>All Squad Roles</Link>
            <Link to="/metrics" className="btn btn-outline" style={{ fontSize: 12 }}>Health Metrics</Link>
            <Link to="/blog" className="btn btn-outline" style={{ fontSize: 12 }}>Read the Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  // Defensive fallback — should never be reached
  return (
    <div className="fade-in" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Helmet>
        <title>Page Not Found - Squad Audit</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1>
      <p>Something went wrong. Please try again.</p>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 600, color: 'var(--primary)' }}>Go Home</Link>
    </div>
  );
}
